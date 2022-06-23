import Username from '../username/Username';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import CommentContent from '../commentContent/CommentContent';
import LikeCommentButton from '../likeCommentButoon/LikeCommentButton';
import { classes as generalClasses } from '../../style/general.st.css';
import { classes } from './Comment.st.css';
import type { Comment as CommentType } from '../../types';

interface IComment extends CommentType {}

const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikesCount,
    likeComment,
}: IComment) => (
    <li className={classes.root}>
        <div className={generalClasses.postTitle}>
            <ProfilePicture src={profilePicture} />
            <div className={classes.commentText}>
                <div>
                    <Username userName={userName} header={false} />
                    <CommentContent content={content} />
                </div>
                <CommentInfo creationDate={creationDate} likesCount={LikesCount} />
            </div>
            <LikeCommentButton likeComment={likeComment} />
        </div>
    </li>
);

export default Comment;
