import mongoose from 'mongoose'

export const ConnectDb = async(dbstring,dbname)=>{
    try {
        await mongoose.connect(dbstring + dbname)
        console.log('database connected successfuly')
    } catch (error) {
        
    }
}