const dropdownBtn = document.querySelectorAll('.dropdown-elem');
const faqquestion= document.querySelectorAll('.faq-question');
const faqcontent = document.querySelectorAll('.faq-content');
lastOpened = null;
lastopenedtoggle = null;

const product= document.querySelectorAll('.dropdown-elem')[0];

const template = document.querySelectorAll('.dropdown-elem')[1];

const flip  = document.querySelector('.flip');

dropdownBtn.forEach(btn => btn.addEventListener('click', function(e) {
  const menuContent = this.nextElementSibling;
  if (!menuContent.classList.contains("show")) {
    if(e.target === flip){
      e.target.classList.add('icon-flipped');
    }
    else{
      e.target.firstElementChild.classList.add('icon-flipped');
    }
  menuContent.classList.add("show");
  menuContent.classList.remove("hide");
  } else {
  menuContent.classList.add("hide");
  menuContent.classList.remove("show");
  if(e.target === flip){
    e.target.classList.remove('icon-flipped');
  }
  else{
    e.target.firstElementChild.classList.remove('icon-flipped');
  }
  }
  
  if (lastOpened && lastOpened !== menuContent)
      lastOpened.classList.remove("show");
      
      lastOpened = menuContent;
}));

const swingsvg = document.querySelector('.swingsvg');

setInterval(function() {
  swingsvg.classList.toggle('blink');
}, 100);

//faq component toggle
faqquestion.forEach(btn=>btn.addEventListener('click', function() {
  console.log(btn);
  const faqcontent = this.nextElementSibling;
  console.log(faqcontent);

  if (!faqcontent.classList.contains("show")) {
    faqcontent.classList.add("show");
  faqcontent.style.display="none";
  } else {
  faqcontent.style.display="block";
  faqcontent.classList.remove("show");
  }
  
  if (lastopenedtoggle && lastopenedtoggle !== faqcontent)
      lastopenedtoggle.classList.remove("show");
      lastopenedtoggle = faqcontent;
}));

//hamburger menu
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.menu-items')
rightnav = document.querySelector('.signup')
menu = document.querySelector('.menu')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    menu.classList.toggle('v-class-resp');

})