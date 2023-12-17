// Your existing JavaScript code

const images = [...document.querySelectorAll('.item img')]; // Update the selector to match your HTML structure
// Popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.add('active'); // Use add instead of toggle to ensure the class is added
    });
});

const updateImage = (i) => {
    const clickedImage = images[i];
    const imagePath = clickedImage.src;
    const imageType = getImageType(imagePath);

    largeImage.src = imagePath;
    
    imageIndex.innerHTML = posts[i].DrawBy;
    index = i;
};

const getImageType = (path) => {
    const extension = path.split('.').pop().toLowerCase();
    // You can add more image types as needed
    const supportedTypes = ['png', 'jpg', 'jpeg', 'gif'];

    if (supportedTypes.includes(extension)) {
        return extension;
    } else {
        // Default to 'png' or handle the case accordingly
        return 'png';
    }
};
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active'); // Use remove instead of toggle to ensure the class is removed
});

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    }
});
