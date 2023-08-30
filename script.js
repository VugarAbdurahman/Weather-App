const url = "https://api.openweathermap.org/data/2.5/"
const apiKEY = "8842758f8a7876f930fd1753a28b6912"

const searchBar = document.querySelector("#input")

const getWeather = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value)
  }
}

const getResult = (city) => {
  let query = `${url}/weather?q=${city}&appid=${apiKEY}&units=metric&lang=az`

  console.log(query)
  fetch(query)
    .then((res) => res.json())
    .then((result) => {
      let city = document.querySelector(".city")
      city.innerText = `${result.name}, ${result.sys.country}`

      let temp = document.querySelector(".temp")
      temp.innerText = Math.round(`${result.main.temp}`)

      let desc = document.querySelector(".desc")
      desc.innerText = `${result.weather[0].description}`

      let minmax = document.querySelector(".minmax")
      minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
        result.main.temp_max
      )}°C `
    })
    .catch((err) => alert(err))
}

searchBar.addEventListener("keypress", getWeather)
