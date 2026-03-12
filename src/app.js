// 1. Carrega as variáveis do arquivo .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');

// 2. Importação das suas rotas
const empresaRoutes = require('./routes/EmpresaRoutes.js');

const app = express();

// 3. Middlewares
app.use(cors({
  origin: '*' // Permite que qualquer front acesse (ajuste em produção)
})); 
app.use(express.json()); // Permite que o app entenda arquivos JSON recebidos no body

// ==========================================
// 4. ROTAS DA APLICAÇÃO
// ==========================================

// Mantendo sua rota de empresas intacta! O controller fará o trabalho pesado.
app.use('/empresa', empresaRoutes);

// Rotas de teste para validar se a API está de pé
app.get('/', (req, res) => {
  res.json({ mensagem: "🚀 API Express funcionando com Postgres e Neon!" });
});
const prisma = require('./lib/prisma.js'); // (ou import, dependendo de como está seu código)

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.uSER.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no prisma" });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ mensagem: "O Frontend está falando com o Backend com sucesso!" });
});

// ==========================================
// 5. INICIANDO O SERVIDOR
// ==========================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});