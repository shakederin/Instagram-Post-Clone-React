import ScrollButton from './ScrollButton';
import { style, classes } from '../style/img.st.css';
import arrow from '../assets/scroll-arrow.svg';
const ImageContainer = () => {
    return (
        <div>
            <div
                className={classes.mainImg}
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80)',
                }}
            >
                <ScrollButton svg={arrow} className={classes.arrow} />
                <ScrollButton svg={arrow} className={style(classes.rightArrow, classes.arrow)} />
            </div>
        </div>
    );
};

export default ImageContainer;
