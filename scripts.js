//Array for holding all the UserNames
let userArray=JSON.parse(localStorage.getItem("userArray")) || [];


//Error message for invalid fields
const setError = (element, message) => {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerHTML = message;
  errorDisplay.style.color = "red";
}

//Success message for valid fields
const setSuccess = element => {
  const inputControl = element.parentElement.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = 'Valid';
  errorDisplay.style.color = "green";
};

//Name validation
function validateName(name){
  let name1=name.value;
  let pattern=/^[a-zA-Z\s]{2,}$/; //Pattern for a valid name
  let res=pattern.test(name1);

  if(res && name1.length>0){
    setSuccess(name);
    name.classList.add("valid");
    name.classList.remove("not-valid");
    return true;
  }
  else{
    setError(name,"Not Valid Name");
    name.classList.add("not-valid");
    name.classList.remove("valid");
  }
  return false;
}

//Email Validation
function validateEmail(email){
  let email1=email.value;
  let pattern=/^[a-zA-Z][a-zA-Z\d\.]+[@][a-zA-Z\.]+[a-z]$/; //Pattern for a valid email
  let res=pattern.test(email1);
  if(res){
    setSuccess(email);
    email.classList.add("valid");
    email.classList.remove("not-valid");
    return true;
  }
  else{
    setError(email,"Not valid email");
    email.classList.add("not-valid");
    email.classList.remove("valid");
  }
  return false;
}

//Contact No. validation
function validateContactNo(cno){
  let cno1=cno.value;
  let pattern=/^[9876]\d{9}$/; // Pattern for a valid contact no.
  let res=pattern.test(cno1);

  if(res){
    setSuccess(cno);
    cno.classList.add("valid");
    cno.classList.remove("not-valid");
    return true;
  }
  else{
    setError(cno,"Not valid number");
    cno.classList.add("not-valid");
    cno.classList.remove("valid");
  }
  return false;
}

//Date Validation
function validateDate(date){
  let date1=date.value;
  let year= new Date(date1).getFullYear();
  if(year>=1950 && year<=2010){ //Users should have DOB between 1950 and 2010
    setSuccess(date);
    date.classList.add("valid");
    date.classList.remove("not-valid");
    return true;
  }
  else{
    setError(date,"Not valid date");
    date.classList.add("not-valid");
    date.classList.remove("valid");
  }
  return false;
}

//Gender validation
function validateGender(gender){
  let gender1=gender.value;
  if(gender1 != "NA"){ // Gender field should not be empty
    setSuccess(gender);
    gender.classList.add("valid");
    gender.classList.remove("not-valid");
    return true;
  }
  else{
    setError(gender,"Please choose a Gender");
    gender.classList.add("not-valid");
    gender.classList.remove("valid");
  }
  return false;
}

//Education Validation
function validateEducation(education){
  let education1=education.value;
  if(education1 != "NA"){ //Education field should not be empty
    setSuccess(education);
    education.classList.add("valid");
    education.classList.remove("not-valid");
    return true;
  }
  else{
    setError(education,"Please choose Education");
    education.classList.add("not-valid");
    education.classList.remove("valid");
  }
  return false;
}

//Occupation Validation
function validateOccupation(occupation){
  let occupation1=occupation.value;
  if(occupation1){ // Occupation is optional 
    setSuccess(occupation);
    occupation.classList.add("valid");
    occupation.classList.remove("not-valid");
    return true;
  }
  else{
    occupation.classList.remove("valid");
  }
  return false;
}

//Username validation
function validateUsername(userName){
  let userName1=userName.value;
  let flag=true;
  for(let i=0;i<userArray.length;i++){
    if(userArray[i].userNameValue == userName1){
      flag=false;
      break;
    }
  }
  if(flag && userName1.length>3){
    setSuccess(userName);
    userName.classList.add("valid");
    userName.classList.remove("not-valid");
    return true;
  }
  else if(userName1.length<4){
    setError(userName,"User Name should be more than 3 characters");
    userName.classList.add("not-valid");
    userName.classList.remove("valid");
  }
  else{
    setError(userName,"User Name already taken");
    userName.classList.add("not-valid");
    userName.classList.remove("valid");
  }
  return false;
}

//Password Validation
function validatePassword(password){
  let password1=password.value;
  
  //Pattern for valid password
  if(password1.match("[a-z]") && password1.match("[A-Z]") && password1.match("[0-9]") && password1.match("[!@#$%^&*]") && password1.length >=8 && password1.length <=15){
    setSuccess(password);
    password.classList.add("valid");
    password.classList.remove("not-valid");
    return true;
  }
  else{
    setError(password,"Password should be 8-15 characters<br> with atleast 1 special character , 1 <br>digit ,uppercase and lowercase letters");
    password.classList.add("not-valid");
    password.classList.remove("valid"); 
    return false;
  }
}

