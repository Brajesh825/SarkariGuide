import page from "page.js"
import Navbar from "./src/components/navbar";
import navData from "./src/datasets/navdata";

import Welcome from "./src/components/welcome";
import welcomeData from "./src/datasets/welcomeData";

// Define routes
page('/', () => {
    let root = document.getElementById('root');
    root.innerHTML = ''; // Clear the root element
    let navbar = Navbar({
        links : navData
    });
    let welcome = Welcome({
        welcomeData : welcomeData
    })
    root.appendChild(navbar);
    root.appendChild(welcome);
});

page('/about', () => {
    console.log('About page');
});



// Start routing
page.start();