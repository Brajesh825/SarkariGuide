// Disclaimer.js
import disclaimerData from "../../datasets/policy/disclaimerData";

const Disclaimer = () => {
    const disclaimerContainer = document.createElement('div');
    disclaimerContainer.classList.add('disclaimer');

    const title = document.createElement('h2');
    title.textContent = disclaimerData.title;
    disclaimerContainer.appendChild(title);

    disclaimerData.content.forEach(paragraph => {
        const para = document.createElement('p');
        para.textContent = paragraph;
        disclaimerContainer.appendChild(para);
    });

    const consent = document.createElement('p');
    consent.textContent = "Consent: By using our website, you hereby consent to our disclaimer and agree to its terms.";
    disclaimerContainer.appendChild(consent);

    const updateInfo = document.createElement('p');
    updateInfo.textContent = "Update: Should we update, amend or make any changes to this document, those changes will be prominently posted here.";
    disclaimerContainer.appendChild(updateInfo);

    return disclaimerContainer;
};

export default Disclaimer;
