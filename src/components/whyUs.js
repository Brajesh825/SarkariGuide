// WhyUs.js

const WhyUs = ({ whyUsData }) => {
    const { title, description } = whyUsData;

    // Create the Why Us container
    const whyUsContainer = document.createElement('div');
    whyUsContainer.classList.add('why-us-container');

    // Title
    const whyUsTitle = document.createElement('h2');
    whyUsTitle.classList.add('why-us-title');
    whyUsTitle.textContent = title;

    // Description
    const whyUsDescription = document.createElement('p');
    whyUsDescription.classList.add('why-us-description');
    whyUsDescription.textContent = description;

    // Append title and description to the container
    whyUsContainer.appendChild(whyUsTitle);
    whyUsContainer.appendChild(whyUsDescription);

    return whyUsContainer;
};

export default WhyUs;
