interface IconProps {
    img: string;
    className: string;
}
const Icon = ({ img, className }: IconProps) => <img className={className} src={img} />;

export default Icon;
