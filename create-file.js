const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('File created successfully!');
});