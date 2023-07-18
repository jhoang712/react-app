import { getGeoCode } from "./geoCode.js"

// need geocoder, timezone

// var lat = 34.0522
// var long = 118.2437
// var tz = 'PDT'

// var forecast = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&temperature_unit=fahrenheit&timezone=${tz}`

// const fff = await fetch(forecast);
// const ff = await fff.json();
// console.log(ff)

// fetch(forecast)
//     .then(fc => {return fc.json()})
//     .then(f => console.log(f))


// returns forcast data as JSON
export async function forecastData(location) {
    console.log("ENTERED FORECASTDATA")
    const geo = await getGeoCode(location);
    var lat = geo.latitude;
    var long = geo.longitude;
    var tz = 'auto'
    console.log(lat)
    console.log(long)
    console.log(geo)
    var forecast = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&temperature_unit=fahrenheit&timezone=${tz}`

    // fetch(forecast)
    //     .then(fc => {return fc.json()})
    //     .then(f => {
    //         console.log("FORECAST IS:", f);
    //         return f})

    const data = await fetch(forecast);
    const dataJSON = await data.json();
    return dataJSON;
}

// forecastData("torrance, california").then(fc => console.log("SO IT SHOULD BE:", fc))
// const forecastedData = await forecastData("torrance, california");
// console.log("SO IT SHOULD BE:", forecastedData)