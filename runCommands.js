const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

/**
 * Executes one of several commands based on the command and arguments
 * given
 * @param {string} cmd
 * @param  {...string} arguments
 */
module.exports = function runCommands(cmd, ...arguments){
  if (cmd == 'pwd'){
    pwd()
  } else if (cmd == 'ls'){
    ls()
  } else if (cmd == 'cat'){
    cat(arguments[0])
  } else if (cmd == "curl"){
    curl(arguments[0])
  } else throw new Error("Unrecognized command")
}
