var fs = require("fs");
fs.unlink('data1.txt', (err) => {
    if (err) throw err;
    console.log('data1.txt was deleted');
});