const nameslist = require('../country/state/city/index.js')
const func = require('../utilities/utils/index.js')
const getPeopleInCity = nameslist => {
  return func(nameslist)
}
module.exports = getPeopleInCity
