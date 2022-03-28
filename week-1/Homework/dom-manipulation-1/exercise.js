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
const pElements = document.querySelectorAll('p.primary-content')    //El unico elemento .primary-content esta en un div (53,17: <div class="primary-content col-lg-8">), por lo tanto arroja una lista vacia.

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function btnAlert() {
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
newParagraph.addEventListener('click', moreInfo)

function moreInfo () {
    document.querySelector('div#mainArticles').innerHTML = "This new text is added when you click the button..."
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let links = document.querySelector('a#largerLinksBtn')
links.addEventListener('click', chgLinks)

function chgLinks () {
    document.querySelectorAll('div.articles > a, article.article > a').style.fontSize = '3em'
}



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let addLearnMore = document.querySelector('#addArticleBtn')
addLearnMore.addEventListener('click', moreInfo)

function moreInfo () {
    document.querySelector('div#mainArticles').createElement('p')
}


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colours = ['purple', 'red', 'green', 'yellow', 'black']

let chgVColours = document.querySelector('a#bgrChangeBtn')
chgVColours.addEventListener('click', coloursForClick)

function coloursForClick () {
    
}
