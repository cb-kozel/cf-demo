// server.js
const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/weather', async (req, res) => {
  const { city, state } = req.query;
  const fetch = (await import('node-fetch')).default;
  const geocodeResponse = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&state=${state}&format=json`
  );
  const geocodeData = await geocodeResponse.json();
  const { lat, lon } = geocodeData[0];
  const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const data = await response.json();
  const forecastResponse = await fetch(data.properties.forecast);
  const forecastData = await forecastResponse.json();
  res.render('index', { forecast: forecastData.properties.periods });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
