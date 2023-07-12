const nav_list = document.querySelector('.nav_list'),
extra_btn = document.querySelector('.extra_btn'),
nav_items = document.querySelectorAll('.nav_item');


extra_btn.addEventListener('click', () => {
    nav_list.style.display = 'flex';
})

// if(extra_btn.style.display === 'block'){
//     nav_items.forEach(item => {
//         item.addEventListener('click', () => {
//             nav_list.style.display = 'none';
//         })
//     })
// }