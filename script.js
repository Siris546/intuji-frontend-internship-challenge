const dropdownBtn = document.querySelectorAll('.dropdown-elem');
const faqquestion= document.querySelectorAll('.faq-question');
const faqcontent = document.querySelectorAll('.faq-content');
lastOpened = null;
lastopenedtoggle = null;
const product= document.querySelector('.dropdown-elem');

const flip  = document.querySelector('.flip');

dropdownBtn.forEach(btn => btn.addEventListener('click', function() {
  const menuContent = this.nextElementSibling;
  if (!menuContent.classList.contains("show")) {
    flip.classList.add('icon-flipped');
  menuContent.classList.add("show");
  menuContent.classList.remove("hide");
  } else {
  menuContent.classList.add("hide");
  menuContent.classList.remove("show");
  flip.classList.remove('icon-flipped');
  }
  
  if (lastOpened && lastOpened !== menuContent)
      lastOpened.classList.remove("show");
      lastOpened = menuContent;
}));

const swingsvg = document.querySelector('.swingsvg');

//write a script that will make the svg blink in time interval
setInterval(function() {
  swingsvg.classList.toggle('blink');
}, 100);

faqquestion.forEach(btn=>btn.addEventListener('click', function() {
  console.log(btn);
  const faqcontent = this.nextElementSibling;
  console.log(faqcontent);

  if (!faqcontent.classList.contains("show")) {
    faqcontent.classList.add("show");
  faqcontent.style.display="none";
  // faqcontent.classList.remove("hide");
  } else {
  faqcontent.style.display="block";
  faqcontent.classList.remove("show");
  }
  
  if (lastopenedtoggle && lastopenedtoggle !== faqcontent)
      lastopenedtoggle.classList.remove("show");
      lastopenedtoggle = faqcontent;
}));