import { memo } from 'react';

interface IIconProps {
    img: string;
    className: string;
}
const Icon = ({ img, className }: IIconProps) => <img className={className} src={img} />;

export default memo(Icon);
