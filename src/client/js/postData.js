const regeneratorRuntime = require("regenerator-runtime");

const postData = async (passedUrl, passedData) => {
  const request = await fetch(passedUrl, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passedData),
  });
  try {
    const data = await request.json();
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { postData };
