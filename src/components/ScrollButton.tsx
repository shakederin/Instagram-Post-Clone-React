import Icon from './Icon';

interface arrow {
    svg: string;
    className: string;
}
const ScrollButton = ({ svg, className }: arrow) => <Icon img={svg} className={className} />;

export default ScrollButton;
