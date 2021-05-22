'use strict';
import './sass/main'
import menuItemTpl from './templates/menu'
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

const refs = {
  menuList: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('.theme-switch__toggle')
}

const menuMarkup = createFoodMenuMarkup(menu);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createFoodMenuMarkup(foodItems) {
  return menuItemTpl(foodItems);
}

if(!localStorage.getItem('theme')){
  localStorage.setItem('theme', Theme.LIGHT);
}

document.body.classList = localStorage.getItem('theme');

if(document.body.classList.contains(Theme.DARK)) {
 refs.themeSwitchToggle.checked = true ;
}

refs.themeSwitchToggle.addEventListener('change', themeSwitchToggleHandler);

function themeSwitchToggleHandler (event) {
  if(event.target.checked){
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
  }else{
    localStorage.setItem('theme', Theme.LIGHT)
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
}



