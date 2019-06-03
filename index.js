import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

// Object Destructuring
import { capitalize } from 'lodash';

// capitalize 'Navigo' to make it clear that this is a CONSTRUCTOR FXN.
import Navigo from 'navigo';

import axios from 'axios';

// origin is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the components
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    router.updatePageLinks();
}

// function handleRoutes(params) {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // We need to 'push' each and every post into states.Blog.posts
            response.data.forEach((post) => states.Blog.posts.push(post));

// Check the URL bar
// Grab anything that is beyond window.location.origin (e.g. /about)
// Assign that to an Object called params with 🔑 of path.
// Use the 'capitalize' method from lodash that we imported to transform, for example 'about' to 'About'
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();
