import { AddCommentDriver } from '../testKit/addCommentDriver';
import { Browser, chromium, Page } from 'playwright';
import { expect } from 'chai';
const port = 8080;
const mockContent = 'Hello World';

describe('add commment ', () => {
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
    it('add comment with Enter', async () => {
        const instagramDriver = new AddCommentDriver(page);
        const commentCountBeforeAction = await instagramDriver.getCommentsCount();
        await instagramDriver.typeInput(mockContent);
        page.keyboard.press('Enter');
        const commentCountAfterAction = await instagramDriver.getCommentsCount();
        expect(commentCountAfterAction).to.equal(commentCountBeforeAction + 1);
    });
    it('add comment with Post button', async () => {
        const instagramDriver = new AddCommentDriver(page);
        const commentCountBeforeAction = await instagramDriver.getCommentsCount();
        await instagramDriver.typeInput(mockContent);
        await instagramDriver.clickPostCommentButton();
        const commentCountAfterAction = await instagramDriver.getCommentsCount();
        expect(commentCountAfterAction).to.equal(commentCountBeforeAction + 1);
    });
    it('Cant add comment with invalide value', async () => {
        const instagramDriver = new AddCommentDriver(page);
        await instagramDriver.typeInput(' ');
        page.keyboard.press('Enter');
        await instagramDriver.typeInput('');
        page.keyboard.press('Enter');
        const commentCountAfterAction = await instagramDriver.getCommentsCount();
        expect(commentCountAfterAction).to.equal(0);
    });
});
