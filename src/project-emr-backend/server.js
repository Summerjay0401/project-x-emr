const express = require('express');

const app = express();

const PORT = process.env.PORT || 5065;

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}.`));