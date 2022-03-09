async function render() {
  let response = await fetch("https://restcountries.com/v3.1/region/europe");
  let x = await response.json();
  let nomPays = "";
  let count = 0;
  //   console.log(x[0].name.official);
  for (let a in x) {
    console.log(count, +" : " + x[a].name.official);
    nomPays += `<li>${x[a].name.official}</li>`;
    count++;
  }
  document.getElementById("nom").innerHTML = nomPays;
}

render();
