var os = require('os')
var pino = require('pino')
var callee = require('callee')

var cwd = process.cwd()
if (cwd.length > 1) cwd = cwd + '/'

function pinotage (opts, stream) {
  var iopts = opts
  var istream = stream
  if (iopts && (iopts.writable || iopts._writableState)) {
    istream = iopts
    iopts = {}
  }
  iopts = iopts || {}
  var copts = iopts.callee || 3
  istream = istream || process.stdout

  return pino(iopts, {
    write: function (chunk) {
      var c = callee(copts)
      let orig = chunk.substr(0, chunk.length - 2)
      let file = c.getFileName().replace(cwd, '')
      let method = c.getMethodName()
      let func = c.getFunctionName()
      func = func ? '"' + func + '"' : null
      func = method || func
      let line = orig + ',"file":"' + file + '","fuc":' + func + ',"ln":' + c.getLineNumber() + ',"col":' + c.getColumnNumber() + '}' + os.EOL
      istream.write(line)
    }
  })
}

module.exports = pinotage
