import privacyPolicyData from "../../datasets/policy/privacyPolicyData";

function PrivacyPolicy() {
    const privacyPolicyContainer = document.createElement('div');
    privacyPolicyContainer.classList.add('privacy-policy');

    const title = document.createElement('h2');
    title.textContent = privacyPolicyData.title;
    privacyPolicyContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = privacyPolicyData.description;
    privacyPolicyContainer.appendChild(description);

    const scope = document.createElement('p');
    scope.innerHTML = `<strong>Scope:</strong> ${privacyPolicyData.scope}`;
    privacyPolicyContainer.appendChild(scope);

    const consent = document.createElement('p');
    consent.innerHTML = `<strong>Consent:</strong> ${privacyPolicyData.consent}`;
    privacyPolicyContainer.appendChild(consent);

    const informationCollectedTitle = document.createElement('h3');
    informationCollectedTitle.textContent = "Information Collected";
    privacyPolicyContainer.appendChild(informationCollectedTitle);

    privacyPolicyData.informationCollected.forEach(info => {
        const infoElement = document.createElement('p');
        infoElement.innerHTML = `<strong>${info.title}:</strong> ${info.content}`;
        privacyPolicyContainer.appendChild(infoElement);
    });

    const useInformationTitle = document.createElement('h3');
    useInformationTitle.textContent = "Use of Information";
    privacyPolicyContainer.appendChild(useInformationTitle);

    const useInformationList = document.createElement('ul');
    privacyPolicyData.useInformation.forEach(use => {
        const listItem = document.createElement('li');
        listItem.textContent = use;
        useInformationList.appendChild(listItem);
    });
    privacyPolicyContainer.appendChild(useInformationList);

    const logFilesTitle = document.createElement('h3');
    logFilesTitle.textContent = "Log Files";
    privacyPolicyContainer.appendChild(logFilesTitle);

    const logFilesDescription = document.createElement('p');
    logFilesDescription.textContent = privacyPolicyData.logFiles.description;
    privacyPolicyContainer.appendChild(logFilesDescription);

    const cookiesAndWebBeaconsTitle = document.createElement('h3');
    cookiesAndWebBeaconsTitle.textContent = "Cookies and Web Beacons";
    privacyPolicyContainer.appendChild(cookiesAndWebBeaconsTitle);

    const cookiesAndWebBeaconsDescription = document.createElement('p');
    cookiesAndWebBeaconsDescription.textContent = privacyPolicyData.cookiesAndWebBeacons.description;
    privacyPolicyContainer.appendChild(cookiesAndWebBeaconsDescription);

    const advertisingPartnersTitle = document.createElement('h3');
    advertisingPartnersTitle.textContent = "Advertising Partners";
    privacyPolicyContainer.appendChild(advertisingPartnersTitle);

    const advertisingPartnersDescription = document.createElement('p');
    advertisingPartnersDescription.textContent = privacyPolicyData.advertisingPartners.description;
    privacyPolicyContainer.appendChild(advertisingPartnersDescription);

    const rightsTitle = document.createElement('h3');
    rightsTitle.textContent = "Rights";
    privacyPolicyContainer.appendChild(rightsTitle);

    const ccpaRightsTitle = document.createElement('h4');
    ccpaRightsTitle.textContent = "CCPA:";
    privacyPolicyContainer.appendChild(ccpaRightsTitle);

    const ccpaRightsList = document.createElement('ul');
    privacyPolicyData.rights.CCPA.rights.forEach(right => {
        const listItem = document.createElement('li');
        listItem.textContent = right;
        ccpaRightsList.appendChild(listItem);
    });
    privacyPolicyContainer.appendChild(ccpaRightsList);

    const ccpaResponseTime = document.createElement('p');
    ccpaResponseTime.textContent = privacyPolicyData.rights.CCPA.response_time;
    privacyPolicyContainer.appendChild(ccpaResponseTime);

    const gdprRightsTitle = document.createElement('h4');
    gdprRightsTitle.textContent = "GDPR:";
    privacyPolicyContainer.appendChild(gdprRightsTitle);

    const gdprRightsList = document.createElement('ul');
    privacyPolicyData.rights.GDPR.rights.forEach(right => {
        const listItem = document.createElement('li');
        listItem.textContent = right;
        gdprRightsList.appendChild(listItem);
    });
    privacyPolicyContainer.appendChild(gdprRightsList);

    const gdprResponseTime = document.createElement('p');
    gdprResponseTime.textContent = privacyPolicyData.rights.GDPR.response_time;
    privacyPolicyContainer.appendChild(gdprResponseTime);

    const childrensInformationTitle = document.createElement('h3');
    childrensInformationTitle.textContent = "Children's Information";
    privacyPolicyContainer.appendChild(childrensInformationTitle);

    const childrensInformationDescription = document.createElement('p');
    childrensInformationDescription.textContent = privacyPolicyData.childrensInformation.description;
    privacyPolicyContainer.appendChild(childrensInformationDescription);

    return privacyPolicyContainer;
}

export default PrivacyPolicy
