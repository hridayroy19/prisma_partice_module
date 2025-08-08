import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {

    const singleUpdate = await prisma.post.update({
        where: {
            id: 6
        },
        data: {
            title: "update title",
            content: "update title",
            authorName: "update title"
        }
    })


    const updateMany = await prisma.post.updateMany({
        where: {
            content: "update title",
        },
        data: {
            title: "update title",
        }
    })
    
// akhne upsart diye jodi data thake tahole update hobe nhle new create kore debe !!
    const upsartData = await prisma.post.upsert({
        where: {
            id: 1
        },
        update: {
            authorName: "hriody"
        },
        create: {
            title: "",
            content: "hello"
        }
    })


    console.log(singleUpdate)
}

main()