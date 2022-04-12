const buttonBlue = document.querySelector('#blueBtn')
buttonBlue.addEventListener('click', changeBackgroundButtonBlue)

function changeBackgroundButtonBlue() {
    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd'
    document.querySelector('.btn-primary').style.backgroundColor = '#ffa500'
    document.querySelector('.btn-secondary').style.backgroundColor = 'black'
    document.querySelector('.btn-secondary').style.color = 'white'
}

const buttonOrange = document.querySelector('#orangeBtn')
buttonBlue.addEventListener('click', changeBackgroundButtonOrange)

function changeBackgroundButtonOrange() {
    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e'
    document.querySelector('.btn-primary').style.backgroundColor = '#5751fd'
    document.querySelector('.btn-secondary').style.backgroundColor = '#31b0d5'
    document.querySelector('.btn-secondary').style.color = 'white'
}

const buttonGreen = document.querySelector('#greenBtn')
buttonBlue.addEventListener('click', changeBackgroundButtonGreen)

function changeBackgroundButtonGreen() {
    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a'
    document.querySelector('.btn-primary').style.backgroundColor = '#black'
    document.querySelector('.btn-secondary').style.backgroundColor = '#8c9c08'
}