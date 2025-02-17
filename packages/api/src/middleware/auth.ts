import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
   return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1]; // Extrai o token (remove "Bearer ")

  if (!token || (token !== process.env.TOKEN_DOMINIO_1 && token !== process.env.TOKEN_DOMINIO_2)) {
    return res.status(401).json({ message: 'Token inválido' });
}

  next();
};