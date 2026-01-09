QA Automation Challenge: Playwright & TypeScript
Este repositorio contiene la resolución del desafío técnico de automatización, aplicando los más altos estándares de la industria para asegurar una suite de pruebas robusta, escalable y mantenible.

Arquitectura del Proyecto
Se ha implementado el patrón de diseño Page Object Model (POM) para separar la lógica de negocio (interacciones con la UI) de las especificaciones de los tests.

Estructura de Carpetas:
docs/: Documentación estratégica (Test Plan).

pages/: Objetos de página con locators y métodos de acción.

tests/e2e/: Pruebas funcionales de extremo a extremo (Web UI).

tests/api/: Pruebas de integración de servicios.

.github/workflows/: Configuración de Integración Continua (CI).

Instalación y Configuración
Pre-requisitos
Node.js (v18 o superior recomendado).

Visual Studio Code.

Pasos iniciales
Para garantizar un entorno de ejecución aislado y reproducible, siga estos pasos:

Clonar el repositorio:

Bash

git clone <url-del-repositorio>
cd <nombre-de-la-carpeta>
Instalar las dependencias del proyecto: Este comando instalará todas las librerías necesarias (Playwright, TypeScript, etc.) en el entorno local del proyecto (node_modules).

Bash

npm install
Instalar los binarios de los navegadores de Playwright: Obligatorio para descargar los ejecutables de Chromium, Firefox y Webkit necesarios para los tests.

Bash

npx playwright install
(Opcional: Si el sistema solicita dependencias adicionales, use npx playwright install-deps).

Ejecución de Pruebas
Para mayor flexibilidad, puedes ejecutar la suite de diferentes maneras:

1. Ejecutar todos los tests (Todos los navegadores)
Bash

npx playwright test
2. Ejecutar en un navegador específico (Ej. solo Chromium)
Ideal para ejecuciones rápidas y ahorro de recursos durante el desarrollo:

Bash

npx playwright test --project=chromium
3. Ejecutar con Interfaz Gráfica (Headed mode)
Para observar las interacciones en el navegador en tiempo real:

Bash

npx playwright test --headed
4. Generar y ver el Reporte de Resultados
Playwright generará un reporte HTML detallado que incluye capturas de pantalla y videos en caso de fallos:

Bash

npx playwright show-report
Decisiones Técnicas y Buenas Prácticas
Gestión de Errores 403 en API: Se implementaron headers personalizados (User-Agent) para evitar bloqueos de seguridad en la API pública, garantizando la estabilidad del test.

BaseURL: Configurada en playwright.config.ts para permitir el cambio dinámico de entornos sin modificar el código de los tests.

Observabilidad: Se activaron los Traces y Videos en modo on-first-retry para facilitar el debugging ante posibles fallos en el entorno de CI.

Validaciones Completas: El flujo Web no solo valida navegación, sino que llega hasta el mensaje de éxito del Checkout para asegurar la integridad total del flujo de negocio.

CI/CD
El proyecto incluye un flujo automatizado en GitHub Actions que se dispara ante cada push o pull_request a la rama principal, asegurando que el código siempre esté en un estado saludable y validado.

Pasos finales para entrega:
Guarda los cambios en el archivo README.md.

Asegúrate de que todos tus cambios estén en GitHub:

Bash

git add .
git commit -m "docs: add professional README and installation guide"
git push origin main