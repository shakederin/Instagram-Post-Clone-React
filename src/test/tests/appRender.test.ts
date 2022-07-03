import { appRenderDriver } from '../testKit/appRenderDriver';
import { Browser, chromium, Page } from 'playwright';
import { expect } from 'chai';
const port = 8080;

describe('Render app', async () => {
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
    context('Render image container', async () => {
        it('Render the image container', async () => {
            const renderAppDriver = new appRenderDriver(page);
            expect(await renderAppDriver.isImageContainer(), 'image container element not rendered')
                .to.be.true;
        });
        it('Render the left arrow button', async () => {
            const renderAppDriver = new appRenderDriver(page);
            expect(await renderAppDriver.isLeftArrow(), 'left arrow element not rendered').to.be
                .true;
        });
        it('Render the right arrow button', async () => {
            const renderAppDriver = new appRenderDriver(page);
            expect(await renderAppDriver.isRightArrow(), 'right arrow element not rendered').to.be
                .true;
        });
        it('Render the photo index indicator', async () => {
            const renderAppDriver = new appRenderDriver(page);
            expect(
                await renderAppDriver.isPhotoIndexIndicator(),
                'photo index indicator element not rendered'
            ).to.be.true;
        });
    });

    context('Render post layout', () => {
        context('Render post header', () => {
            it('Render the post header', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(await renderAppDriver.isPostHeader(), 'post header not rendered').to.be.true;
            });
            it('Render the profile picture', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(
                    await renderAppDriver.isPostHeaderProfilePicture(),
                    'profile picture not rendered'
                ).to.be.true;
            });
            it('Render ellipsis', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(await renderAppDriver.isEllipsis(), 'ellipsis element not rendered').to.be
                    .true;
            });
        });
        context('Render post description', () => {
            it('Render the post desctiption', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(await renderAppDriver.isPostDescription(), 'post desctiption not rendered')
                    .to.be.true;
            });
            it('Render the profile picture', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(
                    await renderAppDriver.isDescriptionProfilePicture(),
                    'profile picture not rendered'
                ).to.be.true;
            });
            it('Render the post owner username', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(
                    await renderAppDriver.isPostDescriptionUsername(),
                    'post desctiption username not rendered'
                ).to.be.true;
            });
            it('Render post description content', async () => {
                const renderAppDriver = new appRenderDriver(page);
                expect(
                    await renderAppDriver.isPostDescriptionText(),
                    'post desctiption content not rendered'
                ).to.be.true;
            });
        });
        it('Render comment list element', () => {});
        context('Render post reply area', () => {
            it('Render the reaction icons bar', () => {});
            it('Render the like by container    ', () => {});
        });
        context('Render post form', () => {
            it('Render the input element', () => {});
            it('Render the post comment button', () => {});
        });
    });
});
