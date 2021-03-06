import Icon from '../icon/Icon';
import UserName from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import ellipsis from '../../assets/ellipsis.svg';
import { classes } from './PostHeader.st.css';
import type { User } from '../../types';
import { memo } from 'react';

interface IPostHeader {
    owner: User;
}

const PostHeader = ({ owner: { userName, profilePicture } }: IPostHeader) => (
    <div className={classes.root}>
        <div className={classes.profilePictureHeaderBlock}>
            <ProfilePicture src={profilePicture} story={true} />
            <UserName userName={userName} header={true} />
        </div>
        <Icon className={classes.ellipsis} img={ellipsis} />
    </div>
);

export default memo(PostHeader);
