# Estrategia de Pruebas - QA Automation Challenge

## 1. Introducción
Este documento detalla la estrategia de automatización para validar la plataforma **SauceDemo** (Web) y la API **ReqRes** (Servicios). Se utiliza un enfoque de Page Object Model (POM) para garantizar la escalabilidad.

## 2. Escenarios de Prueba

### TC-01: Flujo de Compra E2E (Web)
**Prioridad:** Crítica
**Objetivo:** Verificar que un usuario estándar puede completar una transacción de punta a punta.
- **Precondición:** El usuario cuenta con credenciales válidas (`standard_user`).
- **Pasos:**
  1. Acceder a https://www.saucedemo.com/
  2. Realizar login exitoso.
  3. Seleccionar el producto "Sauce Labs Backpack" y añadir al carrito.
  4. Navegar al carrito y proceder al Checkout.
  5. Ingresar información de envío (Nombre, Apellido, Código Postal).
  6. Finalizar la orden.
- **Resultado Esperado:** Visualización del mensaje de confirmación: "Thank you for your order!".

### TC-02: Creación de Usuario y Validación de Contrato (API)
**Prioridad:** Alta
**Tipo:** Integración / Funcional
**Endpoint:** `POST https://reqres.in/api/users`
- **Payload:** `{ "name": "Automation Expert", "job": "QA Senior" }`
- **Validaciones:**
  1. Status Code: 201 (Created).
  2. Verificar que la respuesta incluya los campos `id` y `createdAt`.
  3. Validar que el nombre en la respuesta coincida con el enviado en el request.

## 3. Stack Tecnológico
- **Framework:** Playwright (v1.x)
- **Lenguaje:** TypeScript
- **Patrón:** Page Object Model (POM)
- **CI/CD:** GitHub Actions