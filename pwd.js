/**
 * prints working directory to the console
 */
module.exports = function pwd (){
  process.stdout.write(process.env.PWD)
  process.stdout.write('\nprompt > ')
}
