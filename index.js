function fetchFish(){
    let URL ='https://www.fishwatch.gov/api/species'
    fetch(URL)
    .then(res=> res.json())
    .then(data=>console.log(data))
}

fetchFish()

