import * as http from 'http';

http.createServer( (req, res) => {

    // Devolver un archivo CSV
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});
    
    res.write('id, name\n');
    res.write('1, Jose\n');
    res.write('2, Mariana\n');
    res.write('3, Raúl\n');
    res.write('4, Sandra\n');
    res.end();
    
}).listen( 8080 );

console.log('Escuchando en puerto ', 8080);