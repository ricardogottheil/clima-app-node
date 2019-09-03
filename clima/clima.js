const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e0567a04acfd879f9148e2ca353655b1&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}