const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
        rowData[header.trim()] = row[index].trim();
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

    console.log(`Number of students: ${num}`);
    console.log(`Number of students in CS: ${CS}. List: ${CSArray.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE}. List: ${SWEArray.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
