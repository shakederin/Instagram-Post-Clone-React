import { AddCommentDriver } from '../testKit/addComment/addCommentDriver';
import { Browser, chromium, Page } from 'playwright';
const port = 3000;

describe('add commment ', () => {
    let browser: Browser;
    let page: Page;
    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });
    beforeEach(async () => {
        await page.goto(`http://localhost:${port}/`);
    });
    it('add comment with Enter', () => {
        const instagramDriver = new AddCommentDriver(page);
    });
    it('add comment with Post button', () => {});
    it('add comment with invalide value', () => {});
});
