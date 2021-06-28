'use strict'
// Acordeon 

const bloqueacordeon = document.querySelectorAll('.bloqueacordeon')
const tituloacordeon = document.querySelectorAll('.tituloacordeon')

tituloacordeon.forEach( (cadatitulo, i)=>{
    tituloacordeon[i].addEventListener('click', ()=>{
       
        bloqueacordeon.forEach( ( cadabloque, i )=>{
            bloqueacordeon[i].classList.remove('activo')
        })
        bloqueacordeon[i].classList.add('activo')

    })
})