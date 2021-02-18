document.getElementById("signup_button").onclick=signup;

function signup() {
  username_in=document.getElementById("username2").value;
  password_in1=document.getElementById("pass1").value;
  var localStorage=window.localStorage;
  if (!localStorage) {

  } else {
    numUsers=localStorage.numUsers;
    if (numUsers==undefined) numUsers="0";
    localStorage["user"+numUsers]=username_in;
    localStorage["pass"+numUsers]=password_in1;
    localStorage.numUsers=parseInd(numUsers)+1;
    alert("Signup succeeded!\n"+"Number of users: "+localStorage.numUsers);
  }
}
