import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.gallina.createMany({
    data: [
      {
        nombre: "Blanca",
        nacimiento: new Date("2023-01-01"),
        raza: "Leghorn",
        cantidadHuevos: 10
      },
      {
        nombre: "Negra",
        nacimiento: new Date("2023-03-15"),
        raza: "Plymouth Rock",
        cantidadHuevos: 8
      }
    ]
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
