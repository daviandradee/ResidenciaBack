// Importe o seu arquivo prisma.js em vez do model antigo do Mongoose
const prisma = require('../lib/prisma.js'); // Verifique se o caminho para o seu prisma.js está correto

const EmpresaService = {
    async createempresa(dados) {
        if (!dados.name) {
            throw new Error("O nome é obrigatório!");
        }
        if (!dados.manager) {
            throw new Error("Nome do gerente é obrigatório!");
        }

        // PRISMA: Usamos prisma.empresa.create
        const empresaCriada = await prisma.empresa.create({
            data: {
                name: dados.name,
                manager: dados.manager,
            }
        });
        return empresaCriada;
    },

    async updatecaixa(empresaID, novoCaixa) {
        // PRISMA: Verifica se existe
        const empresaExiste = await prisma.empresa.findUnique({
            where: { id: empresaID }
        });

        if (!empresaExiste) {
            throw new Error("Empresa não encontrada!");
        }

        // PRISMA: Atualiza direto no banco (não usamos mais o .save())
        const empresaAtualizada = await prisma.empresa.update({
            where: { id: empresaID },
            data: { caixa: parseFloat(novoCaixa) }
        });
        
        return empresaAtualizada;
    },

    async getempresaId(empresaID) {
        // PRISMA: Usamos findUnique em vez de findById
        const empresa = await prisma.empresa.findUnique({
            where: { id: empresaID }
        });

        if (!empresa) {
            throw new Error("Empresa não encontrada!");
        }
        return empresa;
    }
};

module.exports = EmpresaService;