// auxiliar de conexão comm o mongodb
//arrow function

import mongoose from "mongoose";

const connectMongo = async () =>{
    mongoose.connect(process.env.DATABASE_URL)  //eSTABELECE a conexão com o mongodb 
        .then(()=>console.log("Conectado ao Mongo"))
        .catch((err)=>console.error("Erro ao conectar com o Mongo",err));
}

export default connectMongo;