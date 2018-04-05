require('../css/app.css');
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import HomePageLayout from './HomepageLayout';

const checkout = document.getElementById('react-checkout-root');

if (checkout) {
    try {
        ReactDOM.render(<HomePageLayout {...checkout.dataset}/>, checkout);
    } catch (error) {
        console.error(error);
    }
}