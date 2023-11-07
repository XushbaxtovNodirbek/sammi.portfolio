window.addEventListener('DOMContentLoaded',function (){
    this.window.addEventListener('scroll',function () {
        const header = this.document.querySelector('header')
        header.classList.toggle('sticky',this.window.scrollY >0)
    })

    const menuBtn = this.document.querySelector('.menu-btn');
    const navigation = this.document.querySelector('.navigation');
    const navigationItems = this.document.querySelectorAll('.navigation a')
    const scrollBtn = this.document.querySelector('.scrollToTop-btn');
    menuBtn.addEventListener('click',function(){
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItems.forEach(navItem =>{
        navItem.addEventListener('click',() =>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
    this.window.addEventListener('scroll',function() {
        scrollBtn.classList.toggle('active',this.window.scrollY > 500)
    })
    scrollBtn.addEventListener('click',function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }) 

    this.window.addEventListener('scroll',() => {
        let revals = this.document.querySelectorAll('.reveal')

        for(let i=0;i<revals.length;i++){
            let windowHeight = this.window.innerHeight; 
            let revalTop = revals[i].getBoundingClientRect().top;
            let revalPoint = 50;

            if(revalTop < windowHeight-revalPoint){
                revals[i].classList.add('active')
            }
        }
    })

})