import React from 'react';
import { createBoard } from '@wixc3/react-board';
import InputForm from './../../../components/inputForm/InputForm';

export default createBoard({
    name: 'InputForm',
    Board: () => <InputForm />,
    environmentProps: {
        canvasWidth: 419
    }
});
