import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

class ProductosDaoMongoDb extends ContenedorMongoDb {
  constructor(collection, schemaProductos) {
    super(collection, schemaProductos);
    this.productos = new ContenedorMongoDb(
      this.collection,
      this.schemaProductos
    );
  }
}

export default ProductosDaoMongoDb;
