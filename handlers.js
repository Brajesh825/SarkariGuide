import Navbar from "./src/components/navbar";
import Welcome from "./src/components/welcome";
import WhyUs from "./src/components/whyUs";
import BookingList from "./src/components/bookingList";
import Trust from "./src/components/trust";
import BenefitCards from "./src/components/benefitCards";
import Footer from "./src/components/footer";
import Guide from "./src/components/blogs/guide";
import BlogHeading from "./src/components/blogs/blogHeading";
import Charges from "./src/components/blogs/charges";
import BlogBenefit from "./src/components/blogs/blogBenefit";
import BlogService from "./src/components/blogs/blogService";
import Downloadable from "./src/components/downloadable";
import PrivacyPolicy from "./src/components/policy/privacyPolicy";
import TermComponent from "./src/components/policy/termCondition";
import RefundPolicy from "./src/components/policy/refundPolicy";
import Disclaimer from "./src/components/policy/disclaimer";

// Import datasets
import navData from "./src/datasets/navdata";
import welcomeData from "./src/datasets/welcomeData";
import whyUsData from "./src/datasets/whyUsData";
import { cardData, cardTitle } from "./src/datasets/cardData";
import trustData from "./src/datasets/trustData";
import benefits from "./src/datasets/benefits";
import blogs from "./src/datasets/blogs";
import serviceWelcome from "./src/datasets/serviceWelcome";
import serviceData from "./src/datasets/serviceData";
import downloadWelcome from "./src/datasets/downloadWelcome";
import downloadableData from "./src/datasets/downloadable";
import refundPolicyData from "./src/datasets/policy/refundPolicyData.JS";

// Define function to clear the root element
function clearRoot() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    window.scrollTo(0, 0); // Scroll to top
    return root;
}

// Define route handlers as functions
function homeHandler() {
    const root = clearRoot();

    const components = [
        Navbar({ links: navData }),
        Welcome({ welcomeData }),
        WhyUs({ whyUsData }),
        BookingList({ cardData, cardTitle }),
        Trust({ title: trustData.title, description: trustData.description }),
        BenefitCards({ benefits }),
        Footer({})
    ];

    components.forEach(component => root.appendChild(component));
}

function blogHandler({ params }) {
    const root = clearRoot();
    const { blogId } = params;

    const currentBlog = blogs[blogId];
    const navbar = Navbar({ links: navData });
    const heading = BlogHeading(currentBlog.heading);
    const guide = Guide({ title: currentBlog.guide.title, steps: currentBlog.guide.steps });

    root.appendChild(navbar);
    root.appendChild(heading);
    root.appendChild(guide);

    if (currentBlog.charges) root.appendChild(Charges({ charges: currentBlog.charges }));
    if (currentBlog.benefits) root.appendChild(BlogBenefit(currentBlog.benefits));
    if (currentBlog.services) root.appendChild(BlogService(currentBlog.services));

    root.appendChild(Footer({}));
}

function servicesHandler() {
    const root = clearRoot();

    const navbar = Navbar({ links: navData });
    const welcome = Welcome({ welcomeData: serviceWelcome });

    root.appendChild(navbar);
    root.appendChild(welcome);
    root.appendChild(BlogService(serviceData));

    root.appendChild(Footer({}));
}

function downloadsHandler() {
    const root = clearRoot();

    const navbar = Navbar({ links: navData });
    const welcome = Welcome({ welcomeData: downloadWelcome });
    const downloadable = Downloadable(downloadableData);

    root.appendChild(navbar);
    root.appendChild(welcome);
    root.appendChild(downloadable);

    root.appendChild(Footer({}));
}

function privacyPolicyHandler() {
    const root = clearRoot();
    const navbar = Navbar({ links: navData });
    root.appendChild(navbar);
    root.appendChild(PrivacyPolicy());
    root.appendChild(Footer({}));
}

function termsAndConditionsHandler() {
    const root = clearRoot();
    const navbar = Navbar({ links: navData });
    root.appendChild(navbar);
    root.appendChild(TermComponent());
    root.appendChild(Footer({}));
}

function refundPolicyHandler() {
    const root = clearRoot();
    const navbar = Navbar({ links: navData });
    root.appendChild(navbar);
    root.appendChild(RefundPolicy(refundPolicyData));
    root.appendChild(Footer({}));
}

function disclaimerHandler() {
    const root = clearRoot();
    const navbar = Navbar({ links: navData });
    root.appendChild(navbar);
    root.appendChild(Disclaimer());
    root.appendChild(Footer({}));
}

export {
    homeHandler ,
    blogHandler,
    servicesHandler,
    downloadsHandler,
    privacyPolicyHandler,
    termsAndConditionsHandler,
    refundPolicyHandler,
    disclaimerHandler
}