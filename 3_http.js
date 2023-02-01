const http = require('http')

// create server

http
  .createServer((req, res) => {
    // escribir en la pagina
    console.log('1   ', req.url)
    console.log('1   ', req.path)

    console.log('1   ', req.statusCode)
    if (req.url === '/request') {
      res.write('Contenido oculto >:D')
    } else {
      res.write('Hola mundo')
    }
    // finaliza la respuesta
    res.end()
  })
  .listen(3000, 'localhost', () => {
    console.log('server is running on port 3000')
  })

//   ejecucion en el púerto 3000
