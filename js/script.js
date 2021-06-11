//Goto Top Arrow Button

const toTop = document.querySelector('.arrow-up')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100 && mediaQuary.matches){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
});

var mediaQuary = window.matchMedia("(max-width: 979px)")


//Vanilla Tilt

$(".tilt").tilt({
    scale: 0.9
});