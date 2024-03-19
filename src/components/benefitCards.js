// BenefitCards.js

const BenefitCards = ({ benefits }) => {
    // Create container for the entire section
    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add('benefit-section');


    // Create heading for the section
    const heading = document.createElement('h2');
    heading.textContent = 'Benefits Of Choosing Us';

    // Create cards container
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('benefit-cards');

    // Create and append cards
    benefits.forEach(benefit => {
        const card = document.createElement('div');
        card.classList.add('benefit-card');
        
        const title = document.createElement('h3');
        title.textContent = benefit.title;

        const description = document.createElement('p');
        description.textContent = benefit.description;

        card.appendChild(title);
        card.appendChild(description);

        cardsContainer.appendChild(card);
    });

    // Append heading and cards container to the section container
    sectionContainer.appendChild(heading);
    sectionContainer.appendChild(cardsContainer);

    return sectionContainer;
}

export default BenefitCards;
