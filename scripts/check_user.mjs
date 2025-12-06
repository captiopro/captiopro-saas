#!/usr/bin/env node
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const email = process.argv[2] || 'smoke+test1@captiopro.com'

async function main() {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.error('User not found:', email)
    process.exit(2)
  }
  console.log('User found:', { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt })
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
