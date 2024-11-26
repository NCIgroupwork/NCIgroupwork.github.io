/*
Group project
*/

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

function signupmsg(event){
    
  event.preventDefault();

  const form = document.querySelector(".form-wrapper form");

  //verify input format
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  let x = document.getElementById("inputName").value;

  let y = document.getElementById("inputEmail").value;

  let z = document.getElementById("inputState").value;

  //Verify service box
  if (z === "Choose a service") {
    alert("Please fill out all fields and select a valid service.");
    return;
  }
  
  document.getElementById("signupform").style.display = "none";

  document.getElementById("message").innerHTML = `${x}, thank you for your details.<br> We will be in touch via ${y} shortly regarding your sign up request for ${z} service.`;  

}