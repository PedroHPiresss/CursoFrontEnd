"use-client";
import { useRouter } from "next/router";
import { useState } from "react";

//responsável pela interação com o usuário, como cliques e digitação

export default function LoginPage() {
    const [username, setUsername] = useState(""); //CAMPO PARA digitação do nome de usuário
    const [password, setPassword] = useState(""); // campo para digitação da senha
    const [error, setError] = useState(""); //mensagem de erro caso ocorra

    const route = useRouter(); //rotas de navegação entre páginas

    //METODO PARA  enviar login
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();// evita o recarregamento da pagina
        setError("");

        try {
            const response = await fetch(
                "/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }
            );
            //analisar a resposta do fetch
            const data = await response.json()
            if (data.success) {
                //armazenar as nformações do usuário no localStorage
                localStorage.setItem("token", data.token); //armazena o tekne
                localStorage.setItem("userRole", data.usuario.tipo); //armazena o tipo de usuário
                route.push("/dashboard") //redireciona para a pagina principal após o login bem-sucedido
            } else {
                const erroData = data.error();
                setError(erroData.message || "Falha de login");
            }
        } catch (error) {
            console.error("Login Failed:", error);
            setError("Erro de Servidor");
        }
    }

    //react DOM
    return (
        <div className="center">
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className="password">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}