const Card = (props) => {
    const { title, subtitle, description, imageUrl, link } = props;

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.style.cursor = 'pointer'; // Change cursor to indicate clickability

    // Add event listener to redirect to the specified link when clicked
    cardContainer.addEventListener('click', () => {
        window.location.href = link;
    });

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = title;
    image.classList.add('card-image'); // Add class for the image
    cardContainer.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    cardTitle.classList.add('card-title'); // Add class for the title
    cardContent.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h3');
    cardSubtitle.textContent = subtitle;
    cardSubtitle.classList.add('card-subtitle'); // Add class for the subtitle
    cardContent.appendChild(cardSubtitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardDescription.classList.add('card-description'); // Add class for the description
    cardContent.appendChild(cardDescription);

    const cardLink = document.createElement('a');
    cardLink.href = link;
    cardLink.textContent = 'Learn More';
    cardLink.classList.add('card-link'); // Add class for the link
    cardContent.appendChild(cardLink);

    cardContainer.appendChild(cardContent);

    return cardContainer;
};

export default Card;
