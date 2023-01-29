fetch("insults.json")
  .then(response => response.json())
  .then(data => {
    insults = data.insults;
    generateBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * insults.length);
      insult.textContent = insults[randomIndex];
    });
  });

const toggle = document.querySelector(".toggle");
    toggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      toggle.classList.toggle("light-mode");
      toggle.classList.toggle("dark-mode");
    });
