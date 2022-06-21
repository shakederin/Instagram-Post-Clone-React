interface IUsername {
    userName: string;
    header: boolean;
}
const Username = ({ userName, header }: IUsername) => (
    <>
        {header ? (
            <span>
                <span>{userName} &#8226; Following</span>
            </span>
        ) : (
            <span>{userName}</span>
        )}
    </>
);

export default Username;
