import { PhotoIndexIndicatorPastLimit, renderPhotoIndexIndicator } from './helpers';
import { classes } from './PhotoIndexIndicator.st.css';

interface IPhotoIndexIndicator {
    currentImgUrlIndex: number;
    imgUrls: string[];
    maxVisualDotCount: number;
}
const PhotoIndexIndicator = ({
    currentImgUrlIndex,
    imgUrls,
    maxVisualDotCount,
}: IPhotoIndexIndicator) => {
    return imgUrls.length <= maxVisualDotCount ? (
        <div className={classes.root}>{renderPhotoIndexIndicator(currentImgUrlIndex, imgUrls)}</div>
    ) : (
        <div className={classes.root}>
            {PhotoIndexIndicatorPastLimit(currentImgUrlIndex, imgUrls)}
        </div>
    );
};

export default PhotoIndexIndicator;
