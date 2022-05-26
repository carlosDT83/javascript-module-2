/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const listOfNodes = document.querySelectorAll('p')
const firstDiv = document.querySelector('div')
const idJumbo = document.querySelector('#jumbotron-text')
const pElements = document.querySelectorAll('.primary-content p')    

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function btnAlert() {
    document.querySelector('#alertBtn')
        alert("Thanks for visiting Bikes for Refugees");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBkgColor = document.querySelector('a#bgrChangeBtn')
changeBkgColor.addEventListener('click', chBkgColor)

function chBkgColor() {
    document.body.style.backgroundColor = 'skyblue'
}
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let newParagraph = document.querySelector('a#addTextBtn')
newParagraph.addEventListener('click', () => {
    addText = document.createElement('p')
    addText.innerText = 'This new text is added when you click the button...'
    document.querySelector('div#mainArticles').appendChild(addText)
})

/*function moreInfo () {
    const newText = document.querySelector('div#mainArticles')
    newText.createElement('p')
    newText.innerHTML = "This new text is added when you click the button..."
    newParagraph.appendChild(newText)
}*/


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let links = document.querySelector('a#largerLinksBtn')
links.addEventListener('click', () => {
    const changeLinks = Array.from(document.querySelectorAll('a'))
    changeLinks.forEach(function (element) {
        element.style.fontSize = "larger"
    })
})

/*function chgLinks () {
    document.querySelectorAll('div.articles > a, article.article > a').style.fontSize = '3em'
}*/



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let addLearnMore = document.querySelector('#addArticleBtn')
addLearnMore.addEventListener('click', () => {
    const newParagraph = document.querySelector('div#mainArticles')
    const textNewParagraph = document.createElement('p')
    const addNewParagraph = document.querySelector('.form-control')
    textNewParagraph.innerText = addNewParagraph.value 
    newParagraph.appendChild(textNewParagraph)
    addNewParagraph.value = ''
})


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colours = ['purple', 'red', 'green', 'yellow', 'black']
const body = document.querySelector('body')

changeBkgColor.addEventListener('click', () => {
    for(i = 0; i < colours.length; i++) {
        body.style.backgroundColor = colours[i]
    }
})
