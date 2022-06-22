import ScrollButton from '../scrollButton/ScrollButton';
import arrow from '../../assets/scroll-arrow.svg';
import { st, classes } from './ImageContainer.st.css';
import { useState } from 'react';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => {
    const [currentImgUrlIndex, setCurrentImgUrlIndex] = useState(0);

    const scrollImg = (action: string) => {
        let nextIndex;
        if (action === 'scroll right') {
            nextIndex = currentImgUrlIndex + 1;
        } else {
            nextIndex = currentImgUrlIndex - 1;
        }
        const imgUrlsLength = imgUrls.length;
        setCurrentImgUrlIndex(nextIndex - imgUrlsLength * Math.floor(nextIndex / imgUrlsLength));
    };
    return (
        <div>
            <div
                className={classes.mainImg}
                style={{ backgroundImage: `url(${imgUrls[currentImgUrlIndex]})` }}
            >
                <div
                    onClick={() => {
                        scrollImg('scroll left');
                    }}
                >
                    <ScrollButton className={classes.arrow} svgPath={arrow} />
                </div>
                <div></div>
                <div
                    onClick={() => {
                        scrollImg('scroll right');
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
