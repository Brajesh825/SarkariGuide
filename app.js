import page from "page.js"
import Navbar from "./src/components/navbar";
import navData from "./src/datasets/navdata";

import Welcome from "./src/components/welcome";
import welcomeData from "./src/datasets/welcomeData";

import WhyUs from "./src/components/whyUs";
import whyUsData from "./src/datasets/whyUsData";

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
    let whyUs = WhyUs({
        whyUsData : whyUsData
    })

    root.appendChild(navbar);
    root.appendChild(welcome);
    root.appendChild(whyUs);
});

page('/about', () => {
    console.log('About page');
});



// Start routing
page.start();