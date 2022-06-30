import { PhotoIndexIndicatorAbove5, renderPhotoIndexIndicator } from './helpers';
import { classes } from './PhotoIndexIndicator.st.css';

interface IPhotoIndexIndicator {
    currentImgUrlIndex: number;
    imgUrls: string[];
    visualDotCount: number;
}
const PhotoIndexIndicator = ({
    currentImgUrlIndex,
    imgUrls,
    visualDotCount,
}: IPhotoIndexIndicator) => {
    return imgUrls.length <= visualDotCount ? (
        <div className={classes.root}>{renderPhotoIndexIndicator(currentImgUrlIndex, imgUrls)}</div>
    ) : (
        <div className={classes.root}>{PhotoIndexIndicatorAbove5(currentImgUrlIndex, imgUrls)}</div>
    );
};

export default PhotoIndexIndicator;
