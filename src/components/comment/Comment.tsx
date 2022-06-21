import Username from '../username/Username';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import CommentContent from '../commentContent/CommentContent';
import LikeCommentButton from '../likeCommentButoon/LikeCommentButton';
import { classes } from './Comment.st.css';

interface IComment {
    isOwnerComment: boolean;
    profilePicture: string;
    userName: string;
    content: string;
}

const Comment = ({ isOwnerComment, profilePicture, userName, content }: IComment) => (
    <li className={classes.comment}>
        <div className={classes.postTitle}>
            <ProfilePicture src={profilePicture} />
            <div className={classes.commentText}>
                <div>
                    <Username userName={userName} header={false} />
                    <CommentContent content={content} />
                </div>
                <CommentInfo commentPostDate={new Date()} commentLikesCount={0} />
            </div>
            {isOwnerComment ? <></> : <LikeCommentButton />}
        </div>
    </li>
);

export default Comment;
