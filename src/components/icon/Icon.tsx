export interface IIconProps {
    img: string;
    className: string;
}
export const Icon = ({ img, className }: IIconProps) => <img className={className} src={img} />;
