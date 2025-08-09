import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

const aggregates = async () => {

    const aggregations = await prisma.user.aggregate({
        _avg: {
            age: true,
        },
    })

    console.log('Average age:' + aggregations._avg.age)
}
aggregates()