//Confirm Password Validation
function validateConfirmPassword(confirmPassword){
  let password=document.getElementById("password");
  
  //Both password and confirm password should be same
  if(password.value == confirmPassword.value && confirmPassword.value.match("[a-z]") && confirmPassword.value.match("[A-Z]") && confirmPassword.value.match("[0-9]") && confirmPassword.value.match("[!@#$%^&*]") && confirmPassword.value.length >=8 && confirmPassword.value.length <=15){
    setSuccess(confirmPassword);
    confirmPassword.classList.add("valid");
    confirmPassword.classList.remove("not-valid");
    return true;
  }
  else if(password.value == confirmPassword.value){
    setError(confirmPassword,"Password should be 8-15 characters<br> with atleast 1 special character , 1 <br>digit ,uppercase and lowercase letters");
    confirmPassword.classList.add("not-valid");
    confirmPassword.classList.remove("valid"); 
    return false;
  }
  else{
    setError(confirmPassword,"Passwords don't match");
    confirmPassword.classList.add("not-valid");
    confirmPassword.classList.remove("valid"); 
    return false;
  }

}

//Eye-Button for Passwords
function showPassword(password){
  let parent=password.parentElement;
  let passwordElement=parent.querySelector(".password");
  if(passwordElement.type=="text"){
    passwordElement.type="password";
    password.innerHTML='<i class="bi bi-eye-slash"></i>';
  }
  else{
    passwordElement.type="text";
    password.innerHTML='<i class="bi bi-eye"></i>';
  }
}

//PAN Validation
function validatePAN(pan){
  let pan1=pan.value;
  let pattern=/^[A-Z]{5}[0-9]{4}[A-Z]$/; // Pattern for valid PAN
  if(pattern.test(pan1)){
    setSuccess(pan);
    pan.classList.add("valid");
    pan.classList.remove("not-valid");
    return true;
  }
  else{
    setError(pan,"Enter Valid PAN");
    pan.classList.add("not-valid");
    pan.classList.remove("valid");
  }
  return false;
}

//Image Validation
function validateImage(image) {
  let input = document.getElementById('profile-picture');

  if (input.files.length > 0) {
    let selectedFile= input.files[0];
    let allowedExtensions=['.png','.jpg']; // Valid Extensions ( .png or .jpg )
    let maxSizeInBytes = 2 * 1024 * 1024; // Valid size ( <2MB )
    let fileName = selectedFile.name.toLowerCase();
    let fileExtension= fileName.substring(fileName.lastIndexOf('.'));
    let fileSize= selectedFile.size;

    if (allowedExtensions.includes(fileExtension) && fileSize < maxSizeInBytes) {
      image.classList.add("valid");
      image.classList.remove("not-valid");
      image.style.border="1px solid green";
      setSuccess(image);
      return true;
    }
    else {
      image.classList.add("not-valid");
      image.classList.remove("valid");
      image.style.border="1px solid red";
      setError(image,'Image must be in .jpg or .png and less than 2MB.');
      input.value = ''; // Clear the input to prevent submitting an oversized image
    }
  }
  else{
    image.classList.add("not-valid");
    image.classList.remove("valid");
    image.style.border="1px solid red";
    setError(image,'Please choose an image for Profile Picture');
  }
  return false;
}


