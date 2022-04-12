const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
var checkmail=0;
var checkpass=0;
//eField.classList.add("error");
//pField.classList.add("error");
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
    if (checkmail == 1 && checkpass == 1 ){
      document.getElementById("loginbutton").disabled = false;
      document.getElementById('loginbutton').style.backgroundColor="#0000CD";
    }
  }
}
function checkPass(){ //checkEmail function

   pInputvalue = pField.querySelector("input").value;
  if(pInputvalue.length < 8){ //if pattern not matched then add error and remove valid class
    pField.classList.add("error");
    pField.classList.remove("valid");
    document.getElementById("loginbutton").disabled = true;
    document.getElementById('loginbutton').style.backgroundColor="#EBEBE4";
    checkpass=0;
    let errorTxt = pField.querySelector(".error-txt");
    //if email value is not empty then show please enter valid email else show Email can't be blank
    (pInput.value != "") ? errorTxt.innerText = "Password contains atleast 8 characters" : errorTxt.innerText = "Password can't be blank";
     }else{ //if pattern matched then remove error and add valid class
    pField.classList.remove("error");
    pField.classList.add("valid");
    checkpass=1; 
    if (checkmail == 1 && checkpass == 1 ){
      document.getElementById("loginbutton").disabled = false;
      document.getElementById('loginbutton').style.backgroundColor="#0000CD";
    }
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
  
  window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag

  // eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  // pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  // function checkEmail(){ //checkEmail function
  //   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
  //   if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
  //     eField.classList.add("error");
  //     eField.classList.remove("valid");
  //     let errorTxt = eField.querySelector(".error-txt");
  //     //if email value is not empty then show please enter valid email else show Email can't be blank
  //     (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
  //   }else{ //if pattern matched then remove error and add valid class
  //     eField.classList.remove("error");
  //     eField.classList.add("valid");
  //   }
  // }

  // function checkPass(){ //checkPass function
  //   if(pInput.value == ""){ //if pass is empty then add error and remove valid class
  //     pField.classList.add("error");
  //     pField.classList.remove("valid");
  //   }else{ //if pass is empty then remove error and add valid class
  //     pField.classList.remove("error");
  //     pField.classList.add("valid");
  //   }
  // }

  // //if eField and pField doesn't contains error class that mean user filled details properly
  // if(!eField.classList.contains("error") && !pField.classList.contains("error")){
  //   window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  // }
}