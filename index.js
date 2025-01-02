let fellas = undefined;

async function updateFella() {
    const imgElement = document.getElementById("fellaPic");
    const nameElement = document.getElementById("fellaName");

    // If we've never retrieved the fellas json, do so.
    if (!fellas) {
        fellas = await getFellasJson();
    }
    
    const fellaKeys = Object.keys(fellas);
    const fellaNumber = fellaKeys[Math.floor(Math.random()*fellaKeys.length)]
    const fellaName = fellas[fellaNumber]

    imgElement.src = `pics/${fellaNumber}.png`
    nameElement.innerHTML = fellaName
}

// grab the JSON file with all of the fella names/images.
function getFellasJson() {
    return fetch('./fellas.json')
    .then((res) => {
        if (!res.ok) console.error("couldn't read the fellas json!");
        return res.json();
    })
    .then((data) => {
        return data
    }) 
}