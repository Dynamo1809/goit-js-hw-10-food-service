'use strict';
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

refs.themeSwitchToggle.addEventListener('change', themeSwitchToggleHandler)

function themeSwitchToggleHandler (event) {
  localStorage.setItem('toggle-checked', event.target.checked);
  console.log(localStorage.getItem('toggle-checked'))
  
  if(localStorage.getItem('toggle-checked') === 'true'){
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
  }else{
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
  // event.target.checked = localStorage.getItem('toggle-checked')
  // localStorage.setItem('toggle-checked', event.target.checked);
}



