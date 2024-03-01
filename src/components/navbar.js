// Navbar.js

const Navbar = ({ links, logoSrc }) => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Create list items and anchor tags for each link
    links.forEach(link => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        li.appendChild(anchor);
        ul.appendChild(li);
    });

    // Create logo element
    const logo = document.createElement('img');
    logo.src = logoSrc; // Use the logoSrc prop for the logo path
    logo.alt = 'Logo';

    // Create hamburger menu icon
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '&#9776;';

    // Toggle menu function for hamburger button
    hamburger.addEventListener('click', () => {
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    });

    // Append logo, hamburger button, and links to the navbar
    nav.appendChild(logo);
    nav.appendChild(ul);
    nav.appendChild(hamburger);
    return nav;
}

export default Navbar;
