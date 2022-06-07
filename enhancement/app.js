// Object literal enchacement

const bands = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ('Master of Popets', 'Seek & Destroy', 'Enter Sandman')

//forma anterior
//const Metallica = {
// banda: banda,
//genero: genero,
// canciones: canciones,
//}
//forma nueva
const metallica = { banda, genero, canciones }

console.log(metallica)
