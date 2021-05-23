//A navbar
var newN = document.createElement('nav')
document.body.prepend(" page ")
document.body.prepend(" this")
document.body.prepend("about")
//A h1 tag
var newH = document.createElement('h1')
newH.textContent = 'This is a header'
document.body.append(newH)
//A p tag
var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript'
document.body.appendChild(newP)
//A list
var newListItem = document.createElement('li')
newListItem.textContent = "Do Assignments"
document.body.append(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = "Remember to start weekly Learn It"
document.body.append(newListItem)
var newListItem = document.createElement('li')
newListItem.textContent = "Turn in assignments on time"
document.body.append(newListItem)
//A footer
var newFooter = document.createElement('f')
newFooter.textContent = "This is my footer"
document.body.append(newFooter)

