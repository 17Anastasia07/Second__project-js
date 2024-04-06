let headerSearch = document.querySelector('.header__body-nav_search')

let headerButton = document.querySelector('.header__body-nav_button')

let blockOne = document.getElementById('blockOne').outerHTML
let blockTwo = document.getElementById('blockTwo').outerHTML
let blockThree = document.getElementById('blockThree').outerHTML

let codeSandBox = ['CodeSandbox', 'together']
let iOS = 'ios'
let image = 'image'

let search = [codeSandBox[1] , iOS , image ]

headerButton.addEventListener('click', function(){
    let searchInput = headerSearch.value
    for(let i = 0; i < search.length; i++){
        if(searchInput === search[i]){
            switch(search[i]){
                case codeSandBox:
                    sessionStorage.setItem('block' , blockOne)
                    break
    
                case iOS:
                    sessionStorage.setItem('block' , blockTwo)
                    break
                
                case image:
                    sessionStorage.setItem('block' , blockThree)
                    break
            }
            window.location.href = './index-2.html'
            return
        }
    }
    alert('we don`t have this word')
})

/* document.addEventListener('keydown', function(){
    if(event.key === 'Enter'){
        switch('Enter'){
            case codeSandBox:
                sessionStorage.setItem('block' , blockOne)
                break

            case iOS:
                sessionStorage.setItem('block' , blockTwo)
                break
            
            case image:
                sessionStorage.setItem('block' , blockThree)
                break
        }
        window.location.href = './index-2.html'
        return
    }
}) */



