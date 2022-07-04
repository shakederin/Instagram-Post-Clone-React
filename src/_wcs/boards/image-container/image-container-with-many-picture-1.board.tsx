import React from 'react';
import { createBoard } from '@wixc3/react-board';
import ImageContainer from './../../../components/imageContainer/ImageContainer';

export default createBoard({
    name: 'ImageContainer with more then max pass',
    Board: () => <ImageContainer imgUrls={['\'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80\'', '\'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/86/71/867186_v2.jpeg\'', '    \'https://cdn.hswstatic.com/gif/10-breathtaking-views-1-orig.jpg\'', '    \'https://images.unsplash.com/photo-1584432743501-7d5c27a39189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMHZpZXd8ZW58MHx8MHx8&w=1000&q=80\'', '    \'https://cdn.hswstatic.com/gif/10-breathtaking-views-1-orig.jpg\'', '\'https://images.unsplash.com/photo-1518316847866-651fbb917956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9pbnQlMjBvZiUyMHZpZXd8ZW58MHx8MHx8&w=1000&q=80\'', '    \'https://cdn.hswstatic.com/gif/10-breathtaking-views-1-orig.jpg\'', '', '', '', '', '']} />,

});
