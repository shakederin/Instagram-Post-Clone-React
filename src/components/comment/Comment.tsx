import { memo, useState } from 'react';
import UserName from '../username/Username';
import { getRandomBoolean } from '../../utils/getBoolean';
import CommentInfo from '../commentInfo/CommentInfo';
import ProfilePicture from '../profilePicture/ProfilePicture';
import LikeCommentButton from '../likeCommentButton/LikeCommentButton';
import { classes } from './Comment.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { Comment as CommentType } from '../../types';

interface IComment extends CommentType {}

const Comment = ({
    user: { userName, profilePicture },
    content,
    creationDate,
    LikedBy,
    addLikeToComment,
    id,
}: IComment) => {
    const [isLiked, setIsliked] = useState<boolean>(false);
    const likeComment = () => {
        addLikeToComment(id);
        setIsliked(!isLiked);
    };

    return (
        <li className={classes.root}>
            <div className={classes.comment}>
                <ProfilePicture src={profilePicture} story={getRandomBoolean()} />
                <div className={classes.commentText}>
                    <div>
                        <UserName userName={userName} header={false} />
                        <span className={generalClasses.text}>{content}</span>
                    </div>
                    <CommentInfo creationDate={creationDate} LikedBy={LikedBy} />
                </div>
            </div>
            <LikeCommentButton isLiked={isLiked} likeComment={likeComment} />
        </li>
    );
};
export default memo(Comment);
