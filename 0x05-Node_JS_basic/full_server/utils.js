const fs = require('fs').promises;

async function readDatabase(path) {
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
    const arrnumOfStudents = [];
    arrnumOfStudents[0] = `Number of students: ${num}\n`;
    arrnumOfStudents[1] = (`Number of students in CS: ${CS}. List: ${CSArray.join(', ')}\n`);
    arrnumOfStudents[2] = (`Number of students in SWE: ${SWE}. List: ${SWEArray.join(', ')}\n`);

    return arrnumOfStudents;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
export default readDatabase;
