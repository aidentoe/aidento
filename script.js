// Typing animation for hero section
const typedText = document.getElementById('typed-text');
const cursor = document.querySelector('.cursor');
const phrases = [
  "Aiden To",
  "Frontend Developer",
  "Web Designer",
  "Creative Coder",
  "Student @ St Mary’s"
];
let phraseIdx = 0, charIdx = 0, typing = true;

function type() {
  if (typing) {
    if (charIdx < phrases[phraseIdx].length) {
      typedText.textContent += phrases[phraseIdx][charIdx++];
      setTimeout(type, 75);
    } else {
      typing = false;
      setTimeout(erase, 1300);
    }
  }
}
function erase() {
  if (!typing) {
    if (charIdx > 0) {
      typedText.textContent = phrases[phraseIdx].substring(0, --charIdx);
      setTimeout(erase, 45);
    } else {
      typing = true;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 600);
    }
  }
}
type();

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? "☀️ Toggle Theme" : "🌙 Toggle Theme";
});

// Contact Form (static demo)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = "Thanks for reaching out!";
  setTimeout(() => {
    document.getElementById('form-status').textContent = "";
    document.getElementById('contact-form').reset();
  }, 2500);
});
