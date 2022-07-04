import { Browser, chromium, Page } from 'playwright';
import { expect } from 'chai';
import { RED_HEART_ATTRIBUTE } from '../testKit/constants';
import { LikePostDriver } from '../testKit/likePostDriver';

const port = 8080;

describe('Like post', () => {
    let browser: Browser;
    let page: Page;
    before(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
    });
    after(async () => {
        await page.close();
        await browser.close();
    });
    beforeEach(async () => {
        await page.goto(`http://localhost:${port}/`);
    });
    it('Toggle the heart icon between red and white', async () => {
        const likePostDriver = new LikePostDriver(page);
        const buttonSrcBeforeClick = await likePostDriver.getLikePostButtonSrcAttribute();
        expect(buttonSrcBeforeClick, 'src is equal to red heart src before click').to.not.equal(
            RED_HEART_ATTRIBUTE
        );
        await likePostDriver.clickLikePostButton();
        const buttonSrcAfterClick = await likePostDriver.getLikePostButtonSrcAttribute();
        expect(buttonSrcAfterClick, 'src didnt change after click').to.not.equal(
            buttonSrcBeforeClick
        );
        expect(buttonSrcAfterClick, 'src is not equal to red heart src after click').to.equal(
            RED_HEART_ATTRIBUTE
        );
        await likePostDriver.clickLikePostButton();
        const buttonSrcAfterSecondClick = await likePostDriver.getLikePostButtonSrcAttribute();
        expect(buttonSrcAfterSecondClick, 'heart stayed red, and didnt toggle back').to.not.equal(
            RED_HEART_ATTRIBUTE
        );
        expect(buttonSrcBeforeClick, 'heart didnt toggle back').to.equal(buttonSrcAfterSecondClick);
    });
    context('Add "you" to people who like button', () => {
        it('Add your profile picture', async () => {
            const likePostDriver = new LikePostDriver(page);
            const profilePictureCount = await likePostDriver.getLikeByProfilePictureCount();
            await likePostDriver.clickLikePostButton();
            const profilePictureCountAfterClick =
                await likePostDriver.getLikeByProfilePictureCount();
            expect(profilePictureCountAfterClick).to.equal(profilePictureCount + 1);
        });
        it('Tell that you liked the post', async () => {
            const likePostDriver = new LikePostDriver(page);
            const stringOptions = ['other', 'others'];
            const likedByTextBeforeLike = await likePostDriver.getLikeByText();
            await likePostDriver.clickLikePostButton();
            const likedByTextAfterLike = await likePostDriver.getLikeByText();
            const howManyOthres = likedByTextAfterLike[2].split(' ');
            const likesAfterClick = Number(howManyOthres[0]);
            expect(likedByTextBeforeLike[0]).to.equal('yonni');
            expect(likedByTextAfterLike[0]).to.equal('you');
            expect(likedByTextAfterLike[1]).to.equal('and');
            expect(stringOptions).to.include(howManyOthres[1]);
            expect(likesAfterClick).to.equal(1);
        });
    });
});
