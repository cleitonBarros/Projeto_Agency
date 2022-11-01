const btnMenu = document.querySelector('.fa-bars')
const  header = document.querySelector('header')

const lista = document.querySelectorAll('.nav-container-navbar li a')

btnMenu.addEventListener('click',(e)=>{
    header.classList.toggle('open')

})

for(const link of lista){
    link.addEventListener('click', ()=>{
        header.classList.remove('open')
    })
}