const warpper = document.querySelector('.warpper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnPop = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');
const logoutButton = document.querySelector('.btnlogout');
Registerlink.addEventListener('click', () => {
    warpper.classList.add('active');
});

Loginlink.addEventListener('click', () => {
    warpper.classList.remove('active');
});


btnPop.addEventListener('click', () => {
    warpper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    warpper.classList.remove('active-popup');
    warpper.classList.remove('active');
});

// ของ search bar //

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}



// You Create new javascript file, File Name  suggestions., and Paste the Code

let suggestions = [
    "Channel",
    "Mr Code Box",
    "Vs Code",
    "Instagram",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Please Like, Share & Subscribe",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


// product //

const heartIcon = document.querySelector('.fa-heart');

heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('full');
});
