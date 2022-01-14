const { cwd } = require('process');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\npromp > ');
});



console.log(`Current directory: ${cwd()}`);

// console.log();
