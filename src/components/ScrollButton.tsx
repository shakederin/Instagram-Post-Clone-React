import Icon from './Icon';

interface arrow {
    svg: string;
    className: string;
}
const ScrollButton = (props: arrow) => {
    return <Icon img={props.svg} className={props.className} />;
};

export default ScrollButton;
