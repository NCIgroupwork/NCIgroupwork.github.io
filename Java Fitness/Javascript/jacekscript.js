/*
Javascript for home page(index.html) and classes.html
by Jacek Pawula
*/

/* Subscription - newsletter from the bottom
As the code is taken from mdbootsrap - I will keep the names of the buttons
*/
    const form = document.querySelector("form");
    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault();
            const email = document.getElementById("form5Example26").value.trim();
            if (!email) {
                alert("Please enter a valid email address.");
                return;
            }
    const formSection = form.closest("section");
         if(formSection) {
            formSection.innerHTML = `
            <div class="row d-flex justify-content-center>
                <div class="col-auto">
                    <p class="subMessage">Thank you for your subscription! Check your email for the best coding and workout tips!</p>
                </div>
            </div>
      `;
    }
};
} else {
    console.error("Form not found");
}