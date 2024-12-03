import { Request, Response, NextFunction } from "express";

import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export  function estaAutenticado (
    req: Request,
    res: Response,
    next: NextFunction
){

    const autToken = req.headers.authorization?.split(" ")

        if (!autToken) {
            return res.status(401).json({ dados: 'Token Inválido' });
        }
    
    
    try {
        const { sub } = verify(
            autToken[1],
            process.env.JWT_SECRETO
        ) as Payload;
        req.usuarioId = sub
        console.log(req.usuarioId);

        
        return next()
    } catch(err) {
        console.log("Token inválido:", err);
        return res.status(401).json({ dados: 'Token Inválido' });
    }
}

