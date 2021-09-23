const toggleBack = document.createElement('button')
toggleBack.textContent = 'toggle'
btnRemove.after(toggleBack)

toggleBack.addEventListener('click', e => {
  console.log(e)
  bodyRef.classList.toggle('dark')
  console.log(localStorage.getItem('class'))
  //   if (localStorage.getItem("class")) {
  //     localStorage.removeItem("class");
  //   } else {
  //     localStorage.setItem("class", "dark");
  //   }
  localStorage.getItem('class') ? localStorage.removeItem('class') : localStorage.setItem('class', 'dark')
})
