import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '9b273db9-54b2-4538-9679-1c3c7e44946e',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 200,

        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect()
})