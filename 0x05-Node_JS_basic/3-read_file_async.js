/**
 * Using the database database.csv (provided in project description), create a
 * function countStudents in the file 3-read_file_async.js.
 * Create a function named countStudents. It should accept a path in argument
 * (same as in 2-read_file.js)
 * The script should attempt to read the database file asynchronously
 * The function should return a Promise
 * If the database is not available, it should throw an error with the text:
 *  Cannot load the database. If the database is available, it should log the
 * following message to the console Number of students: NUMBER_OF_STUDENTS.
 * It should log the number of students in each field, and the list with the
 * following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a
 * valid student!
 */
const fs = require('fs').promises;

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
    console.log(`Number of students: ${num}`);
    console.log(`Number of students in CS: ${CS}. List: ${CSArray.join(', ')}`);
    console.log(`Number of students in CS: ${SWE}. List: ${SWEArray.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
