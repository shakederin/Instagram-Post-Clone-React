import { classes } from '../style/main.st.css';
interface IUsername {
    name: string;
    header: boolean;
    id?: string;
}
const Username = ({ name, header, id }: IUsername) => (
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

export default Username;
