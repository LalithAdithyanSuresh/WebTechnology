function getData(city){
    const API_KEY = "790812ec6faac78c1caf23aa01d50c74";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    return fetch(URL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error occurred - ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

async function getCityOptions(inputString) {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputString}&limit=10&sort=-population`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '73867537d6msh740dbf3e9cdeb90p13670djsn919ba7c088db',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result['data'];
    } catch (error) {
        console.error(error);
        return [];
    }
}
