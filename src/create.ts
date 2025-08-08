import { PrismaClient, userRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "hridoy roy 2",
    //         email: "hridy22@gmail.com",
    //         role: userRole.user
    //     }
    // })

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is my bio....",
    //         userId: 1
    //     }
    // })

    //    const createCatagory= await prisma.catagory.create({
    //     data: {
    //         name: "programing",
    //     }
    // })

       const createPost= await prisma.post.create({
        data: {
            title: "The web developer life style",
            content: "hello i am web developer my name is xyz",
            authorId: 1,
            postCatagory:{
                create:{
                    catagoryId:1
                }
            }
        },
        include:{
           postCatagory:true
        }
    })

    console.log(createPost)
}

main()