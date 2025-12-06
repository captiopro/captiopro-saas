import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function setAdmin(email: string) {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { isAdmin: true }
    })
    
    console.log(`✅ Successfully set ${user.email} (${user.name}) as admin`)
    console.log('User details:', {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin
    })
  } catch (error) {
    console.error('❌ Error setting admin:', error)
    console.log('\nMake sure the user exists in the database first!')
  } finally {
    await prisma.$disconnect()
  }
}

// Get email from command line argument
const email = process.argv[2]

if (!email) {
  console.error('❌ Please provide an email address')
  console.log('Usage: npx ts-node scripts/set-admin.ts your@email.com')
  process.exit(1)
}

setAdmin(email)
