function openMenu(){
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("head").classList.toggle('head-with-sidebar');
  document.getElementById("main").classList.toggle('main-with-sidebar');

}

function openPoints(){
  document.getElementByClassName("item").classList.toggle('activated');
}
