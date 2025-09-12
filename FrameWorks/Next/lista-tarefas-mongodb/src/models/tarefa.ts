//definir primeiro a estrutura do obj

import mongoose, { Document, Model, Schema } from "mongoose";

export interface Itarefa extends Document{
    //herdamos a base Document do mongoose
    //Vamos criar os atributos do obj
    titulo: string;
    concluida:boolean;
    criadaEm:Date;
}

//Vamos criar a regra do Schema

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type:String,
        required:[true, "O título é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm:{
        type: Date,
        default: Date.now //Pega o carimbo de data e hora 
    }
});

const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa",TarefaSchema);

//Componente reutilizável
export default Tarefa;