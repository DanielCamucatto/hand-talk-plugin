import request from 'supertest';
import app from '../src/app';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' }); 

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
      .set('Authorization',  `Bearer ${process.env.TOKEN_DOMINIO_1}`) 
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Dados coletados com sucesso');
  });

  it('should return 401 if token is not provided', async () => {
    const response = await request(app)
      .post('/collect')
      .send({});

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Token não fornecido');
  });

  it('should return 401 if token is invalid', async () => {
    const response = await request(app)
      .post('/collect')
      .set('Authorization', 'token_invalido') 
      .send({});

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Token inválido');
  });

});