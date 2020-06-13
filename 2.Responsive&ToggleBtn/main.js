const toggleBtn = document.querySelector(".toggle-btn")
const menu = document.querySelector(".header__menu")

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})
