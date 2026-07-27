function login() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if (username === "scott" && password === "tiger") {
    window.location.href = "Home.html";
    console.log(`Login successfully`);
  } else {
    alert("Invalid credentials");
  }
}

function back() {
  window.location.href = "LoginPage.html";
}
