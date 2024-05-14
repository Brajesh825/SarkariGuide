// Import necessary modules and components
import page from "page.js";

import { homeHandler,blogHandler,servicesHandler,downloadsHandler,privacyPolicyHandler,termsAndConditionsHandler,refundPolicyHandler,disclaimerHandler } from "./handlers";

// Define routes
page('/', homeHandler);
page('/blog/:blogId', blogHandler);
page('/services', servicesHandler);
page('/downloads', downloadsHandler);
page('/privacy-policy', privacyPolicyHandler);
page('/terms-and-conditions', termsAndConditionsHandler);
page('/refund-policy', refundPolicyHandler);
page('/disclaimer', disclaimerHandler);
page('*', () => {
    page.redirect("/")
});

// Start routing
page.start();


const root = document.getElementById('root')

root.style.opacity = 0;