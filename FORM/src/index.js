function checkPasswordEquality() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword)
        return false
    return true
}

function checkPasswordContainsNumber() {
    const password = document.getElementById('password').value;
    return /\d/.test(password);
}

function checkEmail() {
    const email = document.getElementById('email').value;
    return /\S+@\S+\.\S+/.test(email);
}

const signUpButton = document.getElementById('signupBtn');
signUpButton.addEventListener('click', function(event) {
    const allErrorSpans = document.querySelectorAll('span');
    allErrorSpans.forEach(span => span.remove());
    let check = true;
    event.preventDefault();
    if (!checkPasswordEquality()) {
        const errorSpan = document.createElement('span');
        errorSpan.innerHTML = 'Passwords do not match';
        errorSpan.style.color = 'red';
        document.getElementById('confirmPassword').insertAdjacentElement('afterend', errorSpan);
        check = false;
    } if (!checkPasswordContainsNumber()) {
        const errorSpan = document.createElement('span');
        errorSpan.innerHTML = 'Password must contain a number';
        errorSpan.style.color = 'red';
        document.getElementById('password').insertAdjacentElement('afterend', errorSpan);
        check = false;
    } if (!checkEmail()) {
        const errorSpan = document.createElement('span');
        errorSpan.innerHTML = 'Email is invalid';
        errorSpan.style.color = 'red';
        document.getElementById('email').insertAdjacentElement('afterend', errorSpan);
        check = false;
    }
    if (check) {
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }
})