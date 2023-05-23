// async function getTemperatures(lat, long) {
//     const response = await fetch(
//         `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST`,
//     );
//     return response.json();
// }
// getTemperatures(31.89, 34.81)
//     .then((data) => console.log(data.hourly.temperature_2m[13], data.hourly.time[13]))
//     .catch((error) => console.log(error));

// написаь функциональность, принимает lat и long, принимает дату, принимает количество дней(0-16), часы(от и до)
// возвращает колчиство объектов

// async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo){
// Rarameters: lat - latitude, long - longitude, startDate - ISO date of forecast,
// days - forecast days, (hourFrom, hourTo) - closed range of the hours for each day
//returns:
//array of objects{date: <string containing date YYYY-MM-DD with no time>,
// time: <hour namber from the given range>, temperature: <number>, apparentTemperature: <number>}
// }

//Моё решение:
// async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo) {
//     const endDate = calculateEndDate(startDate, days);
//     const response = await fetch(
//         `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&start_date=${startDate}&end_date=${endDate}`,
//     );
//     const data = await response.json();
//     const results = data.hourly.time
//         .map((time, i) => {
//             const hour = new Date(time).getHours();
//             if (hour >= hourFrom && hour <= hourTo) {
//                 return {
//                     date: time.split('T')[0],
//                     time: hour,
//                     temperature: data.hourly.temperature_2m[i],
//                     apparentTemperature: data.hourly.apparent_temperature[i],
//                 };
//             }
//         })
//         .filter(Boolean);

//     return results;
// }

// function calculateEndDate(startDate, days) {
//     const endDate = new Date(startDate);
//     endDate.setDate(endDate.getDate() + days);
//     return endDate.toISOString().substring(0, 10);
// }

getTemperatures(31.89, 34.81, '2023-05-23', 1, 20, 22)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

async function getTemperatures(lat, long, startDate, days, hourFrom, hourTo) {
    // Rarameters: lat - latitude, long - longitude, startDate - ISO date of forecast,
    // days - forecast days, (hourFrom, hourTo) - closed range of the hours for each day
    //returns:
    //array of objects{date: <string containing date YYYY-MM-DD with no time>,
    // time: <hour namber from the given range>, temperature: <number>, apparentTemperature: <number>}
    const endDate = getEndDate(startDate, days);
    const url = getUrl(lat, long, startDate, endDate);
    const response = await fetch(url);
    const data = await response.json();
    const dates = getDataForHours(data.hourly.time, hourFrom, hourTo);
    const temperatures = getDataForHours(data.hourly.temperature_2m, hourFrom, hourTo);
    const apparentTemperatures = getDataForHours(data.hourly.apparent_temperature, hourFrom, hourTo);
    return dates.map((d, index) => {
        const tokens = d.split('T');
        const date = tokens[0];
        const time = tokens[1];
        return {
            date,
            time,
            temperature: temperatures[index],
            apparentTemperature: apparentTemperatures[index],
        };
    });
}

function getEndDate(startDateStr, days) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.setDate(startDate.getDate() + days));
    return endDate.toISOString().substring(0, 10);
}

function getUrl(lat, long, startDate, endDate) {
    return `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST&start_date=${startDate}&end_date=${endDate}`;
}

function getDataForHours(array, hourFrom, hourTo){
    return array.filter((__, index) =>{
        const rem = index % 24;
        return rem >= hourFrom && rem <= hourTo
    })
}