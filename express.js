const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to update data
app.post('/updateData', (req, res) => {
  const newData = req.body;
  fs.writeFileSync('path/to/data.json', JSON.stringify(newData, null, 2));
  res.status(200).send('Data updated successfully');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});