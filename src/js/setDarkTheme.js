import refs from './refs'
const { checkboxBtn } = refs
checkboxBtn.addEventListener('change', e => {
  //   ========= 1 ==========
  if (e.target.checked) {
    document.querySelector('body').classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.querySelector('body').classList.remove('dark')
    localStorage.removeItem('theme')
  }
  //   ========= 1 ==========
})
let theme = localStorage.getItem('theme')
// //   ========= 1 ==========
console.log('theme by LS:', theme)
if (theme) {
  document.querySelector('body').classList.add('dark')
  checkboxBtn.checked = true
} else {
  document.querySelector('body').classList.remove('dark')
  checkboxBtn.checked = false
}
//   ========= 1 ==========
