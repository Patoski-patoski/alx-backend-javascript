const express = require('express');
const fs = require('fs').promises;

const PORT = 1245;
const app = express();

async function countStudents(path) {
try {
  const data = await fs.readFile(path, 'utf-8');
  const rows = data.split('\n').filter((row) => row.trim() !== '');
  const headers = rows[0].split(',');

  let num = 0;
  let CS = 0;
  let SWE = 0;
  const CSArray = [];
  const SWEArray = [];

  for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i].split(',');
      const rowData = {};

      headers.forEach((header, index) => {
          rowData[header.trim()] = row[index];
      });
      num += 1;

      if (rowData.field === 'CS') {
          CS += 1;
          CSArray.push(rowData.firstname);
      } else if (rowData.field === 'SWE') {
          SWE += 1;
          SWEArray.push(rowData.firstname);
      }
  }
  let numOfStudents = `Number of students: ${num}\n`;
  numOfStudents += (`Number of students in CS: ${CS}. List: ${CSArray.join(', ')}\n`);
  numOfStudents += (`Number of students in SWE: ${SWE}. List: ${SWEArray.join(', ')}\n`);

  return numOfStudents.trim();
} catch (error) {
  throw new Error('Cannot load the database');
}
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseName = process.argv[2] || 'database.csv';
  try {
    const data = await countStudents(databaseName);
    res.status(200).send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(404).send(`This is the list of our students\n${error.message}`);
});
app.listen(PORT, () => {
 console.log(`Server => ${PORT}`);
});

module.exports = app;
