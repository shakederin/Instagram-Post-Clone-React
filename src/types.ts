export interface User {
    userName: string;
    profilePicture: string;
}

export interface PostData {
    description: string;
    creationDate: Date;
}

export type Comment = {
    user: User;
    content: string;
    creationDate: Date;
    LikedBy: string[];
    likeComment: (date: Date, userName: string) => void;
};
