import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userInput: Locator;
  readonly passInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userInput = page.locator('[data-test="username"]');
    this.passInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
  }

  /**
   * Navega a la página base definida en el config
   */
  async navigate() {
    await this.page.goto('/');
  }

  /**
   * Realiza el flujo de login completo
   * @param user Nombre de usuario
   * @param pass Contraseña
   */
  async login(user: string, pass: string) {
    await this.navigate(); // Llama a la navegación interna
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.loginBtn.click();
  }
}