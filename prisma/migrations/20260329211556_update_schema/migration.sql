-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "capexBalancaValor" DOUBLE PRECISION NOT NULL DEFAULT 20000,
ADD COLUMN     "capexFreezerValor" DOUBLE PRECISION NOT NULL DEFAULT 20000,
ADD COLUMN     "capexMelhoriaContinuaValor" DOUBLE PRECISION NOT NULL DEFAULT 12000,
ADD COLUMN     "capexRedesValor" DOUBLE PRECISION NOT NULL DEFAULT 18000,
ADD COLUMN     "capexSegurancaValor" DOUBLE PRECISION NOT NULL DEFAULT 15000,
ADD COLUMN     "capexSelfCheckoutValor" DOUBLE PRECISION NOT NULL DEFAULT 40000,
ADD COLUMN     "capexSiteValor" DOUBLE PRECISION NOT NULL DEFAULT 25000;

-- CreateTable
CREATE TABLE "CompanyConfig" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "round" INTEGER NOT NULL,
    "estoquePereciveis" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estoqueMercearia" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estoqueEletro" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estoqueHipel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "margemPereciveis" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "margemMercearia" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "margemEletro" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "margemHipel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "operadoresVenda" INTEGER NOT NULL DEFAULT 0,
    "operadoresServico" INTEGER NOT NULL DEFAULT 0,
    "capexSeguranca" BOOLEAN NOT NULL DEFAULT false,
    "capexBalanca" BOOLEAN NOT NULL DEFAULT false,
    "capexRedes" BOOLEAN NOT NULL DEFAULT false,
    "capexSite" BOOLEAN NOT NULL DEFAULT false,
    "capexSelfCheckout" BOOLEAN NOT NULL DEFAULT false,
    "capexMelhoriaContinua" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyConfig_companyId_round_key" ON "CompanyConfig"("companyId", "round");

-- AddForeignKey
ALTER TABLE "CompanyConfig" ADD CONSTRAINT "CompanyConfig_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
