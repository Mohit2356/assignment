// 1. Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".

let a = document.getElementById('head1')
a.innerText = 'Welcome to javascript'

// 2. Select all elements with class "card" and change the background color of the third one to "lightgray".

let cards = document.getElementsByClassName('card')
cards[2].style.backgroundColor = 'lightgray'

// 3. Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.

let firstH2 = document.querySelector("h2")
 firstH2.style.fontStyle = "italic"

 // 4. Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.

 let infos = document.getElementById('info')
 infos.innerHTML = '<a href="#"><u>Click here</u></a>'

// 5. Write a function that sets the font size of an element with ID "heading" to 40px when called.

let fs = document.getElementById('para1')

fs. addEventListener('mouseover',function(){
    fs.style.fontSize = '40px'
})
fs. addEventListener('mouseleave',function(){
    fs.style.fontSize = '20px'
})

// 6. Add an event listener to a button with ID "hoverBtn" that changes the background of a <div> with ID "box" to "orange" when hovered.

let button = document.getElementById("hoverBtn")
let box = document.getElementById("box")

button.addEventListener("mouseover", function () {
box.style.backgroundColor = "orange";
})
button.addEventListener("mouseout", function () {
box.style.backgroundColor = "lightblue";
})

// 7. On clicking a button with ID "hideBtn", hide a paragraph with ID "description" using style.display.

let hb =  document.getElementById("hideBtn")
let hd = document.getElementById("description")
let sb = document.getElementById("showBtn")

hb.addEventListener('click',function(){
    hd.style.display = 'none'
})

// 8. On clicking another button with ID "showBtn", show the hidden paragraph again.

sb.addEventListener('click',function(){
    hd.style.display = 'block'
})

// 9. Select all <li> elements using getElementsByTagName and change the text of the last item to "Done".

let items = document.getElementsByTagName("li")
items[2].innerText = 'Done'

// 10. Using querySelectorAll, select all elements with class "highlight" and set their text color to "purple".

let elements = document.querySelector('.highlight')
elements.style.color = 'purple'
