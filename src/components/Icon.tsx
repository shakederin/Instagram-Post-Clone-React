interface IconProps {
    img: string;
    className: string;
}
const Icon = ({ img, className }: IconProps) => {
    return <img className={className} src={img} />;
};

export default Icon;
