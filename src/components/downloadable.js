function Downloadable(data) {
    const container = document.createElement('div');
    container.classList.add('downloadable-container');
  
    // Set title
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;
    container.appendChild(titleElement);
  
    // Create downloadable items container
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('downloadable-items');
  
    // Iterate through downloadable items and create elements
    data.items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('downloadable-item');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = item.name;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = item.description;
  
      const downloadLink = document.createElement('a');
      downloadLink.textContent = "Download";
      downloadLink.setAttribute('href', item.downloadLink);
      downloadLink.setAttribute('download', ''); // This will make the browser download the file when clicked
  
      itemElement.appendChild(nameElement);
      itemElement.appendChild(descriptionElement);
      itemElement.appendChild(downloadLink);
      itemsContainer.appendChild(itemElement);
    });
  
    container.appendChild(itemsContainer);
    return container;
  }
  
  export default Downloadable;
