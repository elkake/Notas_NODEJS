// event emitter contiene todos los eventos
// puede ser cualquier nombre mientras se instancie

const EventEmitter = require('events')

const event = new EventEmitter()

// once: PUEDE EJECUTAR UN EVENTO UNA VEZ Y RECIBIR EL NOMBRE DEL EVENTO EN UNO DE SUS PARAMETROS
event.once('newListener', eve => {
  if (eve === 'event') {
    event.on('event', data => {
      console.log('B')
      console.log(data)
    })
  }
})

// on: USUALMENTE USAREMOS on PARA EJECUTAR UN EVENTO LLAMANDOLO POR SU NOMBRE 'event
event.on('event', data => {
  console.log('A')
  console.log(data)
})

// emit: EJECUTA Y ENVIA UN PARAMETRO DE SER NECESARIO
// emit(evento,dataEnviada)
event.emit('event', 'este es el emit')

// ------------------------------------------

class Arreglo extends EventEmitter {
  constructor() {
    super()
    this.data = []
  }

  add(valor) {
    this.data.push(valor)
    this.emit('add', valor)
  }
}

var arr1 = new Arreglo()

arr1.on('add', v => {
  console.log('Se agrego : ', v)
})

arr1.add('123')
arr1.add('456')
arr1.add('789')
arr1.add('abc')

// same ---------------------------

let cadena = []
const Cadena = valor => {
  cadena.push(valor)
  event.emit('funcion', valor)
}

event.on('funcion', data => {
  console.log('se añadio: ', data)
  console.log(cadena)
})

Cadena('123')
Cadena('456')
Cadena('789')
Cadena('abc')
