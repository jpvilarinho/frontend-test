const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const apiKey = process.env.YOUTUBE_API_KEY;

app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(3002, () => {
  console.log('BFF listening on port 3002');
});
