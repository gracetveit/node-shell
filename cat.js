const fs = require('fs');

/**
 * prints to console the content of a given file
 * @param {string} fileNa - Filename
 */
module.exports = function cat(fileNa) {
    fs.readFile(`./${fileNa}`, 'utf8', (err, data) => {
        if(err){
            throw err;
        }
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
    })
}
