//PATCH e DELETE que usam ID para fazer requisições http

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

interface Parametros{
    id:string
}
//params -> Next precisa dos params para dar acesso ao segmento da url
//params.id => "/api/tarefas/123" => transforma os params em endereço url
export async function PATCH(req: NextRequest, {params}:{params:Parametros}) {
    try {
        const{id} = params;
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id,data);
        //vou ter 2 respostas
        if(!tarefaAtualizada) {
            return NextResponse.json({success:false, error: "not found"},{status:404});
        }
        return NextResponse.json({success:true, data:tarefaAtualizada}, {status:200});
    } catch (error) {
        return NextResponse.json ({
            success: false,
            error: `Falha ao atualizar a tarefa: ${error}`
        }, {status:500});
    }
}

//DELETE
export async function DELETE({params}:{params:Parametros}){
    try {
        const {id} = params;
        const resultado = await deleteTarefa(id);
        //2 Possibilidades
        if(!resultado){
            return NextResponse.json({success:false, error:"Not found"},{status:404})
        }
    } catch (error) {
        return NextResponse.json ({
            success: false,
            error: `Falha ao deletar a tarefa: ${error}`
        }, {status:500});
    }
}