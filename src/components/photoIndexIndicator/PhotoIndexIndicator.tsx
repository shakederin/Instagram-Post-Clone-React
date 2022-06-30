import { PhotoIndexIndicatorAbove5, renderPhotoIndexIndicator } from './helpers';
import { classes } from './PhotoIndexIndicator.st.css';

interface IPhotoIndexIndicator {
    currentImgUrlIndex: number;
    imgUrls: string[];
}
const PhotoIndexIndicator = ({ currentImgUrlIndex, imgUrls }: IPhotoIndexIndicator) => {
    return imgUrls.length < 6 ? (
        <div className={classes.root}>{renderPhotoIndexIndicator(currentImgUrlIndex, imgUrls)}</div>
    ) : (
        <div className={classes.root}>{PhotoIndexIndicatorAbove5(currentImgUrlIndex, imgUrls)}</div>
    );
};

export default PhotoIndexIndicator;
