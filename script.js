const nav_list = document.querySelector('.nav_list'),
extra_btn = document.querySelector('.extra_btn')


extra_btn.addEventListener('click', () => {
    nav_list.style.display = 'flex';
})

document.querySelector('.nav_item').addEventListener('click', () => {
    nav_list.style.display = 'none';
})