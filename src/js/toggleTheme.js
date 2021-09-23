import refs from './refs'
const { checkboxBtn } = refs

checkboxBtn.addEventListener('change', e => {
  //   ========= 2 with Light Theme ==========
  document.querySelector('body').classList.toggle('dark')
  document.querySelector('body').classList.toggle('light')
  let theme = e.target.checked ? 'dark' : 'light'
  localStorage.setItem('theme', theme)
  //   ========= 2 with Light Theme ==========
})

let theme = localStorage.getItem('theme')

//   ========= 2 with Light Theme ==========
if (!theme) {
  theme = 'light'
  localStorage.setItem('theme', theme)
}
document.querySelector('body').classList.add(theme)
checkboxBtn.checked = theme === 'light' ? false : true
//   ========= 2 with Light Theme ==========
