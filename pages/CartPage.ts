import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly addBackpackBtn: Locator;
  readonly cartIcon: Locator;
  readonly checkoutBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.zipCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async completePurchase(name: string, surname: string, zip: string) {
    await this.addBackpackBtn.click();
    await this.cartIcon.click();
    await this.checkoutBtn.click();
    await this.firstName.fill(name);
    await this.lastName.fill(surname);
    await this.zipCode.fill(zip);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}