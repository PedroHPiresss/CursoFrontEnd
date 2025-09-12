//Rotas que não precisam especificar o id

import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

//GET
export async function GET(){
    try {
        const tarefas = await getAllTarefas();
        return NextResponse.json({success:true, data:tarefas}, {status: 200});
    } catch (error) {
        return NextResponse.json ({
            success: false,
            error: `Falha ao buscar as tarefas: ${error}`
        }, {status:500});
    }
}

//POST
export async function POST(req:NextRequest) {
    try {
        const data = await req.json(); // Verifico se está escrito no formato json
        const newTarefa = await createTarefa(data);
        return NextResponse.json({success:true, data:newTarefa}, {status: 201});
    } catch (error) {
        return NextResponse.json ({
            success: false,
            error: `Falha ao inserir tarefas: ${error}`
        }, {status:500});
    }
}