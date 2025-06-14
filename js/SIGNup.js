 function validateForm() {
    const firstName = document.getElementById('name').value.trim();
    const secondName = document.getElementById('name2').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();     
    if (firstName === '') {
        alert('Please enter your first name.');
        return false;
    }
    if (secondName === '') {
        alert('Please enter your second name.');
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (password === '') {
        alert('Please enter your password.');
        return false; 
    }   
    window.location.href = 'index.html';
    return false; 
}