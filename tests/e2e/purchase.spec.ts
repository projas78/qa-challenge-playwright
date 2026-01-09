import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';

test.describe('SauceDemo - Flujo de Compra', () => {
  
  test('Debe completar una compra de punta a punta exitosamente', async ({ page }) => {
    const login = new LoginPage(page);
    const cart = new CartPage(page);

    await login.login('standard_user', 'secret_sauce');

    await cart.completePurchase('Juan', 'Perez', '1234');

    await expect(cart.successMessage).toBeVisible();
    await expect(cart.successMessage).toHaveText('Thank you for your order!');
  });

});
