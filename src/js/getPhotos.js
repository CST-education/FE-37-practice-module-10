// import './setDarkTheme'
import './toggleTheme'

import data from '../db/photos.json'
import template from '../templates/photoByArray.handlebars'

import refs from './refs'
const { photoList } = refs

let result = template(data)
photoList.insertAdjacentHTML('beforeend', result)

// checkboxBtn.addEventListener('change', e => {
//   console.log(e.target.checked)
//   //   ========= 1 ==========
//   if (e.target.checked) {
//     document.querySelector('body').classList.add('dark')
//     localStorage.setItem('theme', 'dark')
//   } else {
//     document.querySelector('body').classList.remove('dark')
//     localStorage.removeItem('theme')
//   }
//   //   ========= 1 ==========

//   //   //   ========= 2 with Light Theme ==========
//   //   document.querySelector('body').classList.toggle('dark')
//   //   document.querySelector('body').classList.toggle('light')
//   //   let theme = e.target.checked ? 'dark' : 'light'
//   //   localStorage.setItem('theme', theme)
//   //   //   ========= 2 with Light Theme ==========
// })
// let theme = localStorage.getItem('theme')
// // //   ========= 1 ==========
// console.log('theme by LS:', theme)
// if (theme) {
//   document.querySelector('body').classList.add('dark')
//   checkboxBtn.checked = true
// } else {
//   document.querySelector('body').classList.remove('dark')
//   checkboxBtn.checked = false
// }
// //   ========= 1 ==========

// //   ========= 2 with Light Theme ==========
// if (!theme) {
//   theme = 'light'
//   localStorage.setItem('theme', theme)
// }
// document.querySelector('body').classList.add(theme)
// checkboxBtn.checked = theme === 'light' ? false : true
// //   ========= 2 with Light Theme ==========
