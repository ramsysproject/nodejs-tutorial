const fs = require('fs');
const data = fs.readFileSync('HELP.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

function moreWork() {
    console.log('after block');
};