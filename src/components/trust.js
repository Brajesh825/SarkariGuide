// Trust.js
const Trust = ({ title, description }) => {
    // Create the trust container
    const trustContainer = document.createElement('div');
    trustContainer.classList.add('trust-container');

    // Create the trust title
    const trustTitle = document.createElement('h2');
    trustTitle.textContent = title;
    trustTitle.classList.add('trust-title');
    trustContainer.appendChild(trustTitle);

    // Create the trust description
    const trustDescription = document.createElement('p');
    trustDescription.textContent = description;
    trustDescription.classList.add('trust-description');
    trustContainer.appendChild(trustDescription);

    return trustContainer;
};

export default Trust;
