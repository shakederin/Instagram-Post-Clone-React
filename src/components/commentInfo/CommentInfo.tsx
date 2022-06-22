import { useEffect, useState } from 'react';
import { classes } from './CommentInfo.st.css';

interface ICommentInfo {
    creationDate: Date;
    LikedBy: string[];
}

const CommentInfo = ({ creationDate, LikedBy }: ICommentInfo) => {
    const timePassedFromCreation = new Date().getTime() - creationDate.getTime();
    const SecondsPassedFromCreation = new Date(timePassedFromCreation).getSeconds();
    const minutsPassedFromCreation = new Date(timePassedFromCreation).getMinutes();
    const HoursPassedFromCreation = new Date(timePassedFromCreation).getHours();
    const currentValue =
        HoursPassedFromCreation > 2
            ? `${HoursPassedFromCreation - 2} h`
            : minutsPassedFromCreation > 0
            ? `${minutsPassedFromCreation} m`
            : `${SecondsPassedFromCreation} s`;
    const [timeAgo, setTimeAgo] = useState<string>(currentValue);

    useEffect(() => {
        const secondesInterval = setInterval(updateTimeAgo, 5000);
        let minutesInterval: number;
        setTimeout(() => {
            clearInterval(secondesInterval);
            minutesInterval = setInterval(updateTimeAgo, 1000 * 60);
        }, 1000 * 60);
        return () => {
            clearInterval(secondesInterval);
            clearInterval(minutesInterval);
        };
    }, []);

    const updateTimeAgo = () => {
        const timePassedFromCreation = new Date().getTime() - creationDate.getTime();
        const SecondsPassedFromCreation = new Date(timePassedFromCreation).getSeconds();
        const minutsPassedFromCreation = new Date(timePassedFromCreation).getMinutes();
        const HoursPassedFromCreation = new Date(timePassedFromCreation).getHours();
        console.log(SecondsPassedFromCreation);
        if (HoursPassedFromCreation > 2) {
            setTimeAgo(`${HoursPassedFromCreation} h`);
            return;
        }
        if (minutsPassedFromCreation > 0) {
            setTimeAgo(`${minutsPassedFromCreation} m`);
            return;
        }
        if (SecondsPassedFromCreation > 0) {
            setTimeAgo(`${SecondsPassedFromCreation} s`);
        }
    };
    return (
        <div className={classes.commentInfo}>
            <div className={classes.infoSubtitle}>{timeAgo}</div>
            {LikedBy.length > 0 ? (
                <div className={classes.infoSubtitle}>{LikedBy.length} like</div>
            ) : (
                <div className={classes.infoSubtitle}>like</div>
            )}
            <div className={classes.infoSubtitle}>Reply</div>
        </div>
    );
};

export default CommentInfo;
