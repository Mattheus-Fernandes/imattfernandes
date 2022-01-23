const header = document.querySelector('[data-header]')
const ancoraHeader = document.querySelectorAll('[data-section]')

const scrollLeftAnime = document.querySelectorAll('[data-scroll-left]')
const scrollRightAnime = document.querySelectorAll('[data-scroll-right]')



window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3)

    scrollLeftAnime.forEach((item)=> {
        if(windowTop > item.offsetTop) {
            item.classList.add('animeScrollLeft')
        }else {
            item.classList.remove('animeScrollLeft')
        }
    })

    scrollRightAnime.forEach((item) => {
        if(windowTop > item.offsetTop) {
            item.classList.add('animeScrollRight')
        }else {
            item.classList.remove('animeScrollRight')
        }
    })
    
})

