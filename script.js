let randomJoks = document.querySelector("#random_joks");


let getJokbtn = document.querySelector("#getJoks");

getJokbtn.addEventListener("click", async () => {
  try {
    let fetchData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json",
      },
    });
    let joks = await fetchData.json();
    let jokeData = joks.joke;
    randomJoks.innerHTML = jokeData;
  } catch {
    console.error("somthing wrong");
  }
});
