'use strict';

import KWM_Component from '../core/kwm-component.js';

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class HomeComponent extends KWM_Component {
    constructor() {
        super();

        // Any component data goes here in the constructor
        this.text = 'Welcome Welcome HOME my friend 🥳';
    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
            <h1>🏠 ${this.text}</h1>
            <p>
                I will write some great placeholder text – and nobody writes better placeholder text than me, believe me 
                – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern 
                border, and I will make Google pay for that text. Mark my words. This placeholder text is gonna be HUGE.
            </p>
            <p><a href="#/contact">Contact us!</a></p>
            <p><a href="#/i-dont-exist">I lead to a non existent page</a></p>
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);