import request from 'supertest';
import app from '../src/app';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' }); // Carrega as variáveis de ambiente de teste

describe('API Tests', () => {
  it('should collect data successfully', async () => {
    const data = {
      device: 'test',
      operatingSystem: 'test',
      origin: 'test',
      themeChangesCount: 0
    };

    const response = await request(app)
      .post('/collect')
      .set('Authorization', process.env.TOKEN_DOMINIO_1) // Usa a variável de ambiente
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Dados coletados com sucesso');
  });

  it('should return 401 if token is not provided', async () => {
    const response = await request(app)
      .post('/collect')
      .send({}); // Não envia o token

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Token não fornecido');
  });

  it('should return 401 if token is invalid', async () => {
    const response = await request(app)
      .post('/collect')
      .set('Authorization', 'token_invalido') // Token inválido
      .send({});

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Token inválido');
  });

  // Adicione mais testes para outros cenários, como limite de requisições, etc.
});