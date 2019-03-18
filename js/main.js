function author(){
    document.querySelector('.author').setAttribute('style' , 'opacity : 1 ; height : 100vh ; transition : 1s');
}
function hideAuthor(){
    document.querySelector('.author').setAttribute('style' , 'opacity : 0 ; height : 0vh ; transition : 0.5s');
}

let menu = document.querySelector('.menu');
menu.addEventListener('click' , function(){
    document.querySelector('.products').setAttribute('style' , 'width : 100%  ; transition : 1s ; opacity : 1')
})

let close_menu = document.querySelector('#close_menu');
close_menu.addEventListener('click' , function(){
    document.querySelector('.extra').style.display ='block'
    let content = document.querySelector('.content');
    content.style.opacity = '0'
    document.querySelector('.products').setAttribute('style' , 'width : 0%  ; transition : 1s ; opacity : 0')
})


function tilapia(){
    document.querySelector('.extra').style.display ='none'
    let content = document.querySelector('.content');
    content.style.opacity = '1'
    content.innerHTML = document.querySelector('.tilapia').innerHTML
    
}

function hipon(){
    document.querySelector('.extra').style.display ='none'
    let content = document.querySelector('.content');
    content.style.opacity = '1'
    content.innerHTML = document.querySelector('.hipon').innerHTML
}
function alimango(){
    document.querySelector('.extra').style.display ='none'
    let content = document.querySelector('.content');
    content.style.opacity = '1'
    content.innerHTML = document.querySelector('.alimango').innerHTML
}
function bangus(){
    document.querySelector('.extra').style.display ='none'
    let content = document.querySelector('.content');
    content.style.opacity = '1'
    content.innerHTML = document.querySelector('.bangus').innerHTML
}
function lobster(){
    document.querySelector('.extra').style.display ='none'
    let content = document.querySelector('.content');
    content.style.opacity = '1'
    content.innerHTML = document.querySelector('.lobster').innerHTML
}