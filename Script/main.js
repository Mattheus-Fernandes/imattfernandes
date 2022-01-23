const habilidade = document.querySelector('[data-skills]')
const allSkills = document.querySelector('[data-all-skills]')
const li = document.querySelectorAll('[data-skill]')

const menuHamburguer = document.querySelector('[data-menu-hamburguer]')
const menuMobile = document.querySelector('[data-menu-mobile]')
const btnClose = document.querySelector('[data-btn-close]')



habilidade.addEventListener('click', () => {
        allSkills.classList.toggle('mostrar')
        allSkills.classList.toggle('all-skills')
        habilidade.classList.toggle('animation-skill')

        li.forEach((item) => {
            item.classList.toggle('animation-li')
        })

})

menuHamburguer.addEventListener('click', () => {
   menuMobile.classList.add('show')

   btnClose.addEventListener('click', () => {
       menuMobile.classList.remove('show')
   })
})
