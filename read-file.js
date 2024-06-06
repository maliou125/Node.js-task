const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data);
});