import PostLayout from '../postLayout/PostLayout';
import ImageContainer from '../imageContainer/ImageContainer';
import { classes } from './InstagramPost.st.css';
import type { User, PostData } from '../../types';

interface IInstagramPost {
    owner: User;
    postData: PostData;
    imgUrls: string[];
}

const InstagramPost = ({ owner, postData, imgUrls }: IInstagramPost) => (
    <div className={classes.root}>
        <ImageContainer imgUrls={imgUrls} />
        <PostLayout owner={owner} postData={postData} />
    </div>
);

export default InstagramPost;
