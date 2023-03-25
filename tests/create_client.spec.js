import {test} from "@playwright/test";


test('create user ', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()

    await page.locator('.clients-add-user-dialog').click()
    await page.locator('#mat-input-1').fill('Yasirov')
    await page.locator('#mat-input-2').fill('Suleiman')

});