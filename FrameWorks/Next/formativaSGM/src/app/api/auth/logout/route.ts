//rota pra fazer o logout AAAAAAAA

export async function POST() {
    //remove o token do lado do cliente 
    return new Response(null, JSON.stringify(
        {status: 204, message: "Logout realizado com sucesso!!!!!!!!!!!!!"}
    ));
}