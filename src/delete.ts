import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {

    const deleted = await prisma.post.delete({
        where: {
            id: 1
        }
    })

    console.log({deleted})
}

main()