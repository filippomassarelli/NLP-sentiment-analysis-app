function updateUI(data) {
  //Clear UI
  const results = document.getElementById("results");
  results.innerHTML = "";
  results.style.display = "block";

  let resultsHTML;
  if (data.status.code === "0") {
    resultsHTML = `
                <h1>Results:</h1>
                <ul>
                    <li>${data.agreement}</li>
                    <li>${data.irony}</li>
                    <li>${data.confidence}% CONFIDENCE</li>
                    <li>${data.subjectivity}</li>
                </ul>
                `;
  } else {
    resultsHTML = `
                <h1>Sorry!</h1>
                <p>${data.status.msg}</p>
                <p>(error code${data.status.code})</p>
                `;
  }

  //add resultsHTML to DOM
  results.insertAdjacentHTML("beforeend", resultsHTML);
}

export { updateUI };
