const logInEmail = document.getElementsByClassName("adminemail");

const password = document.getElementsByClassName("password");

const logInButton = document.getElementsByClassName("admin-sign-in");

logInButton.addEventlistener("click", (e) => {
  e.preventDefault();

  const userEmail = logInEmail.email.value;
  const password = password.password.value;

  if (userEmail === "userDemo@gmail.com" && password === "userDemo123") {
    alert("log in success!");
    window.location = "./main.html";
  }
});
