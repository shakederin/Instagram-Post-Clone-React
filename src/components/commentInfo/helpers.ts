export const getTimeAgo = (creationDate: number) => {
    const SecondsPassedFromCreation = Math.floor((Date.now() - creationDate) / 1000);
    if (SecondsPassedFromCreation > 3599) {
        return `${Math.floor(SecondsPassedFromCreation / 3600)} h`;
    }
    if (SecondsPassedFromCreation > 59) {
        return `${Math.floor(SecondsPassedFromCreation / 60)} m`;
    }
    return `${SecondsPassedFromCreation} s`;
};
