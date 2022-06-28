import { UserName } from '../username/Username';
import { CommentInfo } from '../commentInfo/CommentInfo';
import { ProfilePicture } from '../profilePicture/ProfilePicture';
import { CommentContent } from '../commentContent/CommentContent';
import { LikeCommentButton } from '../likeCommentButton/LikeCommentButton';
import { classes } from './Comment.st.css';
import type { Comment as CommentType } from '../../types';

export interface IComment extends CommentType {}

export const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikesCount,
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
                <CommentInfo creationDate={creationDate} likesCount={LikesCount} />
            </div>
            <LikeCommentButton likeComment={likeComment} />
        </div>
    </li>
);
