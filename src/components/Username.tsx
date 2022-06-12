import { classes } from '../style/main.st.css';
interface username {
    name: string;
    header: boolean;
    id?: string;
}
const Username = (props: username) => {
    return (
        <>
            {props.header ? (
                <span id={props.id}>
                    <span className={classes.boldText}>{props.name} &#8226; Following</span>
                </span>
            ) : (
                <span className={classes.boldText}>{props.name}</span>
            )}
        </>
    );
};
export default Username;
