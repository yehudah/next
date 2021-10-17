import Controller from './controller.js';
import Template from './template.js';
import Store from './store.js';
import View from './view.js';
import { listen } from "./helpers.js";

(async() => {
    /**
     * Didn't had the time to fix the view visabillity on load
     * and not sure if the task included keep local items on load (merge with remote one's)
     * @type {Response}
     */
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();

    const store = new Store(data);
    const template = new Template();
    const view = new View(template);
    const controller = new Controller(store, view);

    const setView = () => controller.setView(document.location.hash);

    listen(window, 'load', setView)
    listen(window, 'hashchange', setView)
})();





