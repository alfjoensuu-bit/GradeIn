document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;

  const res = await fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message, email })
  });

  const data = await res.json();
  alert("Lähetetty!");
});