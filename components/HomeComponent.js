'use strict';

import KWM_Component from '../core/kwm-component.js';

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 **/
export default class HomeComponent extends KWM_Component {
    constructor() {
        super();

        /**
         * Component data
         */
        this.text = 'Welcome Welcome HOME my friend 🥳';
    }

    /**
     * Template function = shape of the component
     */
    template() {
        return /*html*/`
        <section id="main_content">
            <h1>🏠 ${this.text}</h1>
            <p><a href="#/contact">Contact us!</a></p>
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);