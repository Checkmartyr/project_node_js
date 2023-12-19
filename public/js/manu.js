// Your existing JavaScript code

function renderComment(comment) {
    let html = `
    <div class="comment__container opened" id="${comment._id}">
      <div class="comment__card">
        <h3 class="comment__title"> >>>${comment.author}</h3>
        <p>${comment.commentText}</p>
        <div class="comment__card-footer">
        <div class="reply" ></div>
          <div class="show-replies" > </div>
        </div>
      </div>`;
    html += `</div>`;
    return html;
  }

const images = [...document.querySelectorAll('.item img')]; // Update the selector to match your HTML structure
// Popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const commentForm = document.querySelector('#fromId');
const submitButton = document.querySelector('.btnform');
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
    let authorName =  findname(posts[i].DrawBy);
    largeImage.src = imagePath;
    // console.log(commentForm.action = `/comment/${posts[i]._id}`);
   
3
    document.querySelector('#fromId').action = `http://127.0.0.1:4000/comment/${posts[i]._id}?author=${authorName}`;
        // Add an event listener to the button
    console.log(commentForm.action);
    let commentsArray = Comments[posts[i]._id].comment; // Assuming Comments is a valid object
    let container = document.querySelector(".comments"); // Reference container once to avoid repeated DOM queries.
    let DrawcomenHtml = ''
    commentsArray.forEach((comment) => {
    DrawcomenHtml += renderComment(comment); // Assuming renderComment is a valid function returning an HTML string.
    // Efficiently appends to the container.
});
    container.innerHTML = DrawcomenHtml;
    imageIndex.innerHTML = authorName;
    index = i;
};

submitButton.addEventListener('click', function () {
    // Trigger the form submission
    document.querySelector('#fromId').submit();
});

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


let findname = (uid) =>{
    for( let user of AllUserDate){
        if (user._id == uid) {
            return user.username;
        }
    }
}



// leftArrow.addEventListener('click', () => {
//     if (index > 0) {
//         updateImage(index - 1);
//     }
// });

// rightArrow.addEventListener('click', () => {
//     if (index < images.length - 1) {
//         updateImage(index + 1);
//     }
// });


