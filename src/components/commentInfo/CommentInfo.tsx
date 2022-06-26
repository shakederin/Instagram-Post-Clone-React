import { useEffect, useState } from 'react';
import { FIVE_SECONDS, LIKE, ONE_MINUTE, REPLY } from '../../constants';
import { classes } from './CommentInfo.st.css';

interface ICommentInfo {
    creationDate: number;
    LikedBy: string[];
}

const CommentInfo = ({ creationDate, LikedBy }: ICommentInfo) => {
    const SecondsPassedFromCreation = Math.floor((Date.now() - creationDate) / 1000);
    const timePastFromCreation =
        SecondsPassedFromCreation > 3599
            ? `${Math.floor(SecondsPassedFromCreation / 3600)} h`
            : SecondsPassedFromCreation > 59
            ? `${Math.floor(SecondsPassedFromCreation / 60)} m`
            : `${SecondsPassedFromCreation} s`;
    const [timeAgo, setTimeAgo] = useState<string>(timePastFromCreation);

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

    const getTimeAgo = (creationDate: number) => {
        const SecondsPassedFromCreation = Math.floor((Date.now() - creationDate) / 1000);
        const minutsPassedFromCreation = Math.floor(SecondsPassedFromCreation / 60);
        const HoursPassedFromCreation = Math.floor(SecondsPassedFromCreation / 3600);
        console.log(HoursPassedFromCreation);

        let timeAgoPrompt;
        if (HoursPassedFromCreation > 0) {
            timeAgoPrompt = `${HoursPassedFromCreation} h`;
        } else if (minutsPassedFromCreation > 0) {
            timeAgoPrompt = `${minutsPassedFromCreation} m`;
        } else {
            timeAgoPrompt = `${SecondsPassedFromCreation} s`;
        }
        return timeAgoPrompt;
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
