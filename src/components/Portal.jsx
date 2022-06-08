import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import Gallery from './Gallery';

const Portal = function () {
    return <Fragment>{ReactDOM.createPortal(<Gallery></Gallery>, document.getElementById('overlay-root'))}</Fragment>;
};

export default Portal;
