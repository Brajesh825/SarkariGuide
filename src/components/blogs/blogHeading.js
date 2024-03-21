function BlogHeading({ title, image }) {
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('blog-heading');

    const headingTitle = document.createElement('h1');
    headingTitle.classList.add('blog-heading-title');
    headingTitle.textContent = title;

    headingContainer.appendChild(headingTitle);

    if (image) {
        const headingImage = document.createElement('img');
        headingImage.classList.add('blog-heading-image');
        headingImage.src = image;
        headingImage.alt = title + ' Image';
        headingContainer.appendChild(headingImage);
    }   

    return headingContainer;
}

export default BlogHeading;
