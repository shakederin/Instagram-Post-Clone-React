import { classes } from '../style/main.st.css';
interface username {
    name: string;
    header: boolean;
    id?: string;
}
const Username = ({ name, header, id }: username) => {
    return (
        <>
            {header ? (
                <span id={id}>
                    <span className={classes.boldText}>{name} &#8226; Following</span>
                </span>
            ) : (
                <span className={classes.boldText}>{name}</span>
            )}
        </>
    );
};
export default Username;
