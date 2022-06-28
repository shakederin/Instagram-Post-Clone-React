import { Icon } from '../icon/Icon';

export interface IScrollButton {
    svgPath: string;
    className: string;
}
export const ScrollButton = ({ svgPath, className }: IScrollButton) => (
    <Icon className={className} img={svgPath} />
);