//Submission of form and writing into local storage
function saveToLocalStorage(){

  //Getting all elements
  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let contactNo=document.getElementById("contactNo");
  let dob=document.getElementById("dob");
  let userName=document.getElementById("username");
  let gender=document.getElementById("gender");
  let education =document.getElementById("education");
  let occupation=document.getElementById("occupation");
  let password=document.getElementById("password");
  let confirmPassword=document.getElementById("confirm-password");
  let pan=document.getElementById("pan");
  let photo=document.getElementById("profile-picture");
  let photoSize=photo.files[0].size;
  if(validateName(name) && validateEmail(email) && validateContactNo(contactNo) && validateDate(dob) && validateUsername(userName) && validateEducation(education) && validateGender(gender) && validatePassword(password) && validateConfirmPassword(confirmPassword) && validatePAN(pan) && validateImage(photo)){
    
    //Getting all values
    let selectedPhoto=photo.files[0];
    let reader=new FileReader();
    let nameValue = name.value;
    let contactNoValue = contactNo.value;
    let emailValue = email.value;
    let dobValue = dob.value;
    let genderValue = gender.value;
    let educationValue = education.value;
    let occupationValue = occupation.value || "NA";
    let userNameValue = userName.value;
    let passwordValue = password.value;
    let panValue = pan.value;
    reader.onload= function (e){
      let base64Image =e.target.result;
      let user={
        nameValue ,
        emailValue ,
        contactNoValue ,
        dobValue ,
        genderValue ,
        educationValue ,
        occupationValue ,
        userNameValue ,
        passwordValue ,
        panValue ,
        photoSize : photoSize,
        photo : base64Image
      };
      //Loading into local storage
      userArray.push(user);
      localStorage.setItem("userArray",JSON.stringify(userArray));
    }
    reader.readAsDataURL(selectedPhoto);
    
    let successMessage=document.getElementById("success-message");
    successMessage.innerHTML="User Signed Up Successfully !";

    //Make all the fields default after submission
    name.value="";name.classList.remove("valid");
    email.value="";email.classList.remove("valid");
    contactNo.value="";contactNo.classList.remove("valid");
    dob.value="";dob.classList.remove("valid");
    gender.value="";gender.classList.remove("valid");
    education.value="";education.classList.remove("valid");
    occupation.value="";occupation.classList.remove("valid");
    userName.value="";userName.classList.remove("valid");
    password.value="";password.classList.remove("valid");
    confirmPassword.value="";confirmPassword.classList.remove("valid");
    pan.value="";pan.classList.remove("valid");
    photo.value="";photo.classList.remove("valid");
  }
  else{
    let successMessage=document.getElementById("success-message");
    successMessage.innerHTML="Fill out all the fields !";
  }
}

//Make all the fields empty when reloaded
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('input,select').forEach(function(input){
    input.value='';
  });
});

//Create a div for valid users
function createDiv(user){
  let html=`
  <div class="container text-center" style="margin-top:2em" id="users-display">
    <div class="row">
      <div class="col-8">`;
  html+=('Name : '+user["nameValue"]+'<br>');
  html+=('Email : '+user["emailValue"]+'<br>');
  html+=('Contact No. : '+user["contactNoValue"]+'<br>');
  html+=('DOB : '+user["dobValue"]+'<br>');
  html+=('Gender : '+user["genderValue"]+'<br>');
  html+=('Education : '+user["educationValue"]+'<br>');
  html+=('Occupation : '+user["occupationValue"]+'<br>');
  html+=('Username : '+user["userNameValue"]+'<br>');
  html+=('Password : '+user["passwordValue"]+'<br>');
  html+=('PAN : '+user["panValue"]+'<br>');
  html+='</div><div class="col-4">';
  html+='<img width=200px height=200px class="profile-image" src="' +user["photo"]+'"</div></div></div></div>;';
  console.log(html);
  document.getElementById("users-display").innerHTML+=html;
}

//Finding the users who are valid
function findUsers(){
  let search=document.getElementById("search");
  let userDisplay=document.getElementById("users-display");
  userDisplay.innerHTML='';
  let value=search.value;
  if(!value || value==""){
    return ;
  }
  else if(!value.match("[^a-zA-Z]")){ // Search with name
    for(let i=0;i<userArray.length;i++){
      let user=userArray[i];
      console.log("hi1");
      if(user && user["nameValue"].toLowerCase().startsWith(value)){
        console.log("hi2");
        createDiv(user);
      }
    }
  }
  else if(!value.match("[^0-9]")){ // Search with age
    for(let i=0;i<userArray.length;i++){
      let user=userArray[i];
      if(user){
        let inputDate=new Date(user.dobValue);
        let currentDate=new Date();
        let diffInMilliSecs=Math.abs(currentDate-inputDate);
        let diffInDays=Math.floor(diffInMilliSecs/(1000 * 60 * 60 * 24));
        if(diffInDays <= Number(value)){
          createDiv(user);
        }
      }
    }
  }
  else{ // Search with photo size
    let size=Number(value.substring(0,value.length-2));
    if(value.toLowerCase().endsWith("mb")){
      size = size * 1024 * 1024;
    }
    else if(value.toLowerCase().endsWith("kb")){
      size = size * 1024;
    }
    for(let i=0;i<userArray.length;i++){
      let user=userArray[i];
      if(user){
        let originalSize=user.photoSize;
        if(originalSize<=size){
          createDiv(user);
        }
      }
    }
  }
  if(userDisplay.innerHTML==''){ // If no users are found
    userDisplay.innerHTML='<h2>No Results Found !<h2>';
  }
}