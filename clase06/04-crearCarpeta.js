const fs = require('fs');

const pathSync = './carpetainternaSync';
const pathAsync = './carpetainternaAsync';

//Crear Carpeta sincronico
try {
  fs.mkdirSync(pathSync);
} catch (err) {
  console.log('Error Crear carpeta Sincronica', err);
}

//Crear Carpeta Asincronica

fs.mkdir(pathAsync, (err, salida) => {
  if (err) console.log('Error crear carpeta Asincronica', err);

  console.log('DONE');
});
