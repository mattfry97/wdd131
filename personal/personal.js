const games = [
  {
    name: "Elden Ring",
    genre: "rpg",
    rating: 10,
    platform: "PC",
    description: "An open-world RPG with challenging combat and deep exploration."
  },
  {
    name: "FIFA 23",
    genre: "sports",
    rating: 7,
    platform: "PlayStation",
    description: "A realistic soccer game with competitive and career modes."
  },
  {
    name: "Call of Duty",
    genre: "action",
    rating: 8,
    platform: "Xbox",
    description: "Fast-paced shooter with multiplayer and campaign modes."
  },
  {
    name: "Zelda: Breath of the Wild",
    genre: "rpg",
    rating: 10,
    platform: "Switch",
    description: "Explore a vast world with puzzles, combat, and adventure."
  }
];

function displayGames(gameArray) {
  const container = document.getElementById("gameList");
  container.innerHTML = "";

  gameArray.forEach(game => {
    const div = document.createElement("div");
    div.classList.add("game-card");

    div.innerHTML = `
      <h3>${game.name}</h3>
      <p>Genre: ${game.genre.toUpperCase()}</p>
      <p>Platform: ${game.platform}</p>
      <p>Rating: ${game.rating}</p>
      <button class="details-btn">View Details</button>
    `;

    const btn = div.querySelector(".details-btn");
    btn.addEventListener("click", () => {
      alert(game.description);
    });

    container.appendChild(div);
  });
}

displayGames(games);

const genreButtons = document.querySelectorAll(".filters button[data-genre]");

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genre = button.dataset.genre;

    if (genre === "all") {
      displayGames(games);
    } else {
      const filteredGames = games.filter(game => game.genre === genre);
      displayGames(filteredGames);
    }
  });
});


document.getElementById("sortBtn").addEventListener("click", () => {
  const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
  displayGames(sortedGames);
});

const platformButtons = document.querySelectorAll('[data-platform]');

platformButtons.forEach(button => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;

    if (platform === "all") {
      displayGames(games);
    } else {
      const filtered = games.filter(game => game.platform === platform);
      displayGames(filtered);
    }
  });
});