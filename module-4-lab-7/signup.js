function submitForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Perform client-side validation, e.g., check if fields are not empty, validate email format, etc.
  
    // Send signup data to the server for processing (this is a basic example).
  
    // Replace the 'YOUR_BACKEND_URL' with the actual URL of your server-side endpoint.
    fetch("192.168.68.124", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response (success or error).
        // For example, show a success message or redirect to the login page.
        if (data.success) {
          alert("Sign up successful! Please log in.");
          window.location.href = "login.html";
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
  