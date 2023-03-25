import {test} from "@playwright/test";


test('create user ', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()

    await page.locator('.clients-add-user-dialog').click()
    await page.locator('#mat-input-1').fill('Yasirov6')
    await page.locator('#mat-input-2').fill('Suleiman6')
    await page.locator('#mat-input-3').fill('Tvumarovich6')
    await page.locator('#mat-radio-2').click()
    await page.locator('#mat-input-4').fill('yasirovsuleiman6@gmail.com')
    await page.locator('#mat-input-5').fill('999999916')



    await page.locator('#mat-input-6').fill('03.03.2004')
    await page.locator("[name=save]").click()
    await page.waitForTimeout(500)
});