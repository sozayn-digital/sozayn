import request from 'supertest';
import { createServer } from '@/lib/services/server';

describe('GET /api/orders', () => {
  it('should return orders with correct structure', async () => {
    const app = createServer();
    
    const response = await request(app)
      .get('/api/orders')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('totalAmount');
  });
});