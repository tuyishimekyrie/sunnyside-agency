const menu  = document.querySelector('.menu')
const close = document.querySelector('.close')
const ul = document.getElementById('nav')
menu.addEventListener('click', ()=> {
    ul.classList.add('active')
    console.log('clicked')
    remove()
})

function remove() {
    close.addEventListener('click',()=> {
        ul.classList.remove('active')
    })
}