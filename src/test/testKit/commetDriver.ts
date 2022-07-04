import type { Locator, Page } from 'playwright';
import { COMMENTS, COMMENT_LIKE_BUTTON, COMMENT_INFO } from './selectors';

export class CommentDriver {
    page: Page;
    commentsLocator: Locator;
    commentLikeButton: Locator;
    commentInfo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.commentsLocator = page.locator(COMMENTS);
        this.commentLikeButton = page.locator(COMMENT_LIKE_BUTTON);
        this.commentInfo = page.locator(COMMENT_INFO);
    }

    clickLikeCommentButton() {
        return this.commentLikeButton.nth(0).click();
    }

    getCommentsTimeAgo() {
        return this.commentInfo.nth(0).innerText();
    }

    getCommentsLikes() {
        return this.commentInfo.nth(1).innerText();
    }

    getLikeCommentButtonSrcAttribute() {
        return this.page.getAttribute(COMMENT_LIKE_BUTTON, 'src');
    }
}
