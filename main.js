let defaultVal = document.getElementById('dob').defaultValue = "1999-01";
let DOB = document.getElementById("dob").value;
console.log(defaultVal)
console.log(DOB)
let age = 2019 - DOB
console.log(age)
let form = document.querySelector('.form');
console.log(form)

function handleForm(e){
	e.preventDefault();
}

form.addEventListener('submit', handleForm);

function checkAge(){
	console.log("clicked")
	if( age >= 21){
		alert ("Welcome");

	}else{
		alert ("Error.")
	}
}



