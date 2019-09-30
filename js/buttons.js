function openMenu(){
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("head").classList.toggle('head-with-sidebar');
  document.getElementById("main").classList.toggle('main-with-sidebar');

}

function openPoints(e){
  let coll = e.target;
  let content = coll.nextElementSibling;

  coll.classList.toggle('activated'); //Повернути стрілку

  if(content.style.maxHeight){        //Розкрити меню
    content.style.maxHeight = null;
  } else{
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  /*let coll = document.getElementsByClassName('over_item');
  for(let i = 0; i < coll.length; i++){
    coll[i].addEventListener('click', function(){
      // this.classList.toggle('active');
      let content = this.nextElementSibling;
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else{
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    })
  }*/

/*  let arrow = document.getElementsByClassName('arrow');
  for(let p = 0; i < arrow.length; p++){
    arrow[p].addEventListener('click', function(){
      this.classList.toggle('active');
    })
  }*/
}
