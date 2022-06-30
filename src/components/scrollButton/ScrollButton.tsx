import { memo } from 'react';
import Icon from '../icon/Icon';

interface IScrollButton {
    svgPath: string;
    className: string;
}
const ScrollButton = ({ svgPath, className }: IScrollButton) => (
    <Icon className={className} img={svgPath} />
);

export default memo(ScrollButton);
