import mongoose from "mongoose";

//Componenete responsável por estabelecer a conexão com o mongo db
//converte uma string em url => 
const MONGO_URI = process.env.DATABASE_URL;

// Verificar se o arquivo enviroment(.env) foi definido

// 1º Passo - Criar e verificar o endereço de conexão
if(!MONGO_URI){
    throw new Error("Crie o .env.local com a Variável DATABASE_URL");
}

//2º Passo - Criar um arquivo Cached, para armazenar as conexões ao longo do projeto
let cached = (global as any).mongoose;

//se cached não existir (primeira vez que for fazer aceesso ao mongo)
if(!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null}
}

//3º Passo - Criar função de conexão com o db

async function connectMongo() {
    //Verificar se já existe uma conexão
    if (cached.conn) return cached.conn;

    //Se caso não existir a conexão
    if(!cached.promise){
        const aguarde = {bufferCommands: false};
        //Criar uma promessa de conexão
        cached.promise = mongoose.connect(MONGO_URI!, aguarde)
            .then((mongoose)=>{console.log("Conectado ao Mongo");
                return mongoose;
            })
    }
    //Colocar a promessa dentro da conexão promise => conn
    try {
        //Cria a conexão a pertir da promessa que estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error; // Lança um erro para o view
    }

    return cached.conn;
}

//Transformar em componente reutilizavel
export default connectMongo;