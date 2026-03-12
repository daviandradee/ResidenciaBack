

const ItemSchema = new prisma.Schema({
  nome: { type: String, required: true },
  descricao: String,
  dataCriacao: { type: Date, default: Date.now }
});

module.exports = prisma.model('Item', ItemSchema);