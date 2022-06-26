import UserName from '../username/Username';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import CommentContent from '../commentContent/CommentContent';
import LikeCommentButton from '../likeCommentButton/LikeCommentButton';
import { classes } from './Comment.st.css';
import type { Comment as CommentType } from '../../types';

interface IComment extends CommentType {}

const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikedBy,
    likeComment,
}: IComment) => (
    <li className={classes.root}>
        <div className={classes.comment}>
            <ProfilePicture src={profilePicture} />
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
            creationDate={creationDate}
            LikedBy={LikedBy}
            userName={userName}
        />
    </li>
);
export default Comment;
