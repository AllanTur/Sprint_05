async function render() {
  let response = await fetch("https://restcountries.com/v3.1/region/europe");
  let x = await response.json();
  let nomPays = "";
  let area = "";

  let internationalNumberFormat = new Intl.NumberFormat("en-US");
  for (let a in x) {
    nomPays += `<tr id="tableArea"><th>${
      x[a].name.official
    }</th><td style="text-align: right">${internationalNumberFormat.format(
      x[a].area
    )}</td><td style="text-align: right">${internationalNumberFormat.format(
      x[a].population
    )}</td><td>${x[a].capital}</td></tr>`;
  }
  document.getElementById("tableNom").innerHTML = nomPays;
}

render();
