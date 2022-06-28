export const renderPhotoIndexIndicator = (
    currentImgUrlIndex: number,
    imgUrls: string[],
    normalDot: JSX.Element,
    currentDot: JSX.Element
) => {
    const photoArray = [];
    for (let i = 0; i < imgUrls.length; i++) {
        if (i === currentImgUrlIndex) {
            photoArray.push(currentDot);
            continue;
        }
        photoArray.push(normalDot);
    }
    return photoArray;
};

export const PhotoIndexIndicatorAbove5 = (
    currentImgUrlIndex: number,
    imgUrls: string[],
    normalDot: JSX.Element,
    currentDot: JSX.Element,
    fadeDot: JSX.Element
) => {
    const photoArray = [];
    const specialCases = [0, 1, imgUrls.length - 2, imgUrls.length - 1];
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            switch (currentImgUrlIndex) {
                case 0:
                    photoArray.push(currentDot);
                    continue;
                case imgUrls.length - 1:
                    photoArray.push(fadeDot);
                    continue;
                case imgUrls.length - 2:
                    photoArray.push(fadeDot);
                    continue;
                default:
                    if (specialCases.indexOf(currentImgUrlIndex) === -1) {
                        photoArray.push(fadeDot);
                        continue;
                    }
            }
        }
        if (i === 4) {
            switch (currentImgUrlIndex) {
                case 0:
                case 1:
                    photoArray.push(fadeDot);
                    continue;
                case imgUrls.length - 1:
                    photoArray.push(currentDot);
                    continue;
                default:
                    if (specialCases.indexOf(currentImgUrlIndex) === -1) {
                        photoArray.push(fadeDot);
                        continue;
                    }
            }
        }
        if (currentImgUrlIndex === 1 && i === 1) {
            photoArray.push(currentDot);
            continue;
        }
        if (specialCases.indexOf(currentImgUrlIndex) === -1 && i === 2) {
            photoArray.push(currentDot);
            continue;
        }
        if (currentImgUrlIndex === imgUrls.length - 2 && i === 3) {
            photoArray.push(currentDot);
            continue;
        }
        photoArray.push(normalDot);
    }
    return photoArray;
};
