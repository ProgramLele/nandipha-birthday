const messages = [
  "God smiles when He looks at you.",
  "Your skin carries light, history, and beauty.",
  "You were created with intention and love.",
  "You are powerful, kind, and deeply valued.",
  "Never forget who you are and whose you are.",
  "I'm on the pursuit of happiness and I know, everything that shines ain't always gonna be gold, but I'll be fine once I get it, I'll be goooood. - Kid Cudi"
];

function showMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
}
