
const Pinotage = require('./index')
const logger = Pinotage()

// log from global context
logger.info('bushvine')

// log from within function
function myFunction () {
  logger.info('stellenbosch')
}
myFunction.print = () => Pinotage('MyClass').error('draught')
myFunction()

// log within arrow function
let myLambda = () => logger.warn('zonnebloem')
myLambda()

// log within ES6 class
class MyClass {
  constructor () {
    logger.info('kanonkop')
  }

  print () { 
    logger.info('bellingham')
    myFunction.print()
  }
}
new MyClass().print()
