import Icon from './Icon';

interface arrow {
    svg: string;
    className: string;
}
const ScrollButton = ({ svg, className }: arrow) => {
    return <Icon img={svg} className={className} />;
};

export default ScrollButton;
