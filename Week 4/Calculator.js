var add = document.getElementById('btn1')
add.addEventListener('click', handleButtonClick1)

function handleButtonClick1(event) {
    var num1 = Number(document.getElementById('add1').value)
    var num2 = Number(document.getElementById('add2').value)
    var result = document.getElementsByClassName('solution')[0]
    result.textContent = num1 + num2
    console.log(num1,num2,result)
}


var sub = document.getElementById('btn2')
sub.addEventListener('click', handleButtonClick2)

function handleButtonClick2(event) {
    var num1 = Number(document.getElementById('sub1').value)
    var num2 = Number(document.getElementById('sub2').value)
    var result = document.getElementsByClassName('solution')[1]
    result.textContent = num1 - num2
    console.log(num1,num2,result)
}



var mul = document.getElementById('btn3')
mul.addEventListener('click', handleButtonClick3)

function handleButtonClick3(event) {
    var num1 = Number(document.getElementById('mul1').value)
    var num2 = Number(document.getElementById('mul2').value)
    var result = document.getElementsByClassName('solution')[2]
    result.textContent = num1 * num2
    console.log(num1,num2,result)
}


