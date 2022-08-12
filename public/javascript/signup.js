const signupFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const name = document.querySelector("#name-signup").value;
  const tag = document.querySelector("#tag-signup").value;
  const email = document.querySelector("#email-signup").value;
  const password = document.querySelector("#password-signup").value;

  if (name && tag && email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, tag, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);