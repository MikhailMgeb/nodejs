const fs = require('fs');
require('dotenv').config();
const reName = process.env.NEW_NAME;

fs.readdir('./', (err, files) => {
    if (err) throw err;
   
    console.log(files);
  });

fs.rename('secret.txt', reName, err => {
    if (err) throw err; // не удалось переименовать файл
    console.log('Файл успешно переименован');
});

console.log(reName)
