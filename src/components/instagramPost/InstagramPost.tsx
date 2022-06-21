import type { User, PostData } from '../../types';
import ImageContainer from '../imageContainer/ImageContainer';
import PostLayout from '../postLayout/PostLayout';
import { classes } from './InstagramPost.st.css';

interface IInstagramPost {
    owner: User;
    postData: PostData;
    imgUrls: string[];
}

const InstagramPost = ({ owner, postData, imgUrls }: IInstagramPost) => (
    <div className={classes.mainContainer}>
        <ImageContainer imgUrls={imgUrls} />
        <PostLayout owner={owner} postData={postData} />
    </div>
);

export default InstagramPost;
