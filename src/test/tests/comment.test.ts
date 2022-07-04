import { Browser, chromium, Page } from 'playwright';
import { expect } from 'chai';
import { CommentDriver } from '../testKit/commetDriver';
import { AddCommentDriver } from '../testKit/addCommentDriver';
import { RED_HEART_ATTRIBUTE } from '../testKit/constants';
import { FIVE_SECONDS } from '../../constants';
const port = 8080;
const mockContent = 'Hello World';

describe('Comment check', () => {
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
        const instagramDriver = new AddCommentDriver(page);
        await instagramDriver.typeInput(mockContent);
        page.keyboard.press('Enter');
    });
    context('Like comment', async () => {
        it('add 1 like to the current likes count', async () => {
            const commentDriver = new CommentDriver(page);
            const likeCountInnerText = (await commentDriver.getCommentsLikes()).split(' ')[0];
            const likeCountBeforeClicked =
                likeCountInnerText === 'like' ? 0 : Number(likeCountInnerText);
            await commentDriver.clickLikeCommentButton();
            const likeCountAfterClicked = Number(
                (await commentDriver.getCommentsLikes()).split(' ')[0]
            );
            expect(likeCountAfterClicked, 'didnt add 1 like to the current likes count').to.equal(
                likeCountBeforeClicked + 1
            );
        });
        it('make the heart button toggle', async () => {
            const commentDriver = new CommentDriver(page);
            const buttonAttributeBeforeClick =
                await commentDriver.getLikeCommentButtonSrcAttribute();
            await commentDriver.clickLikeCommentButton();
            const buttonAttributeAfterClick =
                await commentDriver.getLikeCommentButtonSrcAttribute();
            expect(buttonAttributeAfterClick, 'didnt make the heart button turn red').to.equal(
                RED_HEART_ATTRIBUTE
            );
            await commentDriver.clickLikeCommentButton();
            const buttonAttributeAfterTwoClicks =
                await commentDriver.getLikeCommentButtonSrcAttribute();
            expect(buttonAttributeBeforeClick, 'didnt make the heart toggle back').to.equal(
                buttonAttributeAfterTwoClicks
            );
        });
    });
    context('Time past sinse creation', () => {
        const ATimeStemp = ['s', 'm', 'h'];
        it('show time past since creation', async () => {
            const commentDriver = new CommentDriver(page);
            const timePast = Number((await commentDriver.getCommentsTimeAgo()).split(' ')[0]);
            const timestemp = (await commentDriver.getCommentsTimeAgo()).split(' ')[1];
            expect(timePast, 'time past is not correct').to.equal(0);
            expect(ATimeStemp, 'time stemp is not correct').to.include(timestemp);
        });
        it('see if time past since creation changed', async () => {
            const commentDriver = new CommentDriver(page);
            const timestemp = (await commentDriver.getCommentsTimeAgo()).split(' ')[1];

            expect(ATimeStemp, 'time stemp is not correct').to.include(timestemp);

            await new Promise<void>((resolve) =>
                setTimeout(() => {
                    resolve();
                }, FIVE_SECONDS)
            );
            const timePast = Number((await commentDriver.getCommentsTimeAgo()).split(' ')[0]);
            expect(timePast, 'time past is not correct').to.equal(5);
        });
    });
});
