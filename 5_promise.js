const fs = require('fs')

// funcion asincrona
const getText = ruta => {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf-8', (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

getText('./ejemplo.txt')
  .then(data => console.log(data))
  .catch(err => console.log(err))

//--------------------------------------------

const fss = require('fs/promises')
/*
  // const fss=require('fs/promises')

  es igual a esto

  const fss= require('fs')
  const util=require('util')
 
  const readFile=
  util.promisify(fss.readFile)
*/
// promesas async await
const read = async ruta => {
  try {
    const result = await fss.readFile(ruta, 'utf-8')
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// readFile('./ejeplo.txt').then(data => console.log(data))

read('./ejemploCreado.txt')
