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

function checkName(){ //checkName function

  nInputvalue = nField.querySelector("input").value;
 if(nInputvalue.length < 3){ //if pattern not matched then add error and remove valid class
   nField.classList.add("error");
   nField.classList.remove("valid");
   //document.getElementById("loginbutton").disabled = true;
   //document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   //checkpass=0;
   let errorTxt = nField.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (nInput.value != "") ? errorTxt.innerText = "Name contains atleast 3 characters" : errorTxt.innerText = "Name can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   nField.classList.remove("error");
   nField.classList.add("valid");
   //checkpass=1; 
  // if (checkmail == 1 && checkpass == 1 ){
    // document.getElementById("loginbutton").disabled = false;
    //document.getElementById('loginbutton').style.backgroundColor="#0000CD";
  // }
 }
}

function checkEmail(){ //checkEmail function
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   //pattern for validate email
  if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
    eField.classList.add("error");
    eField.classList.remove("valid");
   // document.getElementById("loginbutton").disabled = true;
   // document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   // checkmail=0;
    let errorTxt = eField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  }else{ //if pattern matched then remove error and add valid class
    eField.classList.remove("error");
    eField.classList.add("valid");
   // checkmail=1;
    //if (checkmail == 1 && checkpass == 1 ){
     // document.getElementById("loginbutton").disabled = false;
     // document.getElementById('loginbutton').style.backgroundColor="#0000CD";
   // }
  }
}

function checkMobile(){ //checkEmail function
  let pattern = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;   //pattern for validate mobile
  if(!mInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
    mField.classList.add("error");
    mField.classList.remove("valid");
   // document.getElementById("loginbutton").disabled = true;
   // document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   // checkmail=0;
    let errorTxt = mField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (mInput.value != "") ? errorTxt.innerText = "Enter a valid Indian mobile number" : errorTxt.innerText = "Mobile number can't be blank";
  }else{ //if pattern matched then remove error and add valid class
    mField.classList.remove("error");
    mField.classList.add("valid");
   // checkmail=1;
    //if (checkmail == 1 && checkpass == 1 ){
     // document.getElementById("loginbutton").disabled = false;
     // document.getElementById('loginbutton').style.backgroundColor="#0000CD";
   // }
  }
}

function checkPassword(){ //checkEmail function
  let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;   //pattern for validate mobile
  //pInputvalue = pField.querySelector("input").value;
 if(!pInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
   pField.classList.add("error");
   pField.classList.remove("valid");
   //document.getElementById("loginbutton").disabled = true;
  // document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   //checkpass=0;
   let errorTxt = pField.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (pInput.value != "") ? errorTxt.innerText = " Password contains atleast 8 characters [must include a Special character,Uppercase,lower case & digit]" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   pField.classList.remove("error");
   pField.classList.add("valid");
   password1=pInput.value;
   //checkpass=1; 
   //if (checkmail == 1 && checkpass == 1 ){
     //document.getElementById("loginbutton").disabled = false;
     //document.getElementById('loginbutton').style.backgroundColor="#0000CD";
  // }
 }
}


function checkPasswordmatch(){ //checkEmail function
  //let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;   //pattern for validate mobile
  password2 = pInput1.value;
 if((password1 != password2) ){ //if pattern not matched then add error and remove valid class
   pField1.classList.add("error");
   pField1.classList.remove("valid");
   //document.getElementById("loginbutton").disabled = true;
  // document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
   //checkpass=0;
   let errorTxt = pField1.querySelector(".error-txt");
   //if email value is not empty then show please enter valid email else show Email can't be blank
   (pInput1.value != "") ? errorTxt.innerText = " Password does not match" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
   pField1.classList.remove("error");
   pField1.classList.add("valid");
   //password1=pInput.value;
   //checkpass=1; 
   //if (checkmail == 1 && checkpass == 1 ){
     //document.getElementById("loginbutton").disabled = false;
     //document.getElementById('loginbutton').style.backgroundColor="#0000CD";
  // }
 }
}

function checkboxvalue(){ //checkEmail function
  var checkvalue=document.getElementById("checkboxInputField");
  console.log(checkvalue.checked);
  //console.log(cInput);
  if(checkvalue.checked == true){
    console.log("entry true");
    checkboxInputvalue=1;
    console.log(checkboxInputvalue);
  }else{
    console.log("entry false")
    checkboxInputvalue=0;
    console.log(checkboxInputvalue);
  }
  
}




form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}