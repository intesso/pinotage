
const logger = require('./index')()

// log from global context
logger.info('bushvine')

// log from within function
function myFunction () {
  logger.info('stellenbosch')
}
myFunction()

// log within arrow function
let myLambda = () => logger.warn('zonnebloem')
myLambda()

// log within ES6 class
class MyClass {
  constructor () {
    logger.info('kanonkop')
  }

  print () { logger.info('bellingham') }
}
new MyClass().print()
