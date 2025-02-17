import express from 'express';
import { saveData } from '../services/firebase';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    await saveData(token, data);

    res.status(200).json({ message: 'Dados coletados com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao coletar dados' });
  }
});

export const collectRoute = router;