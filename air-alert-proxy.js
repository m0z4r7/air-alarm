const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/air-alert', async (req, res) => {
  try {
    const apiUrl = 'https://alerts.com.ua/api/regions/12'; // Львівська обл.
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Помилка при отриманні тривоги:', err);
    res.status(500).json({ error: 'Не вдалося отримати дані про тривогу' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
