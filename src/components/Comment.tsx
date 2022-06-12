import CommentInfo from './CommentInfo';
import LikeComment from './LikeComment';
import ProfilePicture from './ProfilePicture';
import Username from './Username';
import CommentContent from './CommentContent';
import { classes } from '../style/comments.st.css';

interface comment {
    description: boolean;
    profilePicture: string;
    userName: string;
    content: string;
}

const Comment = ({ description, profilePicture, userName, content }: comment) => {
    return (
        <li className={classes.comment}>
            <div className={classes.postTitle}>
                <ProfilePicture src={profilePicture} className={classes.profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <Username name={userName} header={false} />
                        <CommentContent content={content} className={classes.text} />
                    </div>
                    <CommentInfo className={classes.commentInfo} isDescription={description} />
                </div>
                {description ? <></> : <LikeComment />}
            </div>
        </li>
    );
};

export default Comment;
