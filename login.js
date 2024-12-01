const users = [
    { username: "Najib", password: "Najib" },
    { username: "Rafi", password: "Rafi" },
    { username: "Zelda", password: "Zelda" },
    { username: "Naya", password: "Naya" }
  ];
  
  const loginButton = document.getElementById("loginButton");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password"); 
  const errorMessage = document.getElementById("errorMessage");
  
  loginButton.addEventListener("click", function () {
    const username = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    const isValidUser = users.some(user => user.username === username && user.password === password);
  
    if (isValidUser) {
      alert("Login berhasil!");
      window.location.href = "index.html";
    } else {
      errorMessage.style.display = "block";
    }
  });
  