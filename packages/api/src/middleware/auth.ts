import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware authMiddleware iniciado");

  const authHeader = req.headers.authorization;
  console.log("authHeader:", authHeader);

  if (!authHeader) {
      console.log("Header Authorization não encontrado"); 
      return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];
  console.log("Token:", token); 

  if (!token || !(token === process.env.TOKEN_DOMINIO_1 || token === process.env.TOKEN_DOMINIO_2)) {
      console.log("Token inválido"); 
      return res.status(401).json({ message: 'Token inválido' });
  }

  console.log("Token válido"); 
  next();
};