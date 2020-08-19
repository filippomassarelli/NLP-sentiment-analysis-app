function handleSubmit(event) {
  event.preventDefault();

  // get the user's submission
  const format = document.querySelector("input[name=format]:checked").value;
  const input = document.getElementById("input-text").value;
  const data = { format, input };

  //Send to server and use response to updateUI
  ClientLibrary.postData("http://localhost:2099/submit", data).then((res) => {
    ClientLibrary.updateUI(res);
  });
}

export { handleSubmit };
