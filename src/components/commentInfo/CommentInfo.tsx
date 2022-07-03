import { useEffect, useState } from 'react';
import { FIVE_SECONDS, LIKE, ONE_MINUTE, REPLY } from '../../constants';
import { classes } from './CommentInfo.st.css';
import { getTimeAgo } from './helpers';

interface ICommentInfo {
    creationDate: number;
    LikedBy: string[];
}

const CommentInfo = ({ creationDate, LikedBy }: ICommentInfo) => {
    const [timeAgo, setTimeAgo] = useState<string>(getTimeAgo(creationDate));

    useEffect(() => {
        const secondesInterval = setInterval(updateTimeAgo, FIVE_SECONDS);
        let minutesInterval: number;
        setTimeout(() => {
            clearInterval(secondesInterval);
            minutesInterval = setInterval(updateTimeAgo, ONE_MINUTE);
        }, ONE_MINUTE);
        return () => {
            clearInterval(secondesInterval);
            clearInterval(minutesInterval);
        };
    }, []);

    const updateTimeAgo = () => {
        setTimeAgo(getTimeAgo(creationDate));
    };

    return (
        <div className={classes.root}>
            <div className={classes.commentInfo}>
                <div className={classes.infoSubtitle}>{timeAgo}</div>
                {LikedBy.length > 0 ? (
                    <div className={classes.infoSubtitle}>
                        {LikedBy.length} {LIKE}
                    </div>
                ) : (
                    <div className={classes.infoSubtitle}>{LIKE}</div>
                )}
                <div className={classes.infoSubtitle}>{REPLY}</div>
            </div>
        </div>
    );
};

export default CommentInfo;
