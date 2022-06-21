import ScrollButton from '../scrollButton/ScrollButton';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => (
    <div>
        <div style={{ backgroundImage: `url(${imgUrls[0]})` }}>
            <ScrollButton className={''} svgPath={'arrow'} />
            <ScrollButton className={''} svgPath={'arrow'} />
        </div>
    </div>
);

export default ImageContainer;
