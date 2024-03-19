function BlogService(data) {
    const container = document.createElement('div');
    container.classList.add('blog-service-container');
  
    // Set title
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;
    container.appendChild(titleElement);
  
    // Create services container
    const servicesContainer = document.createElement('div');
    servicesContainer.classList.add('blog-service');
  
    // Iterate through services and create elements
    data.services.forEach(service => {
      const serviceElement = document.createElement('div');
      serviceElement.classList.add('blog-service-item'); // Changed class name
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = service.name;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = service.description;
  
      serviceElement.appendChild(nameElement);
      serviceElement.appendChild(descriptionElement);
      servicesContainer.appendChild(serviceElement);
    });
  
    container.appendChild(servicesContainer);
    return container;
  }
  
  export default BlogService;
  