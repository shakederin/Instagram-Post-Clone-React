import PostHeader from '../postHeader/PostHeader ';
import CommentsList from '../commentsList/CommentsList';
import PostReactionContainer from '../postReactionContainer/PostReactionContainer';
import PostDescription from '../postDescription/PostDescription';
import { classes } from './PostLayout.st.css';
import { useState } from 'react';

interface IPostInfo {
    userName: string;
    profilePicture: string;
    description: string;
    creationDate: Date;
}

// type Comment = {
//     userName: string;
//     profilePicture: string;
//     content: string;
// };

// interface ICommentListProps {
//     comments: Comment[];
// }

const PostLayout = ({ userName, description, profilePicture, creationDate }: IPostInfo) => {
    const [state, _setState] = useState([]);
    return (
        <div className={classes.postLayout}>
            <PostHeader userName={userName} profilePicture={profilePicture} />
            <PostDescription
                profilePicture={profilePicture}
                userName={userName}
                description={description}
                creationDate={creationDate}
            />
            <CommentsList comments={state} />
            <PostReactionContainer />
        </div>
    );
};

export default PostLayout;
