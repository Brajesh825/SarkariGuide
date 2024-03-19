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
import { cardData, cardTitle } from "./src/datasets/cardData";

// Trust
import Trust from "./src/components/trust";
import trustData from "./src/datasets/trustData";

// Benefit
import BenefitCards from "./src/components/benefitCards";
import benefits from "./src/datasets/benefits";

// Footer
import Footer from "./src/components/footer";

// Blogs
import blogs from "./src/datasets/blogs";
import Guide from "./src/components/blogs/guide";

// Blog Heading
import BlogHeading from "./src/components/blogs/blogHeading";

// Blog Charges
import Charges from "./src/components/blogs/charges";

// Benefits
import BlogBenefit from "./src/components/blogs/blogBenefit";

// Blog Services
import BlogService from "./src/components/blogs/blogService";

// Define routes
page('/', () => {
    let root = document.getElementById('root');
    root.innerHTML = ''; // Clear the root element
    let navbar = Navbar({
        links: navData
    });
    let welcome = Welcome({
        welcomeData: welcomeData
    })
    let whyUs = WhyUs({
        whyUsData: whyUsData
    })
    let blogs = BookingList({
        cardData: cardData,
        cardTitle: cardTitle
    })
    let trust = Trust({
        title: trustData.title,
        description: trustData.description
    })

    const benefitCards = BenefitCards({ benefits });
    const footer = Footer({})

    root.appendChild(navbar);
    root.appendChild(welcome);
    root.appendChild(whyUs);
    root.appendChild(blogs);
    root.appendChild(trust);
    root.appendChild(benefitCards);
    root.appendChild(footer);
});

page('/blog/:blogId', ({ params }) => {
    const { blogId } = params;
    let root = document.getElementById('root');
    root.innerHTML = ''; // Clear the root element
    let navbar = Navbar({
        links: navData
    });

    let currentBlog = blogs[blogId]

    let heading = BlogHeading(currentBlog.heading)

    let guide = Guide({
        title: currentBlog.guide.title,
        steps: currentBlog.guide.steps
    })

    root.appendChild(navbar);
    root.appendChild(heading);
    root.appendChild(guide);

    let charges = currentBlog.charges

    if (charges) {
        const charge = Charges({ charges })
        root.appendChild(charge);
    }

    let blogBenefit = currentBlog.benefits
    if (blogBenefit) {
        const benefits = BlogBenefit(blogBenefit)
        root.appendChild(benefits);
    }

    let blogService = currentBlog.services

    if(blogService){
        let service = BlogService(blogService)
        root.appendChild(service);
    }

    const footer = Footer({})
    root.appendChild(footer);


});


// Start routing
page.start();