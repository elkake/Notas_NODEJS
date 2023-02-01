const fs = require('fs')

// file sincrono

console.log('fs.readFileSync (buffer text): ', fs.readFileSync('./ejemplo.txt'))
console.log(
  'fs.readFileSync (utf-8): ',
  fs.readFileSync('./ejemplo.txt', 'utf-8' )
)

console.log(
  'fs.writeFileSync: ',
  fs.writeFileSync('./ejemploCreado.txt', ' TOMATE CREADO '.repeat(5))
)

console.log(
  'fs.writeFileSync: ',
  fs.writeFileSync('./ejemploCreado.txt', ' +ADIOS MUNDO CRUEL+ ', {
    flag: 'a'
  })
)

console.log(
  'fs.readFileSync (utf-8): ',
  fs.readFileSync('./ejemploCreado.txt', { encoding: 'utf-8' })
)

// file asincrono

fs.readFile('ejemplo.txt', 'utf-8', function (err, data) {
  console.log("\nreadFile asincrono: (ruta,utf8,funcion(error,data))\n",data)
})
