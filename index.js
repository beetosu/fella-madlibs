let fellas = undefined;
let currentFella = undefined;

async function updateFella() {
    const imgElement = document.getElementById("fellaPic");
    const nameElement = document.getElementById("fellaName");

    // If we've never retrieved the fellas json, do so.
    if (!fellas) {
        fellas = await getFellasJson();
    }

    const fellaKeys = Object.keys(fellas);
    let fellaNumber = fellaKeys[Math.floor(Math.random()*fellaKeys.length)];
    
    // if the selected fella and the current fella are the same, reroll until we get someone new!
    while (fellaNumber === currentFella) {
        fellaNumber = fellaKeys[Math.floor(Math.random()*fellaKeys.length)];
    }
    currentFella = fellaNumber;
    const fellaName = fellas[fellaNumber];

    imgElement.src = `pics/${fellaNumber}.png`;
    imgElement.alt = fellaName;
    nameElement.innerHTML = fellaName;
}

// grab the JSON file with all of the fella names/images.
function getFellasJson() {
    return fetch('./fellas.json')
    .then((res) => {
        if (!res.ok) console.error("couldn't read the fellas json!");
        return res.json();
    })
    .then((data) => {
        return data;
    }) 
}