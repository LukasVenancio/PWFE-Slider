'use strict'

const imagens = [
    {id:  '1', url: './img/angular.png'},
    {id:  '2', url: './img/react.png'},
    {id:  '1', url: './img/svelte.jpg'},
    {id:  '1', url: './img/vue.jpg'}
]

const criarAnterior = () =>{
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo'

    return anteriorButton
}

const criarContainerItems = () =>{

    const sliderItemContainer = document.createElement('div')
    sliderItemContainer.classList.add('slider-item-container')

    const items = imagens.map(item => `
                    <div class="slider-item">
                        <img src="${item.url}" alt="">
                    </div>
    `)

    sliderItemContainer.innerHTML = items.join("")

    return sliderItemContainer
}

const criarProximo = () =>{
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo'

    return proximoButton
}

const criarSlider = () =>{
    
    const slider = document.querySelector('.slider')


    slider.appendChild(criarAnterior())
    slider.appendChild(criarContainerItems())
    slider.appendChild(criarProximo())
}

criarSlider()

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoItem = () =>{
    const primeiro = sliderItems[0]
    sliderItemContainer.appendChild(primeiro)
    sliderItems = document.querySelectorAll('.slider-item')
}


const anteriorItem = () =>{
    const ultimo = sliderItems[sliderItems.length - 1]
    sliderItemContainer.prepend(ultimo)
    sliderItems = document.querySelectorAll('.slider-item')
}
document.getElementById('anterior').addEventListener('click', anteriorItem)
document.getElementById('proximo').addEventListener('click', proximoItem)