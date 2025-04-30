document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (name && email && message) {
    alert("Thank you for reaching out, " + name + "!");
  } else {
    alert("Please fill out all fields!");
  }
});
