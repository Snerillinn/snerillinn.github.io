// Add event listeners to form elements

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        alert('Invalid email address');
    }
});

const sendButton = document.querySelector('button[type="submit"]');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (nameValue !== '' && emailValue !== '') {
        // Send data to server or perform some action
        console.log(`Name: ${nameValue}, Email: ${emailValue}`);
        alert('Message sent successfully!');
        nameInput.value = '';
        emailInput.value = '';
    }
});
