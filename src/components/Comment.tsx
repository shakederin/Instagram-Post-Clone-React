import CommentInfo from './CommentInfo';
import LikeComment from './LikeComment';
import ProfilePicture from './ProfilePicture';
import Username from './Username';
import CommentContent from './CommentContent';
import { classes } from '../style/comments.st.css';

interface comment {
    description: boolean;
    ProfilePicture: string;
    userName: string;
    content: string;
}

const Comment = (props: comment) => {
    return (
        <li className={classes.comment}>
            <div className={classes.postTitle}>
                <ProfilePicture src={props.ProfilePicture} className={classes.profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <Username name={props.userName} header={false} />
                        <CommentContent content={props.content} className={classes.text} />
                    </div>
                    <CommentInfo
                        className={classes.commentInfo}
                        isDescription={props.description}
                    />
                </div>
                {props.description ? <></> : <LikeComment />}
            </div>
        </li>
    );
};

export default Comment;
