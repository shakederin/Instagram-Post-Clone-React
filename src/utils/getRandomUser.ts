const usersA = [
    {
        userName: 'Benjamin Netanyahu',
        profilePicture:
            'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg',
    },
    {
        userName: 'Barak Obama',
        profilePicture:
            'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg',
    },
    {
        userName: 'Celine Dion',
        profilePicture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJENJrmtkz-lYHlAhZ9cyFLQapgW-fkCgJQ&usqp=CAU',
    },
    {
        userName: 'Po',
        profilePicture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnbO0qRs8GP4j4_TmIFZYb0DDsoMdjaJWTw&usqp=CAU',
    },
    {
        userName: 'Spongebob',
        profilePicture: 'https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC',
    },
];

export const getRandomUser = () => {
    const index = Math.floor(Math.random() * 5);
    return usersA[index];
};
