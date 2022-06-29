import type { Locator, Page } from 'playwright';
import { COMMENTS, COMMENT_INPUT, POST_COMMENT_BUTTON } from './selectors';

export class AddCommentDriver {
    page: Page;
    commentInputLocator: Locator;
    postCommentButtonLocator: Locator;
    commentsLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.commentInputLocator = page.locator(COMMENT_INPUT);
        this.postCommentButtonLocator = page.locator(POST_COMMENT_BUTTON);
        this.commentsLocator = page.locator(COMMENTS);
    }
    typeInput(input: string) {
        return this.commentInputLocator.type(input);
    }

    clickPostCommentButton() {
        return this.postCommentButtonLocator.click();
    }

    getCommentsCount() {
        return this.commentsLocator.count();
    }
}
