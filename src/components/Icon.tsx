interface IconProps {
    img: string;
    className: string;
}
const Icon = (props: IconProps) => {
    return <img className={props.className} src={props.img} />;
};

export default Icon;
