document.addEventListener('DOMContentLoaded', () => {
    const recoverPasswordButton = document.querySelector('#recoverPasswordLink');
    const recoverPasswordPopup = document.getElementById('recoverPassword');
    const closeRecoverButton = document.getElementById('closeRecover');

    const emailPopup = document.getElementById('emailPopup');
    const usnPopup = document.getElementById('usnPopup');
    const passwordPopup = document.getElementById('passwordPopup');
    const messageDiv = document.getElementById('message');
    const messageText = document.getElementById('messageText');

    const nextToUSNButton = document.getElementById('nextToUSN');
    const nextToPasswordButton = document.getElementById('nextToPassword');
    const submitNewPasswordButton = document.getElementById('submitNewPassword');

    const emailInput = document.getElementById('recoverEmail');
    const usnInput = document.getElementById('recoverUSN');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Open the popup
    recoverPasswordButton.addEventListener('click', () => {
        recoverPasswordPopup.style.display = 'block';
    });

    // Close the popup
    closeRecoverButton.addEventListener('click', () => {
        recoverPasswordPopup.style.display = 'none';
    });

    // Next to USN
    nextToUSNButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (email.startsWith('NNM') && email.endsWith('@nmamit.in')) {
            emailPopup.style.display = 'none';
            usnPopup.style.display = 'block';
        } else {
            showMessage('Invalid email format. It should start with "NNM" and end with "@nmamit.in".');
        }
    });

    // Next to Password
    nextToPasswordButton.addEventListener('click', () => {
        const usn = usnInput.value;
        if (usn.startsWith('NNM') && usn.length === 10) { // Assuming USN is 10 characters long
            usnPopup.style.display = 'none';
            passwordPopup.style.display = 'block';
        } else {
            showMessage('Invalid USN format. It should start with "NNM" and be followed by 7 letters or numbers.');
        }
    });

    // Submit New Password
    submitNewPasswordButton.addEventListener('click', () => {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword === confirmPassword) {
            if (newPassword.startsWith('NNM') && newPassword.length === 10) {
                showMessage('Password updated successfully! Redirecting to sign-in...');
                setTimeout(() => {
                    recoverPasswordPopup.style.display = 'none';
                    // Redirect to sign-in page or show sign-in form
                    document.getElementById('signIn').style.display = 'block';
                }, 2000); // Delay for message display
            } else {
                showMessage('Invalid password format. It should start with "NNM" and be followed by 7 letters or numbers.');
            }
        } else {
            showMessage('Passwords do not match.');
        }
    });

    function showMessage(message) {
        messageText.textContent = message;
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.opacity = 0;
            setTimeout(() => {
                messageDiv.style.display = 'none';
                messageDiv.style.opacity = 1;
            }, 1000); // Delay for fade out effect
        }, 2000); // Message display duration
    }

    // Switch between Sign Up and Sign In
    document.getElementById('signUpButton').addEventListener('click', () => {
        document.getElementById('signup').style.display = 'block';
        document.getElementById('signIn').style.display = 'none';
    });

    document.getElementById('signInButton').addEventListener('click', () => {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('signIn').style.display = 'block';
    });
});
