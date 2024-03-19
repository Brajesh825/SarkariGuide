function Charges({ charges }) {
    const chargesContainer = document.createElement('div');
    chargesContainer.classList.add('charges');

    const chargesTitle = document.createElement('h2');
    chargesTitle.classList.add('charges-title');
    chargesTitle.textContent = 'Charges for Aadhaar Services';

    const servicesList = document.createElement('ul');
    servicesList.classList.add('services-list');

    charges.services.forEach(service => {
        const serviceItem = document.createElement('li');
        serviceItem.classList.add('service-item');

        const serviceDescription = document.createElement('span');
        serviceDescription.classList.add('service-description');
        serviceDescription.textContent = service.service + ': ';

        const serviceCharge = document.createElement('span');
        serviceCharge.classList.add('service-charge');
        serviceCharge.textContent = service.charge;

        serviceItem.appendChild(serviceDescription);
        serviceItem.appendChild(serviceCharge);
        servicesList.appendChild(serviceItem);
    });

    const note = document.createElement('p');
    note.classList.add('note');
    note.textContent = charges.note;

    chargesContainer.appendChild(chargesTitle);
    chargesContainer.appendChild(servicesList);
    chargesContainer.appendChild(note);

    return chargesContainer;
}

export default Charges;
