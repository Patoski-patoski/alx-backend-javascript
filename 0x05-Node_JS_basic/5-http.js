const fs = require('fs').promises;
const http = require('http');

const PORT = 1245;

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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const databaseName = process.argv[2] || 'database.csv';
    await countStudents(databaseName)
      .then((data) => res.end(data))
      .catch((err) => res.end(err.message));
  }
});

app.listen(PORT);

module.exports = app;
