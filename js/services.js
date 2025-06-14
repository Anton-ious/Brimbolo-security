 function goToLoginPage1() {
    // Replace 'LogIN.html' with the desired page you want to navigate to
    window.location.href = './LogIN.html'; // Redirect to the desired page
}
function goToLoginPage2() {
        // Replace 'LogIN.html' with the desired page you want to navigate to
        window.location.href = './signUP.html'; // Redirect to the desired page
}
function buy(){
    alert ("You have successfully bought the product");
}

   document.getElementById('contactForm').addEventListener('submit', function (event) {
             event.preventDefault(); // Prevent the form from submitting
             // Get form values
             const firstName = document.getElementById('firstName').value.trim();
             const secondName = document.getElementById('secondName').value.trim();
             const phoneNumber = document.getElementById('phoneNumber').value.trim();
             const email = document.getElementById('email').value.trim();
             const reason = document.getElementById('reason').value;
             const description = document.getElementById('description').value.trim();
             // Validation
             if (!firstName || !secondName || !phoneNumber || !email || !reason || !description) {
                 alert('Please fill in all fields.');
                 return;
             }
             if (!/^\d{10}$/.test(phoneNumber)) {
                 alert('Please enter a valid phone number (10 digits).');
                 return;
             }
             if (!/\S+@\S+\.\S+/.test(email)) {
                 alert('Please enter a valid email address.');
                 return;
             }
             // If all validations pass, you can submit the form or perform further actions
             alert('Form submitted successfully!');
             // You can uncomment the line below to actually submit the form
             // this.submit();
});

//scroll
const topButton = document.getElementById('top-button');

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});