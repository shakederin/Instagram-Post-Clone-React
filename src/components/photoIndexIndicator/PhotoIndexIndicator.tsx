import { st, classes } from './PhotoIndexIndicator.st.css';

interface IPhotoIndexIndicator {
    currentImgUrlIndex: number;
    imgUrls: string[];
}
const PhotoIndexIndicator = ({ currentImgUrlIndex, imgUrls }: IPhotoIndexIndicator) => {
    const renderPhotoIndexIndicator = () => {
        const photoArray = [];
        for (let i = 0; i < imgUrls.length; i++) {
            if (i === currentImgUrlIndex) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            photoArray.push(<div className={classes.dot}>&#8226;</div>);
        }
        return photoArray;
    };
    const PhotoIndexIndicatorAbove7 = () => {
        const photoArray = [];
        const specialCases = [0, 1, imgUrls.length - 2, imgUrls.length - 1];
        for (let i = 0; i < 5; i++) {
            if (currentImgUrlIndex === 0 && i === 0) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            if (currentImgUrlIndex === 1 && i === 1) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            if (specialCases.indexOf(currentImgUrlIndex) === -1 && i === 2) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            if (currentImgUrlIndex === imgUrls.length - 2 && i === 3) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            if (currentImgUrlIndex === imgUrls.length - 1 && i === 4) {
                photoArray.push(<div className={st(classes.dot, classes.currentDot)}>&#8226;</div>);
                continue;
            }
            photoArray.push(<div className={classes.dot}>&#8226;</div>);
        }
        return photoArray;
    };
    return imgUrls.length < 5 ? (
        <div className={classes.root}>{renderPhotoIndexIndicator()}</div>
    ) : (
        <div className={classes.root}>{PhotoIndexIndicatorAbove7()}</div>
    );
};

export default PhotoIndexIndicator;
