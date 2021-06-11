document.forms.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(document.forms) 
    var fname = document.forms.fname.value
    var lname = document.forms.lname.value
    var country = document.forms.country.value
    alert(fname + " " + lname + " " + country)
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
})

