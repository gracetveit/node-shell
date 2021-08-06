const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd') {
        pwd()
    } else if(cmd === 'ls') {
        ls()
    } else if(cmd.includes('cat')) {
        cat(cmd.slice(4));
    }
    else {
        process.stdout.write('You Typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }

});
