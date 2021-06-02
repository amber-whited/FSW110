window.addEventListener('load',() => {
    document.getElementsByClassName('container')[0].style.backgroundColor = "black"
});
document.getElementsByClassName('container')[0].addEventListener('mouseover', () => {
    document.getElementsByClassName('container')[0].style.backgroundColor ="green"
})

document.getElementsByClassName('container')[0].addEventListener('mousedown', () => {
    document.getElementsByClassName('container')[0].style.backgroundColor ="yellow"
})
document.getElementsByClassName('container')[0].addEventListener('mouseup', () => {
    document.getElementsByClassName('container')[0].style.backgroundColor ="blue"
})
document.getElementsByClassName('container')[0].addEventListener('dblclick', () => {
    document.getElementsByClassName('container')[0].style.backgroundColor ="red"
})
window.addEventListener('wheel',() => {
    document.getElementsByClassName('container')[0].style.backgroundColor ="purple"
})

document.addEventListener('keypress',(event) => {
    if (event.key === 'b'){
        document.getElementsByClassName('container')[0].style.backgroundColor ="black"
    } else if (event.key === 'g'){
        document.getElementsByClassName('container')[0].style.backgroundColor ="green"
    } else if (event.key === 'y'){
        document.getElementsByClassName('container')[0].style.backgroundColor ="yellow"
    }else if (event.key === 'l') {
        document.getElementsByClassName('container')[0].style.backgroundColor ="blue"  
    }else if (event.key === 'r') {
        document.getElementsByClassName('container')[0].style.backgroundColor ="red"
    }else if (event.key === 'p') {
        document.getElementsByClassName('container')[0].style.backgroundColor ="purple"
    }
})





