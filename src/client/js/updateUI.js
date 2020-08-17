function updateUI(data) {
  //Clear UI
  const results = document.getElementById("results");
  results.innerHTML = "";
  results.style.display = "block";

  let resultsHTML;
  if (data.status.code === "0") {
    resultsHTML = `
                <div>
                <h1>Our analysis show that:</h1>
                <p><i class="fas fa-hand-point-right"></i>The polarity of different elements of the text are in <span>${data.agreement.toLowerCase()}</span></p>
                <p><i class="fas fa-hand-point-right"></i>The text is prevalently <span>${data.subjectivity.toLowerCase()}</span> and <span>${data.irony.toLowerCase()}</span></p>
                <p><i class="fas fa-hand-point-right"></i>We are <span>${data.confidence.toLowerCase()}%</span> confident about these resulst</p>
                </div>`;
  } else {
    resultsHTML = `
                <div>
                <h1>Sorry!</h1>
                <i class="fas fa-car-crash"></i>
                <p>${data.status.msg}</p>
                <p>(error code${data.status.code})</p>
                </div>`;
  }

  //add resultsHTML to DOM
  results.insertAdjacentHTML("beforeend", resultsHTML);
}

export { updateUI };
