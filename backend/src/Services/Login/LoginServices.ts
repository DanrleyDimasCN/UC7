import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface Login {
    email: string
    senha: string
}

class LoginServices {
    async loginUsuarios({email, senha}: Login) {
       const usuario = await prismaClient.usuario.findFirst({
        where: {
            email: email
        }
       })
       if(!usuario) {
        throw new Error ('Usuario ou Senha incorretos');
       }

       const token = sign({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
       },
        process.env.JWT_SECRETO as string,
        {
            subject: usuario.id,
            expiresIn: '8h'
        }) 

       const senhaCrypt = await compare(senha, usuario.senha)

       return {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        token: token
       }
       
        
    }

    async verificaToken(id: string) {
        const resposta = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                id: true
            }
        })
        return resposta
    }
}



export { LoginServices }