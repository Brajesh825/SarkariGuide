const RefundPolicy = (data) => {
    const refundContainer = document.createElement('div');
    refundContainer.classList.add('refund-policy');

    const title = document.createElement('h2');
    title.textContent = data.title;
    refundContainer.appendChild(title);

    const lastUpdated = document.createElement('p');
    lastUpdated.textContent = data.lastUpdated;
    refundContainer.appendChild(lastUpdated);

    data.content.forEach(section => {
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section');

        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        sectionContainer.appendChild(sectionTitle);

        if (section.description) {
            const description = document.createElement('p');
            description.textContent = section.description;
            sectionContainer.appendChild(description);
        }

        if (section.content) {
            section.content.forEach(subSection => {
                const subSectionContainer = document.createElement('div');
                subSectionContainer.classList.add('subsection');

                const subSectionTitle = document.createElement('h4');
                subSectionTitle.textContent = subSection.title;
                subSectionContainer.appendChild(subSectionTitle);

                if (subSection.description) {
                    const subSectionDescription = document.createElement('p');
                    subSectionDescription.textContent = subSection.description;
                    subSectionContainer.appendChild(subSectionDescription);
                }

                if (subSection.terms) {
                    const termsList = document.createElement('ul');
                    subSection.terms.forEach(term => {
                        const termItem = document.createElement('li');
                        termItem.textContent = term;
                        termsList.appendChild(termItem);
                    });
                    subSectionContainer.appendChild(termsList);
                }

                sectionContainer.appendChild(subSectionContainer);
            });
        }

        if (section.cancellationInstructions) {
            const cancellationInstructions = document.createElement('p');
            cancellationInstructions.textContent = section.cancellationInstructions;
            sectionContainer.appendChild(cancellationInstructions);
        }

        if (section.cancellationMethods) {
            const cancellationMethodsList = document.createElement('ul');
            section.cancellationMethods.forEach(method => {
                const methodItem = document.createElement('li');
                methodItem.textContent = method;
                cancellationMethodsList.appendChild(methodItem);
            });
            sectionContainer.appendChild(cancellationMethodsList);
        }

        if (section.reimbursementInfo) {
            const reimbursementInfo = document.createElement('p');
            reimbursementInfo.textContent = section.reimbursementInfo;
            sectionContainer.appendChild(reimbursementInfo);
        }

        if (section.refundConditions) {
            const refundConditionsList = document.createElement('ul');
            section.refundConditions.forEach(condition => {
                const conditionItem = document.createElement('li');
                conditionItem.textContent = condition;
                refundConditionsList.appendChild(conditionItem);
            });
            sectionContainer.appendChild(refundConditionsList);
        }

        if (section.contactInfo) {
            const contactInfo = document.createElement('p');
            contactInfo.textContent = section.contactInfo;
            sectionContainer.appendChild(contactInfo);
        }

        if (section.contactMethods) {
            const contactMethodsList = document.createElement('ul');
            section.contactMethods.forEach(method => {
                const methodItem = document.createElement('li');
                methodItem.textContent = method;
                contactMethodsList.appendChild(methodItem);
            });
            sectionContainer.appendChild(contactMethodsList);
        }

        refundContainer.appendChild(sectionContainer);
    });

    return refundContainer;
};

export default RefundPolicy;
