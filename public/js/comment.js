
// function renderComment(comment) {
//   let html = `
//   <div class="comment__container opened" id="${comment._id}">
//     <div class="comment__card">
//       <h3 class="comment__title">${comment.author}</h3>
//       <p>${comment.commentText}</p>
//       <div class="comment__card-footer">
//       <div class="reply" ></div>
//         <div class="show-replies" > </div>
//       </div>
//     </div>`;

//   // if (comment.replies && comment.replies.length > 0) {
    
//   //   comment.replies.forEach(reply => {
//   //     html += `<div data-set="${comment.id}" class="comment__container" id="${reply.id}">`;
//   //     html += renderReplyComment(reply);
//   //     html += ` </div>`;
//   //   });
//   // }

//   html += `</div>`;
//   return html;
// }
// function renderReplyComment(comment) {
//   let html = `
//     <div class="comment__card">
//       <h3 class="comment__title">${comment.title}</h3>
//       <p>${comment.content}</p>
//       <div class="comment__card-footer">
//         <div class="reply">Reply</div>
//         <div class="show-replies" > Show reply ${comment.replies.length}</div>
//       </div>
//     </div>`;

//   if (comment.replies && comment.replies.length > 0) {
    
//     comment.replies.forEach(reply => {
//       html += `<div data-set="${comment.id}" class="comment__container" id="${reply.id}">
// `;
//       html += renderReplyComment(reply);
//       html += `</div>`;
//     });
//   }

//   // html += ` </div>`;
//   return html;
// }
// // Example usage:


const commentObject = {
  id: "comment1",
  title: "Comment Title",
  content: "Comment Content",
  likes: 10,
  dislikes: 2,
  replies: [
    {
      id: "reply1",
      title: "Reply Title",
      content: "Reply Content",
      likes: 5,
      dislikes: 1,
      replies: [
        {
        id: "replyofreply1",
        title: "replyofreply1 Title",
        content: "replyofreply1 Content",
        likes: 5,
        dislikes: 1,
        replies: [],
      },
    ]
    
      // ... additional replies
    },

    // ... additional replies
    {
      id: "reply2",
      title: "reply2 Title",
      content: "reply2 Content",
      likes: 5,
      dislikes: 1,
      replies: [],
    },
  ],
};

// const commentsArray = Comments['657ece47eb8cbe5284e19823'].comment; // Assuming Comments is a valid object
// const container = document.querySelector(".container"); // Reference container once to avoid repeated DOM queries.

// commentsArray.forEach((comment) => {
//   console.log(comment);
//   let renderedComment = renderComment(comment); // Assuming renderComment is a valid function returning an HTML string.
//   container.insertAdjacentHTML('beforeend', renderedComment); // Efficiently appends to the container.
// });

// console.log(Comments['657ece47eb8cbe5284e19823'].comment);


// const renderedComment = renderComment(commentObject);
// //   const com = document.getElementsByClassName('comment-box') += renderedComment;

// // Append to the DOM
// document.querySelector(".container").innerHTML += renderedComment;
// // console.log(com);

// let showContainers = document.querySelectorAll(".show-replies");
// let showForm = document.querySelectorAll(".reply");


// showContainers.forEach((btn) =>
//   btn.addEventListener("click", (e) => {
//     // showContainers = document.querySelectorAll(".show-replies");
//     // console.log("hi");
//     let parentContainer = e.target.closest(".comment__container");
//     let _id = parentContainer.id;
//     console.log(_id);
//     if (_id) {
//       let childrenContainer = parentContainer.querySelectorAll(`[data-set=${_id}]`);
//       childrenContainer.forEach((child) => child.classList.toggle("opened"));
//     }
//   })
// );



// showForm.forEach((btn) =>
//   btn.addEventListener("click", (e) => {
//     let parentContainer = e.target.closest(".comment__container");
//     // Check if parentContainer found before accessing its id
//     if (parentContainer) {
//         let _id = parentContainer.id;
//         console.log(_id);
//         if (_id) {
        
//         }
//       }
//   })); 

