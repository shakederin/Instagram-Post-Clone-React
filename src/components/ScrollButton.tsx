import Icon from './Icon';

interface IArrow {
    svg: string;
    className: string;
}
const ScrollButton = ({ svg, className }: IArrow) => <Icon className={className} img={svg} />;

export default ScrollButton;
