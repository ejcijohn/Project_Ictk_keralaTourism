const form = document.querySelector("form");
nField = form.querySelector(".name"),
nInput = nField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
mField = form.querySelector(".mobile"),
mInput = mField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
pField1 = form.querySelector(".password1"),
pInput1 = pField1.querySelector("input");
var checkboxInputvalue;
var password1=pInput.value;
var password2=pInput1.value;
var checkname; var checkmail; var checkmobile; var checkpass; var checkpassmatch ; var checkboxInputvalue ;

function checkName(){ //checkName function

  nInputvalue = nField.querySelector("input").value;
 if(nInputvalue.length < 3){ //if pattern not matched then add error and remove valid class
   nField.classList.add("error");
   nField.classList.remove("valid");
   document.getElementById("loginbutton").disabled = true;
   document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   checkname=0;
   let errorTxt = nField.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (nInput.value != "") ? errorTxt.innerText = "Name contains atleast 3 characters" : errorTxt.innerText = "Name can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   nField.classList.remove("error");
   nField.classList.add("valid");
   checkname=1; 
  if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
     document.getElementById("loginbutton").disabled = false;
     document.getElementById('loginbutton').style.backgroundColor="#0000CD";
  }
 }
}

function checkEmail(){ //checkEmail function
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   //pattern for validate email
  if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
    eField.classList.add("error");
    eField.classList.remove("valid");
    document.getElementById("loginbutton").disabled = true;
    document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
    checkmail=0;
    let errorTxt = eField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  }else{ //if pattern matched then remove error and add valid class
    eField.classList.remove("error");
    eField.classList.add("valid");
    checkmail=1;
    if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
      document.getElementById("loginbutton").disabled = false;
      document.getElementById('loginbutton').style.backgroundColor="#0000CD";
   }
  }
}

function checkMobile(){ //checkEmail function
  let pattern = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;   //pattern for validate mobile
  if(!mInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
    mField.classList.add("error");
    mField.classList.remove("valid");
    document.getElementById("loginbutton").disabled = true;
    document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
    checkmobile=0;
    let errorTxt = mField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (mInput.value != "") ? errorTxt.innerText = "Enter a valid Indian mobile number" : errorTxt.innerText = "Mobile number can't be blank";
  }else{ //if pattern matched then remove error and add valid class
    mField.classList.remove("error");
    mField.classList.add("valid");
    checkmobile=1;
    if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
      document.getElementById("loginbutton").disabled = false;
      document.getElementById('loginbutton').style.backgroundColor="#0000CD";
   }
  }
}

function checkPassword(){ //checkEmail function
  let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;   //pattern for validate mobile
  //pInputvalue = pField.querySelector("input").value;
 if(!pInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
   pField.classList.add("error");
   pField.classList.remove("valid");
   document.getElementById("loginbutton").disabled = true;
  document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   checkpass=0;
   let errorTxt = pField.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (pInput.value != "") ? errorTxt.innerText = " Password contains atleast 8 characters [must include a Special character,Uppercase,lower case & digit]" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   pField.classList.remove("error");
   pField.classList.add("valid");
   password1=pInput.value;
   checkpass=1; 
   if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
    document.getElementById("loginbutton").disabled = false;
    document.getElementById('loginbutton').style.backgroundColor="#0000CD";
 }
 }
}
function checkPasswordmatch(){ //checkEmail function
  //let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;   //pattern for validate mobile
  password2 = pInput1.value;
 if((password1 != password2) ){ //if pattern not matched then add error and remove valid class
   pField1.classList.add("error");
   pField1.classList.remove("valid");
   document.getElementById("loginbutton").disabled = true;
   document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   checkpassmatch=0;
   let errorTxt = pField1.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (pInput1.value != "") ? errorTxt.innerText = " Password does not match" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   pField1.classList.remove("error");
   pField1.classList.add("valid");
   password1=pInput.value;
   checkpassmatch=1; 
   if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
    document.getElementById("loginbutton").disabled = false;
    document.getElementById('loginbutton').style.backgroundColor="#0000CD";
 }
 }
}

function checkboxvalue(){ //checkEmail function
  var checkvalue=document.getElementById("checkboxInputField");
  if(checkvalue.checked == true){
    checkboxInputvalue=1;
    if ( checkname==1 && checkmail == 1 && checkmobile == 1 && checkpass == 1 && checkpassmatch ==1 && checkboxInputvalue ==1   ){
      document.getElementById("loginbutton").disabled = false;
      document.getElementById('loginbutton').style.backgroundColor="#0000CD";
   }
  }else{
    checkboxInputvalue=0;
    document.getElementById("loginbutton").disabled = true;
    document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
  }
  
}
form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
   window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
