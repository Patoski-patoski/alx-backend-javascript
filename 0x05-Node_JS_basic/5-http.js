/**
 * In a file named 5-http.js, create a small HTTP server using the http module:
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * It should return plain text
 * When the URL path is /, it should display Hello Holberton School! in the
 * page body
 * When the URL path is /students, it should display This is the list of our
 * students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed
 *  as argument of the file CSV file can contain empty lines (at the end) - and
 *  they are not a valid student!
 */

const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = await fs.readFile('database.csv', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('This is the list of our students\n');
    res.end(data);
  }
});

app.listen(PORT);
