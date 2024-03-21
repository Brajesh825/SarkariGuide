const Navbar = ({ links }) => {
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

    // Create text for digital services
    const digitalServicesText = document.createElement('span');
    digitalServicesText.textContent = 'Digital Services';
    digitalServicesText.classList.add('digital-services'); // Add a class for styling

    // Create hamburger menu icon
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '&#9776;';

    // Toggle menu function for hamburger button
    hamburger.addEventListener('click', () => {
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    });

    // Append digital services text, hamburger button, and links to the navbar
    nav.appendChild(digitalServicesText);
    nav.appendChild(ul);
    nav.appendChild(hamburger);
    return nav;
}

export default Navbar;
