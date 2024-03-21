// Footer.js

const Footer = ({ logoSrc }) => {
    // Create container for the entire footer
    const footerContainer = document.createElement('footer');
    footerContainer.classList.add('footer');

    // Create container for the left side
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('footer-left');

    // Create logo element
    const logo = document.createElement('img');
    logo.src = logoSrc; // Use the provided logo source
    logo.alt = 'Logo';

    // Append logo to the left container
    leftContainer.appendChild(logo);

    // Create container for the right side
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('footer-right');

    // Create links for Privacy Policy, Terms and Conditions, Refund Policy, and Disclaimer
    const privacyPolicyLink = createLink('Privacy Policy', '/privacy-policy');
    const termsAndConditionsLink = createLink('Terms and Conditions', '/terms-and-conditions');
    const refundPolicyLink = createLink('Refund Policy', '/refund-policy');
    const disclaimerLink = createLink('Disclaimer', '/disclaimer');

    // Append links to the right container
    rightContainer.appendChild(privacyPolicyLink);
    rightContainer.appendChild(termsAndConditionsLink);
    rightContainer.appendChild(refundPolicyLink);
    rightContainer.appendChild(disclaimerLink);

    // Create "All Rights Reserved" text
    const rightsText = document.createElement('p');
    rightsText.textContent = 'All Rights Reserved';

    // Append "All Rights Reserved" text to the right container
    rightContainer.appendChild(rightsText);

    // Append left and right containers to the footer container
    footerContainer.appendChild(leftContainer);
    footerContainer.appendChild(rightContainer);

    return footerContainer;
}

// Helper function to create links
function createLink(text, url) {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = url;
    return link;
}

export default Footer;
