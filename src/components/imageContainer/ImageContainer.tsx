import { useState } from 'react';
import arrow from '../../assets/scroll-arrow.svg';
import ScrollButton from '../scrollButton/ScrollButton';
import PhotoIndexIndicator from '../photoIndexIndicator/PhotoIndexIndicator';
import { st, classes } from './ImageContainer.st.css';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => {
    const [currentImgUrlIndex, setCurrentImgUrlIndex] = useState(0);

    const scrollImg = (next: boolean) => {
        const nextIndex = currentImgUrlIndex + (next ? 1 : -1);
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
                        scrollImg(false);
                    }}
                >
                    <ScrollButton
                        className={st(classes.arrow, { direction: 'left' })}
                        svgPath={arrow}
                    />
                </div>

                <PhotoIndexIndicator
                    imgUrls={imgUrls}
                    currentImgUrlIndex={currentImgUrlIndex}
                    visualDotCount={10}
                />

                <div
                    onClick={() => {
                        scrollImg(true);
                    }}
                >
                    <ScrollButton
                        className={st(classes.arrow, { direction: 'right' })}
                        svgPath={arrow}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;
