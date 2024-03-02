// Page.js
import page from "page.js"

// Navbar Data
import Navbar from "./src/components/navbar";
import navData from "./src/datasets/navdata";

// Welcome Data
import Welcome from "./src/components/welcome";
import welcomeData from "./src/datasets/welcomeData";

// Why Us Data
import WhyUs from "./src/components/whyUs";
import whyUsData from "./src/datasets/whyUsData";

// supported Bookings
import BookingList from "./src/components/bookingList";
import { cardData , cardTitle } from "./src/datasets/cardData";

// Trust
import Trust from "./src/components/trust";
import trustData from "./src/datasets/trustData";

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
    let blogs = BookingList({
        cardData : cardData ,
        cardTitle : cardTitle
    })
    let trust = Trust({
        title : trustData.title,
        description : trustData.description
    })
    root.appendChild(navbar);
    root.appendChild(welcome);
    root.appendChild(whyUs);
    root.appendChild(blogs);
    root.appendChild(trust);
});

page('/about', () => {
    console.log('About page');
});


// Start routing
page.start();