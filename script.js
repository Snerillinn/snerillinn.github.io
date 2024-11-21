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

// change language button
function switchLanguage() {
  const currentLang = getCookie('lang');
  if (currentLang === 'en') {
    setCookie('lang', 'is'); // switch back to Icelandic
  } else {
    setCookie('lang', 'en'); // switch to English
  }
  location.reload();
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1).trim();
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date();
  if (days) {
    expires.setDate(expires.getDate() + days);
  }
  document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
}
