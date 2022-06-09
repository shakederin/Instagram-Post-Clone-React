interface IconProps {
    img: string;
    className: string;
    id: string;
}
const Icon = (props: IconProps) => {
    return <img id={props.id} className={props.className} src={props.img} />;
};

export default Icon;
