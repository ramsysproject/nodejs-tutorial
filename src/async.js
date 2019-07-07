const fs = require('fs');
fs.readFile('HELP.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log

function moreWork() {
    console.log('no block');
};