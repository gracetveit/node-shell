const runCommands = require('./runCommands')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const [cmd, ...arguments] = data.toString().trim().split(" ");

    try{
        runCommands(cmd, ...arguments)
    } catch(err){
        process.stdout.write(`Error! ${err}`)
        process.stdout.write('\nprompt > ')
    }
});
