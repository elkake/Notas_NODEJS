// node --watch "nombreDeArchivoJS"
// console.log(process)

// os: obtener datos del sistema operativo
const os = require('os')

// funciones de enrutamiento de archivos
const path = require('path')

console.log('\n__filename:', __filename)
console.log('\n__dirname:', __dirname)
console.log('\nmodule: ', module)
console.log('\npath: ', path)

console.log('\nos.userInfo', os.userInfo())

const filepath = path.join('/1_os-path.js', 'dist', 'data.css')
console.log('\npath.join: ', path.join('/1_os-path.js', 'dist', 'data.css'))
console.log('\npath.basename: ', path.basename(filepath))
console.log('\npath.dirname: ', path.dirname(filepath))
// obtener datos sobre el archivo, ext
console.log('\npath.parse: ', path.parse(filepath))
console.log('\npath.resolve: ', path.resolve(filepath))
