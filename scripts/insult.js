fetch("insults.json")
  .then(response => response.json())
  .then(data => {
    insults = data.insults;
    generateBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * insults.length);
      insult.textContent = insults[randomIndex];
    });
  });

  if (screen.width >= 980) {
    window.location.replace("desktop.html");
  } else if (screen.width >= 128) {
    window.location.replace("index.html");
  }

