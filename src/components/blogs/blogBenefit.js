function BlogBenefit(benefitData) {

    console.log(benefitData);

    const { title, benefits, additionalInfo } = benefitData;

    const benefitContainer = document.createElement('div');
    benefitContainer.classList.add('benefit');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('benefit-title');
    titleElement.textContent = title;

    const benefitList = document.createElement('ul');
    benefitList.classList.add('benefit-list');
    benefits.forEach(benefit => {
        const benefitItem = document.createElement('li');
        benefitItem.classList.add('benefit-item');
        benefitItem.textContent = benefit;
        benefitList.appendChild(benefitItem);
    });

    const additionalInfoElement = document.createElement('p');
    additionalInfoElement.classList.add('benefit-additional-info');
    additionalInfoElement.textContent = additionalInfo;

    benefitContainer.appendChild(titleElement);
    benefitContainer.appendChild(benefitList);
    benefitContainer.appendChild(additionalInfoElement);

    return benefitContainer;
}

export default BlogBenefit