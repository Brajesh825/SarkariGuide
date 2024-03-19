function Guide({ title, steps }) {
    const guideContainer = document.createElement('div');
    guideContainer.classList.add('guide');

    const guideTitle = document.createElement('h2');
    guideTitle.classList.add('guide-title');
    guideTitle.textContent = title;

    const stepsList = document.createElement('ol');
    stepsList.classList.add('steps-list');
    steps.forEach((step, index) => {
        const stepItem = document.createElement('li');
        stepItem.classList.add('step-item');
        
        // Check if the step is an object with 'text' and 'link' properties
        if (step.text && step.link) {
            const anchor = document.createElement('a');
            anchor.href = step.link.href; // Access the href property of the link object
            anchor.textContent = step.link.text;
            stepItem.textContent = step.text
            stepItem.appendChild(anchor);
        } else {
            // If the step is not an object or doesn't have 'text' and 'link' properties, treat it as plain text
            stepItem.textContent = step.text;
        }
        
        stepsList.appendChild(stepItem);
    });

    guideContainer.appendChild(guideTitle);
    guideContainer.appendChild(stepsList);

    return guideContainer;
}

export default Guide;
