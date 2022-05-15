let productosDao;
let carritosDao;

switch (process.env.PERS) {
  case 'json':
    const { default: ProductosDaoArchivo } = await import(
      './productos/ProductosDaoArchivo.js'
    );
    const { default: CarritosDaoArchivo } = await import(
      './carritos/CarritosDaoArchivo.js'
    );

    productosDao = new ProductosDaoArchivo();
    carritosDao = new CarritosDaoArchivo();
    break;
  case 'firebase':

  case 'mongodb':
    const { default: ProductosDaoFirebase } = await import(
      './productos/ProductosDaoFirebase'
    );
    const { default: CarritosDaoFirebase } = await import(
      './carritos/CarritosDaoFirebase'
    );

    productosDao = new ProductosDaoFirebase();
    carritosDao = new CarritosDaoFirebase();
    break;
  case 'mariadb':

  case 'sqlite3':

  default:
    break;
}

export { productosDao, carritosDao };
