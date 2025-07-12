function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    alert("✅ Login successful!");
    return true;
  } else {
    error.textContent = "❌ Invalid username or password!";
    return false;
  }
}
