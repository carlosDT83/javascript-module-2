const buttonBlue = document.querySelector('#blueBtn')
buttonBlue.addEventListener('click', changeBackgroundButtonBlue)

function changeBackgroundButtonBlue() {
    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd'
    document.querySelector('.btn-primary').style.backgroundColor = '#ffa500'
    document.querySelector('.btn-secondary').style.backgroundColor = 'black'
    document.querySelector('.btn-secondary').style.color = 'white'
}

const buttonOrange = document.querySelector('#orangeBtn')
buttonOrange.addEventListener('click', changeBackgroundButtonOrange)

function changeBackgroundButtonOrange() {
    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e'
    document.querySelector('.btn-primary').style.backgroundColor = '#5751fd'
    document.querySelector('.btn-secondary').style.backgroundColor = '#31b0d5'
    document.querySelector('.btn-secondary').style.color = 'white'
}

const buttonGreen = document.querySelector('#greenBtn')
buttonGreen.addEventListener('click', changeBackgroundButtonGreen)

function changeBackgroundButtonGreen() {
    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a'
    document.querySelector('.btn-primary').style.backgroundColor = '#black'
    document.querySelector('.btn-secondary').style.backgroundColor = '#8c9c08'
}

const inputEmail = document.querySelector('#exampleInputEmail1')
const inputName = document.querySelector('#example-text-input')
const inputDescribe = document.querySelector('#exampleTextarea')
const form = document.querySelector('form')
const checkInput = (input) => input.value.length > 0 

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const validEmail = checkInput && inputEmail.value.includes('@')

    if(validEmail && checkInput(inputName) && checkInput(inputDescribe)) {
        inputEmail.value = ''
        inputName.value = ''
        inputDescribe.value = ''
        alert('Thank you for filling out the form')
    } else {
        if (!checkInput(inputEmail)) {
            inputEmail.style.backgroundColor = 'red'
        }
        if (!checkInput(inputName)) {
            inputName.style.backgroundColor = 'red'
        }
        if (!checkInput(inputDescribe)) {
            inputDescribe.style.backgroundColor = 'red'
        }
    }
})