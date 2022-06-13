import Icon from './Icon';

interface IArrow {
    svg: string;
    className: string;
}
const ScrollButton = ({ svg, className }: IArrow) => <Icon img={svg} className={className} />;

export default ScrollButton;
