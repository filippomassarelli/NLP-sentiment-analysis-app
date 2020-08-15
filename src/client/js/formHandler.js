function handleSubmit(event) {
  event.preventDefault();
  const inputForAylien = {};

  // get the user's submission
  const format = document.querySelector("input[name=format]:checked").value;
  const inputText = document.getElementById("input-text").value;

  if (format === "url") {
    inputForAylien.url = inputText;
  } else {
    inputForAylien.text = inputText;
  }
  console.log("handleSubmit stored this inputForAylien:");
  console.log(inputForAylien);

  //Send to server
  ClientLibrary.getAylien("http://localhost:2099/submit", inputForAylien).then(
    console.log("getAylien function was called by handleSubmit")
  );
}

export { handleSubmit };
