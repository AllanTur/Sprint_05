async function render() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/region/europe");
    let x = await response.json();
    let nomPays = "";

    for (let a in x) {
      nomPays += `<li>${x[a].name.official}</li>`;
    }
    document.getElementById("nom").innerHTML = nomPays;
  } catch (e) {
    console.error(e);
    console.log("Dans le catch");

    // btn.addEventListener("click", function () {
    //   render();
    // });
  }
}

render();
// let btn = document.createElementById("refresh");
// let txt = document.createTextNode("boutton raffraichir");
// btn.appendChild(txt);
// document.getElementById("refresh").textContent = "";
// document.getElementById("refresh").appendChild(btn);
