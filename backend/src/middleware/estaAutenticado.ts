import { Request, Response, NextFunction } from "express";

import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function estaAutenticado (
    req: Request,
    res: Response,
    next: NextFunction
){

    const autToken = req.headers.authorization;
    console.log("Authorization Header:", autToken);
    
    if (!autToken) {
        if (!autToken) {
            return res.status(401).json({ dados: 'Token Inválido' });
        }
        
    }
    
    const [, token] = autToken.split(' ')
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRETO as string
        ) as Payload;
        req.usuarioId = sub
        return next()
    } catch(err) {
        console.log("Token inválido:", err);
        return res.status(401).json({ dados: 'Token Inválido' });
    }

}