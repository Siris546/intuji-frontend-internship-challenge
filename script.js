var dropdownBtn = document.querySelectorAll('.dropdown-elem');
//Add this for toggling dropdown
lastOpened = null;
const product= document.querySelector('.dropdown-elem');
console.log(product);
var menuContent = product.nextElementSibling;
console.log(menuContent);
dropdownBtn.forEach(btn => btn.addEventListener('click', function() {
  var menuContent = this.nextElementSibling;
  if (!menuContent.classList.contains("show")) {
  menuContent.classList.add("show");
  menuContent.classList.remove("hide");
  } else {
  menuContent.classList.add("hide");
  menuContent.classList.remove("show");
  }
  
  //Add this for toggling dropdown
  if (lastOpened && lastOpened !== menuContent)
      lastOpened.classList.remove("show");
      lastOpened = menuContent;
}));