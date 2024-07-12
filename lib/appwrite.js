import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite"
import SignIn from "../app/(auth)/sign-in";

export const config={
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.jsm.native5",
    projectId:'6690d188003a087eca35',
    databaseId:"6690d2fe003c30100a23",
    usersCollection:"6690d71e0028351d37f5",
    videoCollection:"6690d7db0026fa171929",
    storageId:"6690d8b7003bdb2cd332"
}
const client=new Client();

client
.setEndpoint(config.endpoint)
.setProject(config.projectId)
.setPlatform(config.platform)

const account= new Account(client)
const avatars= new Avatars(client)
const dataBases= new Databases(client)

export const createUser=async (email,password,username)=>{
   try{
   const newAccount=await account.create(
    ID.unique(),
    email,
    password,
    username

   )
   if(!newAccount) throw Error
   const  avatarUrl=avatars.getInitials(username)
   await signIn(email,password)
   const newUser= await dataBases.createDocument(
    config.databaseId,
    config.usersCollection,
    ID.unique(),
    {
        accountId:newAccount.$id,
        email,
        username,
        avatar:avatarUrl
    }

   )
   return newUser
   }catch(error){
     console.log(error)
   }
    
}

export async function signIn(password, email){
    try{
        const session=await account.createEmailPasswordSession(email,password)
        return session
    }catch(error){
        console.log(error)
    }
}