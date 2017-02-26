let btnGet = document.getElementById('btn');
let worldPopulationCounter = 0;
let populationCounter = 0;
let lowPopulation = 0;
let lowPopCountry = '';
btnGet.addEventListener('click', function () {
    let url = 'http://forverkliga.se/JavaScript/api/simple.php?world=whatever';
    fetch(url).then(function (response) {
        console.log(response);
        return response.json(); // JSON Promise
    }).then(function (jsonData) {
        console.log(jsonData);
        showWorldPopulation(jsonData);
        showEuropePopulation(jsonData);
        showFemaleZimbabwe(jsonData);
        fewestPopulation(jsonData);
    })
});

function showWorldPopulation(jsonData) {
    for (let country of jsonData) {
        worldPopulationCounter += country.population;
    }
    let answerQ1 = document.getElementById('a1').innerHTML = worldPopulationCounter;
}

function showEuropePopulation(jsonData) {
    let countEurope = continentEurope => continentEurope.continent == 'Europe';
    let newResult = jsonData.filter(countEurope);
    for (let continentEurope of newResult) {
        populationCounter += continentEurope.population;
    }
    let answerQ2 = document.getElementById('a2').innerHTML = populationCounter;
}

function showFemaleZimbabwe(jsonData) {
    let chooseCountry = country => country.name == 'Zimbabwe';
    let countryResult = jsonData.filter(chooseCountry)[0];
    //console.log("pop: " + countryResult.population);
    //console.log("proc: " + countryResult.pFemale);
    //console.log("countryRes: " + countryResult);
    //for (x in countryResult) console.log(x);
    //console.log("countryRes type: " + typeof (countryResult));
    let totalFZ = countryResult.population * countryResult.pFemale;
    //console.log(totalFZ);
    let answerQ3 = document.getElementById('a3').innerHTML = totalFZ;
}
// Vilket land har minst befolkning?
function fewestPopulation(jsonData) {
    let array = jsonData;
    for (let x of jsonData) {
        lowPopulation = Math.min.apply(Math, array.map(function (o) {
            return o.population;
        }));
        console.log(lowPopulation);
        if (x.population === lowPopulation) {
            lowPopCountry = x.name;
            console.log(lowPopCountry)
        }
    }
    let answerQ4 = document.getElementById('a4').innerHTML = lowPopCountry;
}