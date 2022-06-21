import Username from '../username/Username';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import CommentContent from '../commentContent/CommentContent';
import LikeCommentButton from '../likeCommentButoon/LikeCommentButton';
import type { Comment as CommentType } from '../../types';

interface IComment extends CommentType {}

const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikesCount,
    likeComment,
}: IComment) => (
    <li>
        <div>
            <ProfilePicture src={profilePicture} />
            <div>
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
