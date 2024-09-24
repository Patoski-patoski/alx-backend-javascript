const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase('database.csv');
      return response.status(200).send(`This is the list of our students\n${data.join('').trim()}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const databaseName = process.argv[2] || 'database.csv';
    let responseData;
    try {
      const param = request.params.major.toString().trim();
      if (typeof (param) !== 'string' || (param !== 'SWE' && param !== 'CS')) {
        responseData = response.status(500).send('Major parameter must be CS or SWE');
      }
      const data = await readDatabase(databaseName);
      if (param === 'CS') {
        responseData = response.status(200).send(data[1].trim());
      } else if (param === 'SWE') {
        responseData = response.status(200).send(data[2].trim());
      }
      return responseData;
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
