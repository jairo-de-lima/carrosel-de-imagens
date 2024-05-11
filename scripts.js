let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItensOnClick('next')
btnBack.onclick = () => moveItensOnClick('back')


function moveItensOnClick(type){
    let listItem = document.querySelectorAll('.list .list-item')
    let thumbItens = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next'){
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add('next')
    } else {
        list.prepend(listItem[listItem.length -  1])
        thumb.prepend(thumbItens[listItem.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000)

}
