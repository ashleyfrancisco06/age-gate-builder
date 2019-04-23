//current day
let today= new Date();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
console.log(today)
console.log(mm,yyyy)

function monthOptions(){
	const monthArr= ["January","February","March","April","May","June","July","August","September","October","November","December"];

	//create each option
	for(let i= 0; i<monthArr.length;i++){
		//access select 
		let select = document.getElementById("selMonth");
		let option= document.createElement('option');
		option.id = "months";
		choices= select.appendChild(option);
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
		choices.innerHTML=[i];
	}
}


//prevent refresh after 
let form = document.querySelector('.form');
function handleForm(e){
	e.preventDefault();
}
form.addEventListener('submit', handleForm);

//form validation
function validateForm() {
  let nameVal = document.forms["form"]["name"].value;
  let monVal = document.forms["form"]["selMonth"].value;
  let yearVal = document.forms["form"]["selYear"].value;
  // console.log(yearVal)

  if (nameVal == "" || monVal == "MM" || yearVal == "YYYY") {
    alert("You are missing one or more forms");
    return false;
	}
}

//check for age 
function checkAge(){
	//grabbing birthday
	let DOBMonth = document.getElementById('selMonth').value;
	let DOBYear = document.getElementById("selYear").value;
	
	let age = yyyy - DOBYear
	console.log(age)
	let validation=  document.getElementById('validation')

	if(age >= 21){
		
		return(validation.innerHTML = "Welcome!")
		
	}else{
		return(validation.innerHTML="Sorry,you're not old enough.")
	}
}

//Remember User
//put onclick for checkbox
//when checkbox is checked, grab user input in username field
//the push into usersArr
//if user is in array, display "Welcome back" , otherwise checkA
function saveUser(){
	//user array
	let usersArr= []
	console.log(usersArr)
	//select checkbox
	let checkbox = document.getElementById("checkbox");
	// checkbox.checked = false;
	//select username field
	let user = document.getElementById('name').value
	console.log(user)
	// if checkbox is checked, select user input field and grab value 
	if(checkbox.checked == true){
		return usersArr.push(user)
		console.log(usersArr)
	}
	console.log(checkbox.checked)
	//check array if there
}
function check() {
    document.getElementById("checkbox").checked = true;
}

function uncheck() {
    document.getElementById("checkbox").checked = false;
}







