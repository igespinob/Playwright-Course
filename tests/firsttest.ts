import {chromium} from '@playwright/test';

//Crear el contexto y la pagina del browser para los tests
//Bloque asincorno
(async () => {

    //Crear la instancia del browser
    const browser = await chromium.launch({
        headless: false,
        slowMo: 2000
    });

    //Browser instance
    const browserInstance = await browser.newContext();

    //Page
    const page = await browserInstance.newPage();

    //Navigate to Google
    await page.goto('https://google.es');

    //Close the browser
    await browser.close();


})();

