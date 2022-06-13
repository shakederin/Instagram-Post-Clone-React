import CommentInfo from './CommentInfo';
import LikeCommentButton from './LikeCommentButton';
import ProfilePicture from './ProfilePicture';
import Username from './Username';
import CommentContent from './CommentContent';
import { classes } from '../style/comments.st.css';

interface IComment {
    description: boolean;
    profilePicture: string;
    userName: string;
    content: string;
}

const Comment = ({ description, profilePicture, userName, content }: IComment) => (
    <li className={classes.comment}>
        <div className={classes.postTitle}>
            <ProfilePicture className={classes.profilePicture} src={profilePicture} />
            <div className={classes.commentText}>
                <div>
                    <Username name={userName} header={false} />
                    <CommentContent className={classes.text} content={content} />
                </div>
                <CommentInfo className={classes.commentInfo} isDescription={description} />
            </div>
            {description ? <></> : <LikeCommentButton />}
        </div>
    </li>
);

export default Comment;
