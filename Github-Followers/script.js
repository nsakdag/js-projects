// 1.input canlandirilmali

const searchTextEl = document.getElementById("searchText");
const buttonEl = document.getElementById("button");
const cardsEl = document.getElementById("cards");
const parEl = document.getElementById("par");
const followersEl = document.getElementById("searchFollowers");

// 2.yazdiktan sonra ikinci input olusmali
// 3.api ile butun veriler cekilmeli ve ekrana basilmali

//https://api.github.com/users/anthonyharold67/followers?per_page=100
let followers = [];
const getUsers = async (input) => {
  cardsEl.innerHTML = "";
  let veri = searchTextEl.value;

  try {
    const res = await fetch(
      `https://api.github.com/users/${input}/followers?per_page=100`
    );

    if (res.ok) {
      const data = await res.json();
      followers = data;
      parEl.textContent = `${veri} has ${data.length} followers:`;
      followersEl.style.display = "flex";

      data.forEach((element) => {
        createElem(element);
      });
    } else {
      parEl.textContent = `Unknown user`;
      followersEl.style.display = "display";
    }
  } catch (error) {}
};

// getUsers();

function createElem(user) {
  const { avatar_url, login, html_url } = user;
  const newElem = `
  <div class="col">
      <div class="card">
      <img src="${avatar_url}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${login}</h5>
          <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
      </div>
      </div>
  </div>
  `;
  cardsEl.innerHTML += newElem;
}

// 4.inputa girdigim deger apiye yerlestirilmeli

buttonEl.addEventListener("click", () => {
  const input = searchTextEl.value.trim();
  // console.log(input);
  if (input) {
    getUsers(input);
  } else {
    alert("lutfen gecerli bir isim giriniz");
  }
  searchTextEl.value = "";
});

// 5.kullanicilar geldikten sonra suzulebilmeli

followersEl.addEventListener("input", (e) => {
  console.log(e.target.value);
  cardsEl.innerHTML = "";
  followers
    .filter((item) =>
      item.login.toLowerCase().includes(e.target.value.toLowerCase())
    )
    .forEach((item) => createElem(item));
});

window.addEventListener("load", () => {
  followersEl.style.display = "none";
});
