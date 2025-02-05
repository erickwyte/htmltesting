let sideMenu = document.getElementsByClassName(".middle-nav");

function openmenu(){
  sideMenu.style.right="0";
}
function closemenu(){
  sideMenu.style.right="-200px";
}



let profileImg= document.querySelector('.menu-bar');
let sidebar = document.querySelector('.middle-nav' );



profileImg.onclick = function(){
  sidebar.classList.toggle('menusidebar')
}


/*

let closedMenu= document.querySelector('.closemenu');
let sidBar = document.querySelector('.middle-nav' );



closedMenu.onclick = function(){
  sidBar.classList.toggle('closedmenubar')
}*/















let scrollcontainer = document.querySelector(".gallery")

/*let backbtn = document.getElementById("backbtn");*/
let nextbtn = document.getElementById("nextbtn")
;
/*
scrollcontainer.addEventListener("wheel", (evt) =>{
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
});
*/
nextbtn.addEventListener("click", () =>{
  scrollcontainer.scrollLeft +=100;
});
/*
backtbtn.addEventListener("click", ()=>{
  scrollcontainer.scrollLeft-=100;
});
*/







  // Show or hide the jump-to-top and jump-to-bottom buttons based on scroll position
  window.onscroll = function() {
    var jumpToTopButton = document.getElementById('jump-to-top');
    var jumpToBottomButton = document.getElementById('jump-to-bottom');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        jumpToTopButton.style.display = 'block';
        jumpToBottomButton.style.display = 'block';
    } else {
        jumpToTopButton.style.display = 'none';
        jumpToBottomButton.style.display = 'none';
    }
};

// Function to scroll to the top of the page
function jumpToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Function to scroll to the bottom of the page
function jumpToBottom() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}