 function goToLoginPage1() {
    // Replace 'LogIN.html' with the desired page you want to navigate to
    window.location.href = './LogIN.html'; // Redirect to the desired page
}
function goToLoginPage2() {
        // Replace 'LogIN.html' with the desired page you want to navigate to
        window.location.href = './signUP.html'; // Redirect to the desired page
}

function validateForm() {
      const firstName = document.getElementById('Name').value.trim();
      const secondName = document.getElementById('Name2').value.trim();
      const email = document.getElementById('Email').value.trim();
      const password = document.getElementById('Password').value.trim();
      const reason = document.getElementById('Reason').value;
      const description = document.getElementById('Description').value.trim();      // Check if first name is empty
      if (firstName === '') {
          alert('Please enter your first name.');
          return false; // Prevent form submission
      }      // Check if second name is empty
      if (secondName === '') {
          alert('Please enter your second name.');
          return false; // Prevent form submission
      }      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert('Please enter a valid email address.');
          return false; // Prevent form submission
      }      // Check if password is empty
      if (password === '') {
          alert('Please enter your password.');
          return false; // Prevent form submission
      }      // Check if reason is selected
      if (reason === '') {
          alert('Please select a reason for contact.');
          return false; // Prevent form submission
      }      // Check if description is empty
      if (description === '') {
          alert('Please provide a description.');
          return false; // Prevent form submission
      }      // If all validations pass
      return alert("Submitted successfully"); // Allow form submission
}

//scroll
const topButton = document.getElementById('top-button');

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});