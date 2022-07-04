import type { Locator, Page } from 'playwright';
import { LIKE_POST_BUTTON, LIKE_BY_PROFILE_PICTURE, LIKE_BY_TEXT } from './selectors';

export class LikePostDriver {
    page: Page;
    likePostButton: Locator;
    likeByProfilePicture: Locator;
    likeByText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.likePostButton = page.locator(LIKE_POST_BUTTON);
        this.likeByProfilePicture = page.locator(LIKE_BY_PROFILE_PICTURE);
        this.likeByText = page.locator(LIKE_BY_TEXT);
    }

    clickLikePostButton() {
        return this.likePostButton.click();
    }

    getLikeByProfilePictureCount() {
        return this.likeByProfilePicture.count();
    }

    async getLikeByText() {
        const likeByText = await this.likeByText.nth(0).innerText();
        const textArray: string[] = [];

        if (likeByText === 'yonni') {
            textArray.push(likeByText);
            return textArray;
        }
        textArray.push(likeByText.slice(0, 3));
        textArray.push(likeByText.slice(3, 6));
        textArray.push(likeByText.slice(6));

        return textArray;
    }

    getLikePostButtonSrcAttribute() {
        return this.page.getAttribute(LIKE_POST_BUTTON, 'src');
    }
}
