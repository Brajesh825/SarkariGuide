import termsAndConditions from "../../datasets/policy/termAndConditionData";

function TermComponent() {
    const termContainer = document.createElement('div');
    termContainer.classList.add('term-container');

    const title = document.createElement('h2');
    title.textContent = termsAndConditions.title;
    termContainer.appendChild(title);

    const intro = document.createElement('p');
    intro.textContent = termsAndConditions.intro;
    termContainer.appendChild(intro);

    const acceptance = document.createElement('p');
    acceptance.textContent = termsAndConditions.acceptance;
    termContainer.appendChild(acceptance);

    const terminology = document.createElement('p');
    terminology.textContent = termsAndConditions.terminology;
    termContainer.appendChild(terminology);

    const cookiesIntro = document.createElement('p');
    cookiesIntro.textContent = termsAndConditions.cookies.intro;
    termContainer.appendChild(cookiesIntro);

    const cookiesDescription = document.createElement('p');
    cookiesDescription.textContent = termsAndConditions.cookies.description;
    termContainer.appendChild(cookiesDescription);

    const licenseIntro = document.createElement('p');
    licenseIntro.textContent = termsAndConditions.license.intro;
    termContainer.appendChild(licenseIntro);

    const licenseRestrictions = document.createElement('ul');
    termsAndConditions.license.restrictions.forEach(restriction => {
        const listItem = document.createElement('li');
        listItem.textContent = restriction;
        licenseRestrictions.appendChild(listItem);
    });
    termContainer.appendChild(licenseRestrictions);

    const licenseStartDate = document.createElement('p');
    licenseStartDate.textContent = termsAndConditions.license.start_date;
    termContainer.appendChild(licenseStartDate);

    const commentsIntro = document.createElement('p');
    commentsIntro.textContent = termsAndConditions.comments.intro;
    termContainer.appendChild(commentsIntro);

    const commentsRights = document.createElement('p');
    commentsRights.textContent = termsAndConditions.comments.rights;
    termContainer.appendChild(commentsRights);

    const commentsRightsList = document.createElement('ul');
    termsAndConditions.comments.rights_list.forEach(right => {
        const listItem = document.createElement('li');
        listItem.textContent = right;
        commentsRightsList.appendChild(listItem);
    });
    termContainer.appendChild(commentsRightsList);

    const commentsLicense = document.createElement('p');
    commentsLicense.textContent = termsAndConditions.comments.license;
    termContainer.appendChild(commentsLicense);

    const hyperlinkingIntro = document.createElement('p');
    hyperlinkingIntro.textContent = termsAndConditions.hyperlinking.intro;
    termContainer.appendChild(hyperlinkingIntro);

    const hyperlinkingAllowed = document.createElement('ul');
    termsAndConditions.hyperlinking.allowed.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        hyperlinkingAllowed.appendChild(listItem);
    });
    termContainer.appendChild(hyperlinkingAllowed);

    const hyperlinkingApprovalTypes = document.createElement('ul');
    termsAndConditions.hyperlinking.approval_types.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        hyperlinkingApprovalTypes.appendChild(listItem);
    });
    termContainer.appendChild(hyperlinkingApprovalTypes);

    const hyperlinkingApprovalConditions = document.createElement('p');
    hyperlinkingApprovalConditions.textContent = termsAndConditions.hyperlinking.approval_conditions;
    termContainer.appendChild(hyperlinkingApprovalConditions);

    const iframesDescription = document.createElement('p');
    iframesDescription.textContent = termsAndConditions.iframes.description;
    termContainer.appendChild(iframesDescription);

    const contentLiabilityDescription = document.createElement('p');
    contentLiabilityDescription.textContent = termsAndConditions.content_liability.description;
    termContainer.appendChild(contentLiabilityDescription);

    const privacy = document.createElement('p');
    privacy.textContent = termsAndConditions.privacy;
    termContainer.appendChild(privacy);

    const reservationOfRights = document.createElement('p');
    reservationOfRights.textContent = termsAndConditions.reservation_of_rights;
    termContainer.appendChild(reservationOfRights);

    const removalOfLinks = document.createElement('p');
    removalOfLinks.textContent = termsAndConditions.removal_of_links;
    termContainer.appendChild(removalOfLinks);

    const disclaimerDescription = document.createElement('p');
    disclaimerDescription.textContent = termsAndConditions.disclaimer.description;
    termContainer.appendChild(disclaimerDescription);

    const disclaimerLimitation = document.createElement('p');
    disclaimerLimitation.textContent = "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:";
    termContainer.appendChild(disclaimerLimitation);

    const disclaimerExceptions = document.createElement('ul');
    termsAndConditions.disclaimer.exceptions.forEach(exception => {
        const listItem = document.createElement('li');
        listItem.textContent = exception;
        disclaimerExceptions.appendChild(listItem);
    });
    termContainer.appendChild(disclaimerExceptions);

    return termContainer;
}

export default TermComponent