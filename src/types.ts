export interface User {
    userName: string;
    profilePicture: string;
}

export interface PostData {
    description: string;
    creationDate: Date;
}

export type AddLikeToComment = (id: string) => void;

export type OnSubmit = (comment: string) => void;

export interface Comment {
    id: string;
    user: User;
    content: string;
    creationDate: number;
    LikedBy: string[];
    addLikeToComment: AddLikeToComment;
}

export interface IinitialState {
    [key: string]: User;
}
