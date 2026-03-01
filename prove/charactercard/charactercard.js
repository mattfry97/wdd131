const character = {
  name: "Snortleblat",
  class: "Swamp Beast",
  level: 1,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  attacked() {
    if (this.health > 0) {
      this.health -= 20;

      if (this.health <= 0) {
        this.health = 0;
        alert(this.name + " has died!");
      }

      renderCharacter();
    }
  },

  levelUp() {
    this.level += 1;
    renderCharacter();
  }
};

function renderCharacter() {
  document.getElementById("characterName").textContent = character.name;
  document.getElementById("characterClass").textContent = character.class;
  document.getElementById("characterLevel").textContent = character.level;
  document.getElementById("characterHealth").textContent = character.health;

  document.getElementById("characterImage").src = character.image;
  document.getElementById("characterImage").alt = character.name;
}

renderCharacter();