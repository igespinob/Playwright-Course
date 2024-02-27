import {test, expect} from '@playwright/test';


test.beforeEach(async ({page}) => {

  //Navigate to Page
  await page.goto('https://www.thewarehouse.co.nz/', {waitUntil: 'domcontentloaded'});
  await expect.soft(page).toHaveURL('https://www.thewarehouse.co.nz/');

});

test.describe.parallel("Navigate 1", async () =>
{
    test("Navigate to Launge of Warehouse website", async ({page, browserName}) => {

        test.skip(browserName === 'firefox', 'The browser does not support the feature');
   
        await test.step("Hover on category menu", async () =>{

            //Hover
            await page.locator('data-test-id=category-root').hover();
            await expect(page).toHaveURL('https://www.thewarehouse.co.nz/');

        });   
    });

    test("Just expect the page URL ", async ({page}) => {
   
        await expect(page).toHaveURL('https://www.thewarehouse.co.nz/'); 
    });

});

test.describe("Navigate 2", async () => {

    test("Navigate to Launge of Warehouse website 2", async ({page, browserName}) => {
   
        test.slow(browserName === 'webkit', 'The browser does not support the feature');

        await test.step("Hover on category menu", async () =>{

            //Hover
            await page.locator('data-test-id=category-root').hover();
            await expect(page).toHaveURL('https://www.thewarehouse.co.nz/');

        });
    
    });
    
});


test.afterEach(async ({page}, testInfo) => {

    await page.screenshot({path: `screenshots/${testInfo.title.trim()}.png`});

});

