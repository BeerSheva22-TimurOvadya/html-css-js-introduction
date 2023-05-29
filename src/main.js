import openMeteoConfig from './config/service-config.json' assert { type: 'json' };
import OpenMeteoService from './service/OpenMeteoService.js';
import DataGrid from './ui/DataGrid.js';
import WeatherForm from './ui/WeatherForm.js';
import { getISODateStr, getEndDate } from './util/date-functions.js';

const columns = [
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'temperature', headerName: 'Temperature' },
    { field: 'apparentTemperature', headerName: 'Fealt Temp' },
];

const form = new WeatherForm('form-place', Object.keys(openMeteoConfig.cities), openMeteoConfig.maxDays, updateTable);
const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
const table = new DataGrid('table-place', columns);

function updateTable(formData) {
    const latLong = openMeteoConfig.cities[formData.city];
    const { lat, long } = latLong;
    const { startDate, days, hourFrom, hourTo } = formData;
    openMeteoService
        .getTemperatures(lat, long, startDate, getEndDate(startDate, +days), +hourFrom, +hourTo)
        .then((data) => table.fillData(data));
}

// // Call updateTable initially
// updateTable({
//     city: 'Rehovot',
//     startDate: getISODateStr(new Date()),
//     days: 2,
//     hourFrom: 3,
//     hourTo: 5,
// });