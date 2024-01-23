const menuBtn = document.getElementById('menu__btn');
const menuClose = document.getElementById('menu__close-btn');
const menuList = document.getElementById('menu__list');
const menuTiny = document.getElementById("menu--close");

menuBtn.addEventListener('click',()=>
{
    menuList.setAttribute('id','menu__list--open');
    menuTiny.setAttribute('class','menu--open')
})

menuClose.addEventListener('click',()=>
{
    menuList.removeAttribute('id','menu__list--open');
    menuTiny.removeAttribute('class','menu--open')
})