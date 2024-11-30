import userModel from "../Model/userModel.js";

export const createUserService = async(userData)=>{
    try {
        const create = await userModel(userData)
        const saveUser= await create.save()
        return saveUser
    } catch (error) {
        console.log(error)
    }
}