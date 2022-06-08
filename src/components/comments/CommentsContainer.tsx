import InputForm from './commentsForm/InputForm';
import LikeContainer from './commentsForm/LikeContainer';
import CommentsList from './CommentsList';
import Header from './Header';
import { classes } from '../style/main.st.css';

interface postInfo {
    userName: string;
    profilePicture: string;
    postDescription: string;
}

const CommentsContainer = (props: postInfo) => {
    return (
        <div className={classes.commentsContainer}>
            <Header name={props.userName} profilePicture={props.profilePicture} />
            <CommentsList name={props.userName} profilePicture={props.profilePicture} />
            <LikeContainer />
            <InputForm />
        </div>
    );
};

export default CommentsContainer;
