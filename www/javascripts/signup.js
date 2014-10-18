steroids.view.setBackgroundColor("#ecf0f1");
function signup(){
var firstName=document.getElementById("firstName").value;
var lastName=document.getElementById("lastName").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var cpassword=document.getElementById("cpassword").value;
if(firstName === null ||firstName === ''){
navigator.notification.alert("Please enter your first name",null,"First Name Required", "Got it!");
}
else if(lastName=== null ||lastName===''){
navigator.notification.alert("Please enter your last name", null,"Last Name Required", "Got it!");
}
else if(email=== null ||email===''){
navigator.notification.alert("Please enter your email address", null,"Email Required", "Got it!");
}
else if(email.substring(email.length-8,email.length)!=="@osu.edu"){
navigator.notification.alert("Enter @osu.edu email", null,"OSU email Required", "Got it!");
}
else if(password=== null ||password==='' || password.length!==8){
navigator.notification.alert("Please chose a password which is at least 8 characters long", null,"Invalid Password", "Got it!");
}
else if(password!==cpassword){
navigator.notification.alert("Password and Confirm password fields do not match",null,"Invalid password confirm","Got it!");
}
else{

}
  }