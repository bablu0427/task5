// Minimal JS to demonstrate interactivity
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('greetBtn');
  const out = document.getElementById('greetMsg');
  btn.addEventListener('click', function () {
    const now = new Date();
    out.textContent = `Hello! The page was updated at ${now.toLocaleTimeString()}.`;
    console.log('Greeting shown to visitor at', now.toISOString());
  });
});