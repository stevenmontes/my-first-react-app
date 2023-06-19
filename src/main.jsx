import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './FirstApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Hola, soy Goku" subTitle={123} />
    </React.StrictMode>
);