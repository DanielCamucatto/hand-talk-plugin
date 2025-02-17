import express from 'express';
import { listData } from '../services/firebase';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token de autorização não fornecido' });
    }
    const data = await listData(token);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar dados' });
  }
});

export const listRoute = router;