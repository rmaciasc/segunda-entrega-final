import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor(
    collectionCarritos,
    schemaCarritos,
    collectionProductosEnCarritos,
    schemaProductosEnCarritos
  ) {
    super(collectionCarritos, schemaCarritos);
    this.carritos = new ContenedorMongoDb(collectionCarritos, schemaCarritos);
    this.productosEnCarritos = new ContenedorMongoDb(
      collectionProductosEnCarritos,
      schemaProductosEnCarritos
    );
  }
}

export default CarritosDaoMongoDb;
