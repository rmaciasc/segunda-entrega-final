import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor(schemaProductos) {
    this.productos = new ContenedorMongoDb('productos', schemaProductos);
  }
}

export default ProductosDaoMongoDb;
