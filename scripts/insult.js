fetch("insults.json")
  .then(response => response.json())
  .then(data => {
    insults = data.insults;
    generateBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * insults.length);
      insult.textContent = insults[randomIndex];
    });
  });
