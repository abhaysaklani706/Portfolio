// main.js
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
function sendmail() {
    let params = {
        from_name: document.getElementById("name").value,   // Changed 'name' → 'from_name'
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value     // Optional: for reply button in your inbox
    };

    emailjs.send("service_t39kxod", "template_2s6srfw", params)
    .then(() => {
        alert("Email sent!!");
    });
}