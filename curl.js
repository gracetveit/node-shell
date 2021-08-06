const request = require('request')

/**
 * prints out the HTTP body response from a GET request
 * @param {string} url
 */
module.exports = function curl(url){
  request(url, (error, response, body) => {
    if(error) throw error
    process.stdout.write(body)
    process.stdout.write("\nprompt > ")
  })
}
