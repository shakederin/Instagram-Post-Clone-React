import UserName from '../username/Username';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import CommentContent from '../commentContent/CommentContent';
import LikeCommentButton from '../likeCommentButton/LikeCommentButton';
import { classes } from './Comment.st.css';
import type { Comment as CommentType } from '../../types';
import { getBoolean } from '../../utils/getBoolean';

interface IComment extends CommentType {}

const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikedBy,
    likeComment,
    id,
}: IComment) => (
    <li className={classes.root}>
        <div className={classes.comment}>
            <ProfilePicture src={profilePicture} story={getBoolean()} />
            <div className={classes.commentText}>
                <div>
                    <UserName userName={userName} header={false} />
                    <CommentContent content={content} />
                </div>
                <CommentInfo creationDate={creationDate} LikedBy={LikedBy} />
            </div>
        </div>
        <LikeCommentButton
            likeComment={likeComment}
            id={id}
            userName={userName}
            LikedBy={LikedBy}
        />
    </li>
);
export default Comment;
