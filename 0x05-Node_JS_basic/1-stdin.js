console.log(`Welcome to Holberton School, what is your name?`)

process.stdin.on('data', (data) => {
  const name = data.toString().trim()
  console.log(`Your name is: ${name}`);

  process.exit();
});

process.on('exit', () => {
  console.log("This important software is now closing");
});
