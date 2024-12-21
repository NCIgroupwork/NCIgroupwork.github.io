function signupmsg(event){
    
    event.preventDefault();
  
    const form = document.querySelector(".form-wrapper form");
  
    //verify input format
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
}