// Welcome.js

const Welcome = ({ welcomeData }) => {
    const { title, subtitle, logoSrc } = welcomeData;

    // Create the welcome container
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList.add('welcome-container');

    // Left side - greeting
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');

    const welcomeTitle = document.createElement('h1');
    welcomeTitle.textContent = title;
    
    const welcomeSubtitle = document.createElement('p');
    welcomeSubtitle.textContent = subtitle;

    leftSide.appendChild(welcomeTitle);
    leftSide.appendChild(welcomeSubtitle);

    // Right side - logo
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');
    const logo = document.createElement('img');
    logo.src = logoSrc;
    logo.alt = 'Logo';
    rightSide.appendChild(logo);

    // Append left and right sides to the welcome container
    welcomeContainer.appendChild(leftSide);
    welcomeContainer.appendChild(rightSide);

    return welcomeContainer;
};

export default Welcome;
