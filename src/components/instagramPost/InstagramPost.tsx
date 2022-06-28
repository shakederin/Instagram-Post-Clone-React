import { PostLayout } from '../postLayout/PostLayout';
import { ImageContainer } from '../imageContainer/ImageContainer';
import { classes } from './InstagramPost.st.css';
import type { User, PostData } from '../../types';

export interface IInstagramPost {
    owner: User;
    postData: PostData;
    imgUrls: string[];
}

export const InstagramPost = ({ owner, postData, imgUrls }: IInstagramPost) => (
    <div className={classes.root}>
        <ImageContainer imgUrls={imgUrls} />
        <PostLayout owner={owner} postData={postData} />
    </div>
);
