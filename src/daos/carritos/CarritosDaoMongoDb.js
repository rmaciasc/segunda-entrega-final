import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb';

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor(schemaCarritos, schemaProductosEnCarritos) {
    this.carritos = new ContenedorMongoDb('carritos', schemaCarritos);
    this.productosEnCarritos = new ContenedorMongoDb(
      'productosEnCarritos',
      schemaProductosEnCarritos
    );
  }
}

export default CarritosDaoMongoDb;
