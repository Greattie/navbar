const btn = document.querySelector('.btn')
const sidebar = document.querySelector('.links-container')

console.log(sidebar)

btn.addEventListener('click', function(){
    sidebar.classList.toggle('show-links')
})