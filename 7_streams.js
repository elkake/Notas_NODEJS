const fs = require('fs')
const http = require('http')
const stream = fs.createReadStream('./ejemploGrande.txt', 'utf-8')

http
  .createServer((req, res) => {
    
    stream.on('data', porcion => {
      res.write(porcion)
    })

    stream.on('end', () => {
      res.write('termine con toda la informacion')
    })

    stream.on('error', e => {
      res.write(e)
    })
  })
  .listen(3000)
