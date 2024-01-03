var dropdownBtn = document.querySelectorAll('.dropdown-elem');
//Add this for toggling dropdown
lastOpened = null;
const product= document.querySelector('.dropdown-elem');

const flip  = document.querySelector('.flip');

dropdownBtn.forEach(btn => btn.addEventListener('click', function() {
  var menuContent = this.nextElementSibling;
  if (!menuContent.classList.contains("show")) {
    flip.classList.add('icon-flipped');
  menuContent.classList.add("show");
  menuContent.classList.remove("hide");
  } else {
  menuContent.classList.add("hide");
  menuContent.classList.remove("show");
  flip.classList.remove('icon-flipped');
  }
  
  //Add this for toggling dropdown
  if (lastOpened && lastOpened !== menuContent)
      lastOpened.classList.remove("show");
      lastOpened = menuContent;
}));

const swingsvg = document.querySelector('.swingsvg');

//write a script that will make the svg blink in time interval
setInterval(function() {
  swingsvg.classList.toggle('blink');
}, 100);
