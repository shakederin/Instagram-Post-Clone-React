export interface User {
    userName: string;
    profilePicture: string;
}

export interface PostData {
    description: string;
    creationDate: Date;
}

export type LikeComment = (id: string, userName: string) => void;

export type OnSubmit = (comment: Comment) => void;

export interface Comment {
    id: string;
    user: User;
    content: string;
    creationDate: number;
    LikedBy: string[];
    likeComment: LikeComment;
}

export interface IinisialState {
    [key: string]: User;
}
