// var newH = document.querySelectorAll('h2')
for (var h = 0; h < 6; h++){
    var newH = document.createElement('h2')
    newH.textContent = 'Hello World'
    document.body.append(newH)
    newH.classList = 'border'
    newH.style.fontSize = '20px'
    newH.style.fontweight = 'lighter'
    newH.style.fontfamily = 'sans-serif'
    newH.style.color = 'cornflowerblue'
    
}

