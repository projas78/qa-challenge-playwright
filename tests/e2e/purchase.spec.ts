import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';

test.describe('SauceDemo - Flujo de Compra', () => {
  
  test('Debe completar una compra de punta a punta exitosamente', async ({ page }) => {
    const login = new LoginPage(page);
    const cart = new CartPage(page);

    // 1. Login
    await login.login('standard_user', 'secret_sauce');

    // 2. Proceso de compra completo (desde agregar producto hasta finalizar)
    // Usamos datos ficticios para el checkout
    await cart.completePurchase('Juan', 'Perez', '1234');

    // 3. Validación Final (Punto 4 del Challenge: Asegurar validación completa)
    // Verificamos que aparezca el mensaje de éxito "Thank you for your order!"
    await expect(cart.successMessage).toBeVisible();
    await expect(cart.successMessage).toHaveText('Thank you for your order!');
  });

});