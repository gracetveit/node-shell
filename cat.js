const fs = require('fs');

module.exports = function cat(fileNa) {
    fs.readFile(`./${fileNa}`, 'utf8', (err, data) => {
        if(err){
            throw err;
        }
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
    })
}