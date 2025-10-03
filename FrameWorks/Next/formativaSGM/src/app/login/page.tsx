"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

//responsável pela interação com o usuário, como cliques e digitação

export default function LoginPage() {
    const [username, setUsername] = useState(""); //CAMPO PARA digitação do nome de usuário
    const [password, setPassword] = useState(""); // campo para digitação da senha
    const [error, setError] = useState(""); //mensagem de erro caso ocorra

    const router = useRouter(); //rotas de navegação entre páginas

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
                // armazenar as informações do usuário no localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("userRole", data.usuario?.tipo || "");
                router.push("/dashboard"); // redireciona para a pagina principal após o login bem-sucedido
            } else {
                // data.error may be an object/string depending on the API
                const erroData = data.error || data;
                setError((erroData && erroData.message) || erroData || "Falha de login");
            }
        } catch (error) {
            console.error("Login Failed:", error);
            setError("Erro de Servidor");
        }
    }

    //react DOM
    return (
        <div className={styles.center}>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.username}>
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className={styles.password}>
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