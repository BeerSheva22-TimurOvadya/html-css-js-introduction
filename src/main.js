import openMeteoConfig from './config/service-config.json' assert { type: 'json' };
import OpenMeteoService from './service/OpenMeteoService.js';
import DataGrid from './ui/DataGrid.js';
import WeatherForm from './ui/WeatherForm.js';
import { getISODateStr, getEndDate } from './util/date-functions.js';
//constants definitions
const columns = [
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'temperature', headerName: 'Temperature' },
    { field: 'apparentTemperature', headerName: 'Fealt Temp' },
];

//TODO
const fromFormData = {
    city: 'Rehovot',
    startDate: getISODateStr(new Date()),
    days: 5,
    hourFrom: 12,
    hourTo: 14,
};

//objects
const form = new WeatherForm('form-place', Object.keys(openMeteoConfig.cities), openMeteoConfig.maxDays);
const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
const table = new DataGrid('table-place', columns);
const latLong = openMeteoConfig.cities[fromFormData.city];
const { lat, long } = latLong;
const { startDate, days, hourFrom, hourTo } = fromFormData;
openMeteoService
    .getTemperatures(lat, long, startDate, getEndDate(startDate, days), hourFrom, hourTo)
    .then((data) => table.fillData(data));

// let a = 10; let b =20; [a, b] = [b, a] swap, с лева значения, справа массив, после а = 20, b = 10
