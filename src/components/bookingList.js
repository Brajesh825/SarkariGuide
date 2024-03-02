// bookingList.js
import Card from './card';

const BookingList = ({ cardData, cardTitle }) => {
    // Create the outer container
    const outerContainer = document.createElement('div');
    outerContainer.classList.add('booking-list-container');

    // Add the heading with the appropriate class
    const heading = document.createElement('h2');
    heading.textContent = cardTitle;
    heading.classList.add('heading'); // Add the heading class
    outerContainer.appendChild(heading);

    // Create the inner container for the booking list
    const bookingListContainer = document.createElement('div');
    bookingListContainer.classList.add('booking-list');

    cardData.forEach(data => {
        const card = Card(data);
        bookingListContainer.appendChild(card);
    });

    // Append the booking list container to the outer container
    outerContainer.appendChild(bookingListContainer);

    return outerContainer;
};

export default BookingList;
