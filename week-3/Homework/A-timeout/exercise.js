/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
const chBkgColor = setTimeout(myChangeBkg, 5000)
function myChangeBkg() {
    const randomColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = randomColor
}

const loopChBkgColor = setInterval(myChangeBkg, 5000)
function myChangeBkg() {
    const randomColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = randomColor
}



const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum)
}

const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
}