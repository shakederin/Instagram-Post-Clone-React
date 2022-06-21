import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

document.body.style.backgroundColor = '#e6e6e6';
createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
