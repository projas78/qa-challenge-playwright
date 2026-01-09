import { test, expect } from '@playwright/test';

test('Validación de API - JSONPlaceholder', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'QA Senior Test',
        body: 'Desafío Técnico',
        userId: 1,
      }
    });
  
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Senior Test');
    console.log('API Response Success:', body);
  });
