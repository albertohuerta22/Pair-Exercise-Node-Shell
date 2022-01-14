module.exports = process.stdout.write('prompt > ');

module.exports = process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\npromp > ');
});


