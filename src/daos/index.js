let productosDao;
let carritosDao;

switch (process.env.PERS) {
  case 'firebase':
    const { default: ProductosDaoFirebase } = await import(
      './productos/ProductosDaoFirebase'
    );
    const { default: CarritosDaoFirebase } = await import(
      './carritos/CarritosDaoFirebase'
    );
    productosDao = new ProductosDaoFirebase();
    carritosDao = new CarritosDaoFirebase();
    break;

  case 'mongodb':
    const { default: ProductosDaoMongoDB } = await import(
      './productos/ProductosDaoMongoDB'
    );
    const { default: CarritosDaoMongoDB } = await import(
      './carritos/CarritosDaoMongoDB'
    );
    productosDao = new ProductosDaoMongoDB();
    carritosDao = new CarritosDaoMongoDB();
    break;

  case 'mariadb':

  case 'sqlite3':

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

  default:
    break;
}

export { productosDao, carritosDao };
