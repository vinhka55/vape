document.addEventListener("DOMContentLoaded",function(){
    var btnSlide=document.getElementsByClassName('slide__item')
    var slides=document.getElementsByClassName('one-slide')


    //nút bấm chuyển slide
    for (var index = 0; index < btnSlide.length; index++) {
        btnSlide[index].onclick=function(){
            for (var i = 0; i < btnSlide.length; i++) {
                btnSlide[i].classList.remove('slide__item--active')
            }
            this.classList.add('slide__item--active')

            var btnActive=this
            var indexBtnActive=0
            for ( indexBtnActive = 0; btnActive = btnActive.previousElementSibling; indexBtnActive++) {                      
            }
            for (let index = 0; index < slides.length; index++) {
                slides[index].classList.remove('one-slide--active')            
            }
            slides[indexBtnActive].classList.add('one-slide--active')
        }
    }
    //xong nút bấm chuyển slide


    //auto chuyển slide
    autoSdile()
    function autoSdile(){
        setInterval(() => {
            var currentSlide=document.querySelector('.one-slide--active')
            var indexSlideActive=0
            for ( indexSlideActive = 0; currentSlide = currentSlide.previousElementSibling; indexSlideActive++) {                      
            }
            
            // console.log(indexSlideActive);
            for (let index = 0; index < slides.length; index++) {
                slides[index].classList.remove('one-slide--active')    
                btnSlide[index].classList.remove('slide__item--active')        
            }
            if(indexSlideActive==slides.length-1){
                slides[0].classList.add('one-slide--active')
                btnSlide[0].classList.add('slide__item--active')
                // indexSlideActive=0
            }else{
                slides[indexSlideActive].nextElementSibling.classList.add('one-slide--active')
                btnSlide[indexSlideActive].nextElementSibling.classList.add('slide__item--active')
            }
            
        }, 5000);
    }
})