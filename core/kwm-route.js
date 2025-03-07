'use strict';

/**
 * KWM_Route
 *
 * Hash-based Route for Single Page Applications. Each route has a corresponding component that is rendered when the route is active.
 *
 * @param {Object} options - The options for the route.
 * @param {string} options.slug - Give me the slug of the route. This is the part after the '#' in the url.
 * @param {string} options.name - Give me the name of the route. This is the part that is displayed in the navigation.
 * @param {KWM_Component} options.component - Give me the component that is rendered when the route is active.
 * @param {function} options.canRender - (Bonus) A function that is called before the component is rendered. If it returns false, the component will not be rendered.
 *
 * @author You - 2025
 */
// your code goes here
