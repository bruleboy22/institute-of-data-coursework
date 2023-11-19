function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Perform client-side validation (e.g., check if email and password are not empty).
    if (!email || !password) {
      alert("Please enter both email and password.");
      return false;
    }
  
    // Send login credentials to the server for authentication (this is a basic example).
  
    // Replace 'YOUR_BACKEND_URL' with the actual URL of your server-side endpoint.
    fetch("192.168.68.124", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response (success or error).
        // For example, redirect to the dashboard on successful login.
        if (data.success) {
          window.location.href ="homepage.html"; // Replace '/dashboard' with the path to your dashboard page.
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    // Prevent the form from submitting directly.
    return false;
  }
  
  