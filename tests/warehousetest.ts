import {chromium} from '@playwright/test';

//Crear el contexto y la pagina del browser para los tests
//Bloque asincorno
(async () => {

    //Crear la instancia del browser
    const browser = await chromium.launch({
        headless: false,
        devtools: true,
        slowMo: 2000
    });

    //Browser instance
    const browserInstance = await browser.newContext({
        recordVideo: {
            dir: 'video/'
        }
    });

    //Page
    const page = await browserInstance.newPage();

 
    //Navigate to Page
    await page.goto('https://www.thewarehouse.co.nz/', {waitUntil: 'domcontentloaded'});


    //Hover
    await page.locator('data-test-id=category-root').hover();


    //Close the browser
    await browser.close();

})();

