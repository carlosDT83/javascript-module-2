/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {

  let h1 = document.createElement("h1")
  h1.innerText = person.name
  content.appendChild(h1)

  let h2 = document.createElement("h2")
  h2.innerText = person.job
  content.appendChild(h2)
  }
  )}

console.log(content);

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content1 = document.querySelector("#content")
  let ul = document.createElement("ul")
  
  content1.appendChild(ul)
  for(i = 0; i < shopping.length; i++) {
    
    let li = document.createElement("li");
    ul.appendChild(li) 
    li.innerText = [i]
  }
  
  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let paragraph = document.querySelector("#content")
  let ul = document.createElement("ul")
  paragraph.appendChild(ul)
  books.forEach((book) => {
    
    let li = document.createElement("li")
    let p = document.createElement("p")
    let br = document.createElement("br")
    //let texto = document.innerHTML()

    ul.appendChild(li)
    li.appendChild(p)

    p.innerHTML = "<ul><li>"+book.title+"</li><li>"+book.author+"</li><li>"+book.alreadyRead+"</li></ul>"
    
    function already () {
      
      if (book.alreadyRead == true) {
        document.p.style.backgroundColor = green
      } else {
        document.p.style.backgroundColor = red
      }
    }
  })
  //Write your code in here
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
