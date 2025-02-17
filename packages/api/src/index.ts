import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

console.log("TOKEN_DOMINIO_1:", process.env.TOKEN_DOMINIO_1);
console.log("TOKEN_DOMINIO_2:", process.env.TOKEN_DOMINIO_2);
console.log("PORT:", process.env.PORT);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});