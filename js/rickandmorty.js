const BASE_URL = "https://rickandmortyapi.com/api";
const CHARACTER = "/character";
const API_URL = BASE_URL + CHARACTER;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function rickandmorty(username) {
  document.querySelector(".login").style.display = "none";
  document.querySelector(".register").style.display = "none";
  document.querySelector(".rickandmorty__app--container").style.display =
    "block";

  document.getElementById(
    "username_display"
  ).innerHTML = `Bienvenido <p>${username}</p>!`;

  getCharacters(API_URL);

  function getCharacters(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showCharacters(data.results);
      });
  }

  function showCharacters(data) {
    main.innerHTML = "";
    data.forEach((character) => {
      const { name, status, image } = character;

      const characterEl = document.createElement("div");
      characterEl.classList.add("character");
      if (status.toLowerCase() == "alive") {
        characterEl.innerHTML = `<img src = "${image}"
    alt="${name}" class="character-img" >
        <div id="character-info" class="character-info">
            <h3>${name}</h3>
            <span class="alive">${status}</span>
        </div>`;
      } else if (status.toLowerCase() == "dead") {
        characterEl.innerHTML = `<img src="${image}"
    alt="${name}" class="character-img">
        <div id="character-info" class="character-info">
            <h3>${name}</h3>
            <span class="dead">${status}</span>
        </div>`;
      } else {
        characterEl.innerHTML = `<img src="${image}"
    alt="${name}" class="character-img" >
        <div id="character-info" class="character-info">
            <h3>${name}</h3>
            <span class="unknown">${status}</span>
        </div>`;
      }

      main.appendChild(characterEl);

      return;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
      getCharacters(API_URL + "/?name=" + searchTerm);
    } else {
      getCharacters(API_URL);
    }
  });
}
