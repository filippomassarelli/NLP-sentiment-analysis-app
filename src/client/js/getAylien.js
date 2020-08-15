const getAylien = async (passedUrl, passedData) => {
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
    console.log("This is from the getAylien.js : ");
    console.log(data);
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { getAylien };
