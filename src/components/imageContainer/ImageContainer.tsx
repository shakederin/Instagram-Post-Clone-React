import arrow from '../../assets/scroll-arrow.svg';
import ScrollButton from '../scrollButton/ScrollButton';
import { st, classes } from './ImageContainer.st.css';
import { useState } from 'react';
import PhotoIndexIndicator from '../photoIndexIndicator/PhotoIndexIndicator';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => {
    const [currentImgUrlIndex, setCurrentImgUrlIndex] = useState(0);

    const scrollImg = (action: number) => {
        const nextIndex = currentImgUrlIndex + action;
        const imgUrlsLength = imgUrls.length;
        setCurrentImgUrlIndex(nextIndex - imgUrlsLength * Math.floor(nextIndex / imgUrlsLength));
    };
    return (
        <div className={classes.root}>
            <div
                className={classes.mainImg}
                style={{ backgroundImage: `url(${imgUrls[currentImgUrlIndex]})` }}
            >
                <div
                    onClick={() => {
                        scrollImg(-1);
                    }}
                >
                    <ScrollButton className={classes.arrow} svgPath={arrow} />
                </div>

                <PhotoIndexIndicator imgUrls={imgUrls} currentImgUrlIndex={currentImgUrlIndex} />

                <div
                    onClick={() => {
                        scrollImg(1);
                    }}
                >
                    <ScrollButton
                        className={st(classes.rightArrow, classes.arrow)}
                        svgPath={arrow}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;
