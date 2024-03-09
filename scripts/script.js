
//------Responsive navbar-----

function showSidebar(){
  const sidebar = document.querySelector('.navLinks')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.navLinks')
  sidebar.style.display = 'none'
}

//---------MENU-----------------
const menu=document.querySelectorAll('.tab-item');

const menuId=document.querySelectorAll('.menu-content');
function selectItem(e){

  removeShow();
  const menuItem = document.querySelector(`#${this.id}-content`);  
  menuItem.classList.add('show');

}

function removeShow(){
   menu.forEach(item =>{
    item.classList.remove('show');
   });
}
menuId.forEach(item => {
  item.addEventListener('click',selectItem);
});


//----Drinks button----
function selectItemm(e){

  removeShow();
  const menuItem = document.querySelector(`#menu-8-content`);  
  menuItem.classList.add('show');

}
const drinkItem = document.querySelector('.top-right-drinks-btn').addEventListener('click',selectItemm);

