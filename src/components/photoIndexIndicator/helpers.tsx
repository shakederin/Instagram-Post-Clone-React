import { classes, st } from './PhotoIndexIndicator.st.css';

const createNormalDot = (key: string) => {
    return (
        <div className={classes.dot} key={key}>
            &#8226;
        </div>
    );
};
const createCurrentDot = (key: string) => {
    return (
        <div key={key} className={st(classes.dot, classes.currentDot)}>
            &#8226;
        </div>
    );
};
const createFadeDot = (key: string) => {
    return (
        <div key={key} className={st(classes.dot, classes.fadeDot)}>
            &#8226;
        </div>
    );
};

export const renderPhotoIndexIndicator = (currentImgUrlIndex: number, imgUrls: string[]) =>
    imgUrls.map((_value, index) =>
        index === currentImgUrlIndex
            ? createCurrentDot(Math.random().toString(16).slice(2))
            : createNormalDot(Math.random().toString(16).slice(2))
    );

export const PhotoIndexIndicatorPastLimit = (currentImgUrlIndex: number, imgUrls: string[]) => {
    const photoArray = [];
    const specialCases = [0, 1, imgUrls.length - 2, imgUrls.length - 1];
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            switch (currentImgUrlIndex) {
                case 0:
                    photoArray.push(createCurrentDot(Math.random().toString(16).slice(2)));
                    continue;
                case imgUrls.length - 1:
                    photoArray.push(createFadeDot(Math.random().toString(16).slice(2)));
                    continue;
                case imgUrls.length - 2:
                    photoArray.push(createFadeDot(Math.random().toString(16).slice(2)));
                    continue;
                default:
                    if (specialCases.indexOf(currentImgUrlIndex) === -1) {
                        photoArray.push(createFadeDot(Math.random().toString(16).slice(2)));
                        continue;
                    }
            }
        }
        if (i === 4) {
            switch (currentImgUrlIndex) {
                case 0:
                case 1:
                    photoArray.push(createFadeDot(Math.random().toString(16).slice(2)));
                    continue;
                case imgUrls.length - 1:
                    photoArray.push(createCurrentDot(Math.random().toString(16).slice(2)));
                    continue;
                default:
                    if (specialCases.indexOf(currentImgUrlIndex) === -1) {
                        photoArray.push(createFadeDot(Math.random().toString(16).slice(2)));
                        continue;
                    }
            }
        }
        if (currentImgUrlIndex === 1 && i === 1) {
            photoArray.push(createCurrentDot(Math.random().toString(16).slice(2)));
            continue;
        }
        if (specialCases.indexOf(currentImgUrlIndex) === -1 && i === 2) {
            photoArray.push(createCurrentDot(Math.random().toString(16).slice(2)));
            continue;
        }
        if (currentImgUrlIndex === imgUrls.length - 2 && i === 3) {
            photoArray.push(createCurrentDot(Math.random().toString(16).slice(2)));
            continue;
        }
        photoArray.push(createNormalDot(Math.random().toString(16).slice(2)));
    }
    return photoArray;
};
