const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(DOG_URL);

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    console.log(processedResponse);
    document.querySelector("a").innerText = processedResponse.message;
    document.querySelector("a").href = processedResponse.message;
    document.getElementById("doge-img").src = processedResponse.message;
  });
