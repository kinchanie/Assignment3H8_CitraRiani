const inputElement = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
const activeCasesElement = document.getElementById("active-cases");
const criticalCasesElement = document.getElementById("critical-cases");
const recoveredCasesElement = document.getElementById("recovered-cases");
const totalCasesElement = document.getElementById("total-cases");
const totalDeathsElement = document.getElementById("total-deaths");
const totalTestsElement = document.getElementById("total-tests");

btn.addEventListener("click", () => {
    const country = inputElement.value.trim().toLowerCase();
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => response.json())
    .then((data) => {
        activeCasesElement.textContent = data.active;
        criticalCasesElement.textContent = data.critical;
        recoveredCasesElement.textContent = data.recovered;
        totalCasesElement.textContent = data.cases;
        totalDeathsElement.textContent = data.deaths;
        totalTestsElement.textContent = data.tests;
    })
    .catch((error) => {
        console.error(error);
    })
})

