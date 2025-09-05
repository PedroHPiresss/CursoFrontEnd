//Basear meu modelo no schema da coluna

import mongoose from "mongoose"

const TarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O Título é obrigatório"],
        trim: true,
        maxlength: [100, "O Título < 100 char"]
    },
    concluida: {
        type: Boolean,
        default: false, //toda tarefa recém riada não está concluida
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Tarefa || mongoose.model("Tarefa", TarefaSchema);
// Vai exportar o modelo como tarefas caso não exista uma tarefa no banco,
// caso já exista uma tarefa.