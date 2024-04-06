let blockValue = sessionStorage.getItem('block')
document.querySelector('.block').innerHTML = blockValue
let lOgo = document.querySelector('.header__body-logo')
lOgo.addEventListener('click', function(){
    window.location.href = './index.html'
    return
})




