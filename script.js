// Initialize user storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Handle Signup
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists!');
        return;
    }

    // Add new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign Up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Handle Login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check for existing user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        sessionStorage.setItem('loggedInUserEmail', user.email); // Store email in session
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Scroll effect for elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in'); // Select all elements with the class 'fade-in'
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Add the 'visible' class when the element is in view
        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (replace with your actual authentication logic)
    if (username === 'user' && password === 'pass') {
        // Redirect to the dashboard if credentials are correct
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});




function toggleEdit() {
    const fields = document.querySelectorAll('#name, #email, #bio, #hobbies, #skills, #social');
    fields.forEach(field => field.disabled = false);

    // Show Save button and hide Edit button
    document.getElementById("editButton").style.display = "none";
    document.getElementById("saveButton").style.display = "inline";
}

function saveProfile() {
    const fields = document.querySelectorAll('#name, #email, #bio, #hobbies, #skills, #social');
    fields.forEach(field => field.disabled = true);

    // Show Edit button and hide Save button
    document.getElementById("editButton").style.display = "inline";
    document.getElementById("saveButton").style.display = "none";

    // Display confirmation
    alert("Profile saved!");
}

function uploadImage() {
    alert("Image upload functionality not yet implemented.");
}



