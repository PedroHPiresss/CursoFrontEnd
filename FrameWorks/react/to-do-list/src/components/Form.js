//Componente para criar um formulário para inserir uma nova tarefa
//Função para adicionar tarefa (arrow function)
import "./Form.css"; //importa a estilização

import { useState } from "react"

const Form = ({addTarefa}) => {

    //vetor para armazenar o valor do input com o useState
    const [tarefa, setTarefa] = useState("");
    //useState => usa a memória local do navegador para armanzenar as mudanças de estado
    //para armazenar as mudanças de estado
    //primeiro elemento do vetor [] armazena as tarefas,
    //segundo elemento armazena as mudanças de estado

    //Função para atualizar o estado com o valor do input
    //Função vai criar uma nova tarefa ao ser clicado o botão do submit(enviar)
    const handleSubmit = (e) =>{ //arrowFunction
        //impedir o funcionameno padrão do botão submit
        e.preventDefault(); //Não permite o recarregamento da página
        //verificar se o campo não está vazio
        if(tarefa.trim() !== ""){
            //adicionar a tarefa ao vetor de tarefas
            addTarefa(tarefa);
            //limpo o campo di input
            setTarefa("");
        }
    };
    //Lógica por trás do design
    //view
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Inserir Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button className="btnEnviar" type="submit">
                Adicionar
            </button>
        </form>
    );
};

export default Form;
//Componente cria o formulário das tarefas
//Pode ser reutilizado em outros componentes da aplicação (export)

