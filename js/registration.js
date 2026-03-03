function registerUser() {
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const role = document.getElementById('role').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!lastName || !firstName || !middleName || !address || !phone || !dob || !role || !username || !password) {
        alert('Please fill in all fields!');
        return;
    }

    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (!nameRegex.test(lastName) || !nameRegex.test(firstName) || !nameRegex.test(middleName)) {
        alert('First name, last name, and middle name must contain letters only.');
        return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must contain exactly 10 digits.');
        return;
    }

    if (!isValidDate(dob)) {
        alert('Date of birth must be in YYYY-MM-DD format.');
        return;
    }

    if (username.length < 4 || username.includes(' ')) {
        alert('Username must be at least 4 characters long and must not contain spaces.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const user = {
        lastName,
        firstName,
        middleName,
        address,
        phone,
        dob,
        role,
        username,
        password
    };

    localStorage.setItem(user.username, JSON.stringify(user));

    alert('User successfully registered!');
    window.location.href = 'login.html';
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
}
