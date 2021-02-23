// // Sem TypeScript:
// 
// // UUID => Universally unique identifier
// function enviarEmail(para, id, assunto, texto)
// {
//     console.log(para, id, assunto, texto);
// }
// 
// class EnviarEmailParaUsuario
// {
//     send()
//     {
//         enviarEmail("lavineasens2000@gmail.com", 9899, "Olá!", "Tudo bem?");
//     }
// }

// Com TypeScript:

interface DadosDeEnvioEmail
{
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: DadosDeEnvioEmail)
{
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario
{
    send()
    {
        enviarEmail({
            para: "lavineasens2000@gmail.com",
            id: "9899",
            assunto: "Olá!",
            texto: "Tudo bem?"
        });
    }
}