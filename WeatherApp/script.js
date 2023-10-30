const loc = document.querySelector(".location");
const searchBtn = document.querySelector(".searchBtn");
const api = "a35baaf315dff53d1145c76bcb4595a9";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTempature = document.querySelector(".weatherTempature");

const weatherConditions = {
  Clouds: "./img/cloudly.png",
  Drizzle: "./img/rainy.png",
  Rain: "./img/rainy.png",
  Snow: "./img/snowy.png",
  Clear: "./img/sunny.png",
};

async function weather() {
  if (!loc.value) {
    Swal.fire({
      icon: "error",
      title: "Hata!",
      text: "Lütfen bir konum girin.",
    });
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${api}`
  );

  const data = await response.json();
  console.log(data);
  console.log(data.weather[0].main);

  weatherIcon.innerHTML = "";
  weatherTempature.innerHTML = "";

  //icon
  if (weatherConditions[data.weather[0].main]) {
    let icon = document.createElement("img");
    icon.className = "weat-icon";
    icon.src = weatherConditions[data.weather[0].main];
    weatherIcon.appendChild(icon);
  }

  //Derece (tempature)
  let temp = document.createElement("span");
  let celcius = Math.round(data.main.temp - 273.15);
  temp.className = "tempature";
  temp.innerHTML = `${celcius}  &#8451`;
  weatherTempature.appendChild(temp);

  //country
  let country = document.createElement("span");
  country.className = "country";
  country.innerHTML = data.name;
  weatherTempature.appendChild(country);
}

searchBtn.addEventListener("click", weather);