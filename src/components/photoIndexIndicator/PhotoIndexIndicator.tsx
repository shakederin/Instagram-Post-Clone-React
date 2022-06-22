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
                photoArray.push(
                    <div className={st(classes.dot, classes.currentDot)}> &#8226;</div>
                );
                continue;
            }
            photoArray.push(<div className={classes.dot}> &#8226;</div>);
        }
        return photoArray;
    };
    return <div className={classes.root}>{renderPhotoIndexIndicator()}</div>;
};

export default PhotoIndexIndicator;
