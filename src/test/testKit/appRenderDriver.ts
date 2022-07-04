import type { Locator, Page } from 'playwright';
import {
    INSTAGRAM_POST,
    POST_LAYOUT,
    LEFT_ARROW,
    RIGHT_ARROW,
    POST_HEADER,
    IMAGE_CONTAINER,
    POST_DESCRIPTION,
    COMMENTS_LIST,
    POST_REACTION_CONTAINER,
    PHOTO_INDEX_INDICATOR,
    HEADER_PROFILE_PICTURE,
    ELLIPSIS,
    DESCRIPTION_PROFILE_PICTURE,
    POST_DESCRIPTION_TEXT,
    POST_REACTION_BAR,
    LIKE_BY_CONTAINER,
    COMMENT_INPUT,
    POST_COMMENT_BUTTON,
    POST_DESCRIPTION_USERNAME,
} from './selectors';

export class appRenderDriver {
    page: Page;
    InstagramPost: Locator;
    ImageContainer: Locator;
    leftArrow: Locator;
    rightArrow: Locator;
    PhotoIndexIndicator: Locator;
    PostHeaderProfilePicture: Locator;
    ellipsis: Locator;
    descriptionProfilePicture: Locator;
    postDescriptionUsername: Locator;
    postDescriptionText: Locator;
    commentList: Locator;
    PostActionBar: Locator;
    LikedByContainer: Locator;
    InputForm: Locator;
    postComment: Locator;
    PostLayout: Locator;
    PostHeader: Locator;
    PostDescription: Locator;
    CommentsList: Locator;
    PostReactionContainer: Locator;
    constructor(page: Page) {
        this.page = page;
        this.InstagramPost = page.locator(INSTAGRAM_POST);
        this.ImageContainer = page.locator(IMAGE_CONTAINER);
        this.PostLayout = page.locator(POST_LAYOUT);
        this.PostHeader = page.locator(POST_HEADER);
        this.PostDescription = page.locator(POST_DESCRIPTION);
        this.CommentsList = page.locator(COMMENTS_LIST);
        this.PostReactionContainer = page.locator(POST_REACTION_CONTAINER);
        this.leftArrow = page.locator(LEFT_ARROW);
        this.rightArrow = page.locator(RIGHT_ARROW);
        this.PhotoIndexIndicator = page.locator(PHOTO_INDEX_INDICATOR);
        this.PostHeaderProfilePicture = page.locator(HEADER_PROFILE_PICTURE);
        this.ellipsis = page.locator(ELLIPSIS);
        this.descriptionProfilePicture = page.locator(DESCRIPTION_PROFILE_PICTURE);
        this.postDescriptionUsername = page.locator(POST_DESCRIPTION_USERNAME);
        this.postDescriptionText = page.locator(POST_DESCRIPTION_TEXT);
        this.commentList = page.locator(COMMENTS_LIST);
        this.PostActionBar = page.locator(POST_REACTION_BAR);
        this.LikedByContainer = page.locator(LIKE_BY_CONTAINER);
        this.InputForm = page.locator(COMMENT_INPUT);
        this.postComment = page.locator(POST_COMMENT_BUTTON);
    }
    async isElementRendered(element: Locator) {
        try {
            await element.waitFor({ state: 'attached', timeout: 2000 });
            return true;
        } catch (_error) {
            return false;
        }
    }

    isInstagramPost() {
        return this.isElementRendered(this.InstagramPost);
    }

    isImageContainer() {
        return this.isElementRendered(this.ImageContainer);
    }

    isPostLayout() {
        return this.isElementRendered(this.PostLayout);
    }

    isPostHeader() {
        return this.isElementRendered(this.PostHeader);
    }

    isPostDescription() {
        return this.isElementRendered(this.PostDescription);
    }

    isCommentsList() {
        return this.isElementRendered(this.CommentsList);
    }

    isLeftArrow() {
        return this.isElementRendered(this.leftArrow);
    }

    isRightArrow() {
        return this.isElementRendered(this.rightArrow);
    }

    isPhotoIndexIndicator() {
        return this.isElementRendered(this.PhotoIndexIndicator);
    }

    isPostHeaderProfilePicture() {
        return this.isElementRendered(this.PostHeaderProfilePicture);
    }

    isEllipsis() {
        return this.isElementRendered(this.ellipsis);
    }

    isDescriptionProfilePicture() {
        return this.isElementRendered(this.descriptionProfilePicture);
    }

    isPostDescriptionUsername() {
        return this.isElementRendered(this.postDescriptionUsername);
    }

    isPostDescriptionText() {
        return this.isElementRendered(this.postDescriptionText);
    }

    isCommentList() {
        return this.isElementRendered(this.commentList);
    }

    isPostActionBar() {
        return this.isElementRendered(this.PostActionBar);
    }

    isLikedByContainer() {
        return this.isElementRendered(this.LikedByContainer);
    }

    isInputForm() {
        return this.isElementRendered(this.InputForm);
    }

    isPostComment() {
        return this.isElementRendered(this.postComment);
    }

    isPostReactionContainer() {
        return this.isElementRendered(this.PostReactionContainer);
    }
}
