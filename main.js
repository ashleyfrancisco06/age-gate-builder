
function monthOptions(){
	const monthArr= ["January","February","March","April","May","June","July","August","September","October","November","December"];

	//create each option
	for(let i= 0; i<monthArr.length;i++){
		//access select 
		let select = document.getElementById("selMonth");
		let option= document.createElement('option');
		option.id = "months";
		choices= select.appendChild(option);
		console.log(choices)
		choices.innerHTML=monthArr[i]
	}
}
function yearOptions(){

	//create each option
	for(let i=1970; i<=2019;i++){
		//access select 
		let select = document.getElementById("selYear");
		let option= document.createElement('option');
		option.id = "years";
		let choices= select.appendChild(option);
		console.log(choices)
		choices.innerHTML=[i];
	}
}



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
		return(validation.innerHTML="Sorry,you're not old enough.")
	}
}



