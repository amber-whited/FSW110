//A h1 tag
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)
var newH = document.createElement('h1')
newH.textContent = 'Hello World'
document.body.append(newH)

var newF = document.querySelectorAll('h1')
for (var h = 0; h < newF.length; h++){
    newF[h].style.color = 'purple'
    newF[h].style.backgroundColor = 'pink'
    newF[h].style.border = 'dotted black'
}

var newA =  ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];
var names = document.getElementById('array')

for (var a = 0; a < newA.length; a++){
    names.innerHTML += '<li>' + newA[a]+ '</li>'
}