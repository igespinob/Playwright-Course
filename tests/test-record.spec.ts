import { test, expect } from '@playwright/test';

//Test simple para hacer una grabación automatica del test. Los expects no se autogeneran
test('record example', async ({ page }) => {

await page.goto('http://eaapp.somee.com/');

await page.getByRole('link', { name: 'Login' }).click();

await page.getByLabel('UserName').click();

await page.getByLabel('UserName').fill('admin');

await page.getByLabel('Password').click();

await page.getByLabel('Password').fill('password');

await page.getByRole('button', { name: 'Log in' }).click();
await expect(page).toHaveURL('http://eaapp.somee.com/');

await page.getByRole('link', { name: 'Employee List' }).click();
await expect(page).toHaveURL('http://eaapp.somee.com/Employee');

});