// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvZ86Tn2h3YwIbSxc8tiUmdQlO8meYfE",
  authDomain: "agritech-42ab8.firebaseapp.com",
  projectId: "agritech-42ab8",
  storageBucket: "agritech-42ab8.appspot.com",
  messagingSenderId: "721957800898",
  appId: "1:721957800898:web:7fcf30362fe97c6d4f645b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
        const user = userCredential.user;
        // Save the email to local storage
    localStorage.setItem('userEmail', email);
        alert("Login successful! Redirecting to home page...");
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});
