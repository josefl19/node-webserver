import express from "express";
import path from "path";                    // Para el manejo de rutas absolutas

const app = express()
const port = 8080;

// Servir contenido estitco (Middlewares)
app.use(express.static('public'))           // No seria necesario el get a '/'

// Get con function
/*app.get('/', function (req, res) {
  res.send('Home page')
})*/

// Get con arrow function
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo')
})

// Ruta con comodin para todas aquellas direcciones que no esten definidas
app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/404.html'))        // get the absolute path calculation of a relative path using path.resolve()
})

// Forma uno de llamar al listen
//app.listen(8080)

// Listen con arrow function
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})