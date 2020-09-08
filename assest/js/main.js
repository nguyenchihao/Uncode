
const header = {
    init :function () {
        this.btnActive()
        this.scrollHeader()
    },  
    btnActive : function () {
        const btnMenu = document.querySelector('.header__menu-button')
        const navbarMenu = document.querySelector('.navbar__menu')
        btnMenu.addEventListener('click' , () =>{
            navbarMenu.classList.toggle('navbar__menu--active')
            btnMenu.classList.toggle('btn--active')
        })
    },
    scrollHeader :function() {
        const header = document.querySelector('.header')
        const btnMenu = document.querySelector('.header__menu-button')
        const navbarMenu = document.querySelector('.navbar__menu')
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >100){
                header.classList.add('header--active')
                btnMenu.classList.add('btn--active')
            }
            else{
                navbarMenu.classList.remove('navbar__menu--active')
                btnMenu.classList.remove('btn--active')
                header.classList.remove('header--active')
            }
        })
    }
}

const banner ={
    init: function(){
        this.scrollImageBanner()
    },
    scrollImageBanner() {
        const bannerImg =document.querySelector('.banner__img')
        window.addEventListener('scroll', () =>{
            bannerImg.style.transform =`translate3d(0,${window.scrollY / 2.6}px,0)`
        })
    }
}
const modal ={
    init: function() {
        this.openModal()
        this.closeModal()
    },
    openModal : function(){
        const btnModal = document.querySelector('.work__content-button')
        const modal =document.querySelector('.modal')
        const body = document.getElementsByTagName('body')
        btnModal.addEventListener('click', () =>{
            modal.style.display = 'block'
            body[0].classList.add('body')
        })
    },
    closeModal : function () {
        const modal =document.querySelector('.modal')
        const body = document.getElementsByTagName('body')
        const btnClose = document.querySelector('.modal-button')
        btnClose.addEventListener('click' , () =>{
            body[0].classList.remove('body')
            modal.style.display='none'
        })
    }
}
const btnScroll ={
    init :function (){
        this.btnScrollActive()
        this.btnScrollStatus()
    },
    btnScrollActive: function(){
        const btnScroll = document.querySelector('.btn-scroll')
        btnScroll.addEventListener('click', () =>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        })
    },
    btnScrollStatus: function() {
        const btnScroll = document.querySelector('.btn-scroll')
        window.addEventListener('scroll' , () => {
            if(window.scrollY <400){
                btnScroll.style.display ='none'
            }
            else{
                btnScroll.style.display ='flex'
            }
        })
    }
}
const validateForm ={
    init : function(){
            this.btnSubmit()
    },
    validateForm (){
        const input = document.querySelectorAll('.form__input')
        const errs = document.querySelectorAll('.form__err')
        input.forEach((element, index) =>{
            if(!element.value.length){
                errs[index].style.display='block'
            }
            else{
                errs[index].style.display ='none'
            }
        })
    },
    btnSubmit :function() {
        const btnSubmit = document.querySelector('.form__input--button')
        btnSubmit.addEventListener('click' , () =>{
            this.validateForm()
        })
    }
    
}
header.init()
banner.init()
modal.init()
btnScroll.init()
validateForm.init()