'use strict';
import KWM_Component from './core/kwm-component.js';

class MyCustomComponent extends KWM_Component {
    constructor() {
        super();
        this.heading = 'My first custom component 🥳';
        this.list = [
            "Banana",
            "Apple",
            "Toast",
            "Cherry",
            "Pineapple",
        ]

    }

    onRender() {
        console.log('onRender life-cycle method is working 🥳!');
    }

    onFirstRender() {
        console.log('Wow - I even managed to code the Bonus 🧠!');
    }

    template() {
        return /*html*/`
            <div>
                <h2>${this.heading}</h2>
			    <p>It is working! Also check the console!</p>
                <ul>
		            <!-- Bonus add rendering of list here -->
		        </ul>
            </div>
        `;
    }
}

customElements.define('custom-component', MyCustomComponent);

const myComponent = new MyCustomComponent();
myComponent.render(document.getElementById("kwmJS"));
