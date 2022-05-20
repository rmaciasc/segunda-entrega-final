import mongoose from 'mongoose';

class ContenedorMongoDb {
  constructor(collection, schema) {
    this.collection = collection;
    this.schema = schema;
    this.config = {
      mongodb: {
        url: 'mongodb://localhost:27017/ecommerce',
      },
    };
    mongoose.connect(this.config.mongodb.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.model = mongoose.model(this.collection, this.schema);
  }

  async listar(id) {
    id = parseInt(id);
    const result = await this.model.find({ id: id });
    console.log(result);
    if (!result) {
      return { error: 'id no encontrado' };
    } else {
      return result;
    }
  }

  async listarAll() {
    try {
      let results = await this.model.find();
      if (results.length > 0) {
        return results;
      } else {
        console.log(`La colección ${this.collection} está vacía.`);
        return false;
      }
    } catch (error) {
      console.log(`${this.collection} no fue encontrada. Error: ${error}`);
    }
  }

  async guardar(elem) {
    return await new this.model.create(elem);
  }

  async actualizar(elem, id) {
    id = parseInt(id);
    return await this.model.updateOne({ id: id }, elem);
  }

  async borrar(id) {
    id = parseInt(id);
    return await this.model.deleteOne({ id: id });
  }

  async borrarAll() {
    return await this.model.deleteMany();
  }

  async desconectar() {
    await mongoose.connection.close();
  }
}

export default ContenedorMongoDb;
