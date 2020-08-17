function handleSubmit(event) {
  event.preventDefault();

  // get the user's submission
  const format = document.querySelector("input[name=format]:checked").value;
  const input = document.getElementById("input-text").value;
  const data = { format, input };

  console.log("handleSubmit data:");
  console.log(data);

  //Send to server
  ClientLibrary.postData("/submit", data).then((res) => {
    console.log(
      "postData function was called by handleSubmit and returned this response"
    );
    console.log(res);
    ClientLibrary.updateUI(res);
  });
}

export { handleSubmit };
