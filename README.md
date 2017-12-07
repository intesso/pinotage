# pinotage

small wrapper around pino logger that adds callsite logging context

## usage

- same as [pino](https://github.com/pinojs/pino)
- adds in-process additional logging context:
  - **file** relative path/filename
  - **func** method or function name
  - **ln** line number
  - **col** column number

## output

see [example](example.js)

```js
{"level":30,"time":1512688044929,"msg":"bushvine","pid":7879,"hostname":"io-2.local","v":1,"file":"example.js","fuc":null,"ln":5,"col":8}
{"level":30,"time":1512688044932,"msg":"stellenbosch","pid":7879,"hostname":"io-2.local","v":1,"file":"example.js","fuc":"myFunction","ln":9,"col":10}
{"level":40,"time":1512688044932,"msg":"zonnebloem","pid":7879,"hostname":"io-2.local","v":1,"file":"example.js","fuc":"myLambda","ln":14,"col":29}
{"level":30,"time":1512688044933,"msg":"kanonkop","pid":7879,"hostname":"io-2.local","v":1,"file":"example.js","fuc":"MyClass","ln":20,"col":12}
{"level":30,"time":1512688044933,"msg":"bellingham","pid":7879,"hostname":"io-2.local","v":1,"file":"example.js","fuc":print,"ln":23,"col":21}
```

## license

MIT

## Author

Andi Neck