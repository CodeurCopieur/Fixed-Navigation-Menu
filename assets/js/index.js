const selectElement = (s) => document.querySelector(s);
/* const selectElement = function(s) {
  document.querySelector(s);
} */

selectElement('.nav__burger').addEventListener('click', ()=> {
  selectElement('.nav__menu').classList.toggle('is-active');
})

window.addEventListener('scroll', (e)=> {

  const scrollValue = window.scrollY;

  if(scrollValue > 0){
    selectElement('.nav').classList.add('fixed');
    selectElement('.nav__logo span').classList.add('fill');
  }else {
    selectElement('.nav').classList.remove('fixed');
    selectElement('.nav__logo span').classList.remove('fill');
  }

})