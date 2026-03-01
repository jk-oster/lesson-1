'use strict';

/**
 * I am the main entry point  to our application - test everything here!
 *
 * You can already find the test code for your first task below.
 */

import {Component} from './kwm-js';

class TestComponent extends Component {
    heading = 'My first custom component 🥳';
    list = [
        "Banana",
        "Apple",
        "Toast",
        "Cherry",
        "Pineapple",
    ];

    onMounted() {
        console.log('Wow - I even managed to code the Bonus 🧠!');
    }

    render() {
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

customElements.define('test-component', TestComponent);

const myComponent = new TestComponent();
myComponent.render(document.getElementById("kwmJS"));
