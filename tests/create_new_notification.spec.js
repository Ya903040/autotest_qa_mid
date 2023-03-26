const {test } = require('@playwright/test');


test('create new notification', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()

    await page.click('a:text("Уведомления")')
    await page.click('button:text("Добавить новое уведомление")')

    await page.waitForTimeout(500)

    await page.locator(".ng-pristine").nth(-2).fill("test_notification")
    await page.locator('.push-modal-preview__text').nth(-1).fill('idk == i do not know')

    await page.locator('text=Тип уведомления').nth(-1).click()
    await page.click('span:text("Push")')

    await page.locator('.push-select-second').click()
    await page.locator('.ui-state-default').last().click()


    await page.locator('.material-icons').nth(2).click()

    await page.locator('text=Template name').nth(-1).click()

    await page.locator('.material-icons').nth(-2).click()


    await page.locator('.push-col-save').click()





    await page.waitForTimeout(500)
});