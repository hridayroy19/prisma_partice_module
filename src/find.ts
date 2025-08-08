import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllDataIntoDB = await prisma.post.findMany();

    // find fast and find or throw
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: true
        }
    })

    const findUnic = await prisma.post.findUniqueOrThrow({
        where: {
            id: 3
        }
    })

    // je fild gula amrder response hisabe lgbeee
    const select = await prisma.post.findUniqueOrThrow({
        where: {
            id: 3
        },
        select:{
            title:true,
            published:true
        }
    })




    console.log({ findUnic })
}

main()