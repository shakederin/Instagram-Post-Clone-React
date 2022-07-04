import { useState } from 'react';
import arrow from '../../assets/scroll-arrow.svg';
import PhotoIndexIndicator from '../photoIndexIndicator/PhotoIndexIndicator';
import { st, classes } from './ImageContainer.st.css';
import Icon from '../icon/Icon';

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
                    <Icon className={st(classes.arrow, { direction: 'left' })} img={arrow} />
                </div>

                <PhotoIndexIndicator
                    imgUrls={imgUrls}
                    currentImgUrlIndex={currentImgUrlIndex}
                    maxVisualDotCount={10}
                />

                <div
                    onClick={() => {
                        scrollImg(true);
                    }}
                >
                    <Icon className={st(classes.arrow, { direction: 'right' })} img={arrow} />
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;
