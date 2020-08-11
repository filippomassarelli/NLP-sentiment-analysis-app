function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let city = document.getElementById("city").value;
  myWebpackLibraryForJsFunctions.checkForName(city);

  const apiKey = "f68acfdd8f3c0ea46c672f4d7e1d5d1a";

  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  console.log("::: Form Submitted :::");

  fetch(url)
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const time = new Date(parseInt(res.dt) * 1000).toLocaleDateString(
        "en-UK",
        options
      );

      const imgSrc = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;

      document.getElementById("results").innerHTML = `<h1>${res.name}</h1>
      <p>${time}</p>
      <img src=${imgSrc}></img>
      <p>${res.main.temp} °C</p>
      <p>Expect ${res.weather[0].description} today.</p>
      `;
    });
}

export { handleSubmit };
