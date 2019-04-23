//current day
let today= new Date();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
console.log(today)
console.log(mm,yyyy)


//prevent refresh after 
let form = document.querySelector('.form');
function handleForm(e){
	e.preventDefault();
}
form.addEventListener('submit', handleForm);


//check for age 
function checkAge(){
	//grabbing birthday
	let DOBMonth = document.getElementById('month').value
	let DOBYear = document.getElementById("year").value;
	console.log(DOBYear)
	console.log(DOBMonth)
	let age = yyyy - DOBYear
	console.log(age)
	let validation=  document.getElementById('validation')

	if( age >= 21){
		
		return(validation.innerHTML = "Welcome!")
		
	}else{
		return(validation.innerHTML="Error! You're not old enough.")
	}
}



