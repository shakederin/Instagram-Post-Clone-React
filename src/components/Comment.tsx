import Username from './Username';
import CommentInfo from './CommentInfo';
import ProfilePicture from './ProfilePicture';
import CommentContent from './CommentContent';
import LikeCommentButton from './LikeCommentButton';
import { classes } from '../style/comments.st.css';

interface IComment {
    isOwnerComment: boolean;
    profilePicture: string;
    userName: string;
    content: string;
}

const Comment = ({ isOwnerComment, profilePicture, userName, content }: IComment) => (
    <li className={classes.comment}>
        <div className={classes.postTitle}>
            <ProfilePicture className={classes.profilePicture} src={profilePicture} />
            <div className={classes.commentText}>
                <div>
                    <Username name={userName} header={false} />
                    <CommentContent content={content} />
                </div>
                <CommentInfo isOwnerComment={isOwnerComment} />
            </div>
            {isOwnerComment ? <></> : <LikeCommentButton />}
        </div>
    </li>
);

export default Comment;
