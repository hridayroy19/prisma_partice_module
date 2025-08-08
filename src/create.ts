import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async () => {
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Hello title 2",
                content: "Helllo this is a contact ",
                authorName: "santona"
            },
            {
                title: "Hello title 2",
                content: "Helllo this is a contact ",
                authorName: "santona Rani"
            },
            {
                title: "Hello title 2",
                content: "Helllo this is a contact ",
                authorName: "Orobindu"
            },
            {
                title: "Hello title 2",
                content: "Helllo this is a contact ",
                authorName: "Orobindu Labbono"
            },

        ]
    })

    console.log(createMany)
}

main()