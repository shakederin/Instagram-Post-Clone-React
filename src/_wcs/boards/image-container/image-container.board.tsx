import React from 'react';
import { createBoard } from '@wixc3/react-board';
import ImageContainer from './../../../components/imageContainer/ImageContainer';

export default createBoard({
    name: 'ImageContainer',
    Board: () => <ImageContainer imgUrls={['\'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80\'']} />,

});
