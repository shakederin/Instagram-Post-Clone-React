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
    LikesCount: number;
    likeComment: () => void;
};
