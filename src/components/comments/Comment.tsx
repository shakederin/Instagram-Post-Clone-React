import CommentInfo from '../general/CommentInfo';
import LikeComment from '../general/LikeComment';
import ProfilePicture from '../general/ProfilePicture';
import Username from '../general/Username';
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
            <div id="postTitle">
                <ProfilePicture
                    src={props.ProfilePicture}
                    className={classes.profilePicture}
                    id={''}
                />
                <div className={classes.commentText}>
                    <div>
                        <Username id={''} name={props.userName} header={false} />

                        <CommentContent
                            content={props.content}
                            className={classes.commentContent}
                        />
                    </div>
                    <CommentInfo className={classes.commentInfo} />
                </div>
                {props.description ? <></> : <LikeComment />}
            </div>
        </li>
    );
};

export default Comment;
