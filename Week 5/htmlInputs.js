document.forms.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(document.forms) 
    var fname = document.forms.fname.value
    var lname = document.forms.lname.value
    var age = document.forms.age.value
    var decision = document.forms.decision.value
    var dropdown = document.forms.dropdown.value
    var diet = []
    if (document.forms.Keto.checked){
       
        diet.push(document.forms.Keto.value)
    }
    if (document.forms.Kosher.checked){
        diet.push(document.forms.Kosher.value)
    }
    if (document.forms.Vegetarian.checked){
        diet.push(document.forms.Vegetarian.value)
    }
    if (document.forms.GlutenFree.checked){
        diet.push(document.forms.GlutenFree.value)
    }
    alert(fname + " " + lname + " " + age + " " + decision + " " + dropdown + " " + diet)
    
    
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
   
})



