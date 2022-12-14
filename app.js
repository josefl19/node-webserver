import express from "express";
import path from "path";                    // Para el manejo de rutas absolutas
import hbs from "hbs";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(path.resolve('views/partials'));

// Servir contenido estitco (Middlewares)
app.use(express.static('public'))           // Sin esta linea el render queda sin estilo

// Se pueden pasar argumentos desde el controlador hacia la vista para que al renderizar muestre la información
app.get('/', (req, res) => {
    // Renderiza y manda llamar la vista
    res.render('home', {
        nombre: 'Jose Fujarte',         // argumentos
        curso: 'Proyecto del Curso de Node JS'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jose Fujarte',         // argumentos
        curso: 'Proyecto del Curso de Node JS'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jose Fujarte',         // argumentos
        curso: 'Proyecto del Curso de Node JS'
    })
})

// Ruta con comodin para todas aquellas direcciones que no esten definidas
app.get('*', (req, res) => {
    res.send('404 | Page not found')        // get the absolute path calculation of a relative path using path.resolve()
})

// Listen con arrow function
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})