import { test } from '@playwright/test';

test.describe('Input Handling', () => {
    const register = {
        userNameField: 'input[name="name"]',
        emailField: 'input[name="email"]',
        passWordField: 'input[name="password"]',
        registerButton: 'button'
    }

    test('Register into QSpider demo site', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        await page.locator(register.userNameField).fill("Admin");
        await page.locator(register.emailField).fill("a@gmail.com");
        await page.locator(register.passWordField).fill("password");
        await page.waitForTimeout(5000);
        await page.locator(register.registerButton).getByText('Register', { exact: true }).click();

    })

    test('Get Attributes from Register Page of Qspider', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const attrValue1 = await page.locator(register.userNameField).getAttribute('placeholder');
        console.log("Print placeholder of userNameFiled: " + attrValue1);
        const attrValue2 = await page.locator(register.emailField).getAttribute('placeholder')
        console.log("Print placeholder of emailField: " + attrValue2);
        const attrValue3 = await page.locator(register.passWordField).getAttribute('placeholder')
        console.log("Print placeholder of passWordField : " + attrValue3);
        await page.waitForTimeout(5000);

    })


    test('States of elementsRegister into QSpider demo site', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui');
        const userName = page.locator(register.userNameField);
        await page.waitForTimeout(5000);
        const isVisible = await userName.isVisible();
        const isEditable = await userName.isEditable();
        const isEnabled = await userName.isEnabled();
        console.log("Status of an element:", isVisible, isEditable, isEnabled);
        if (isVisible && isEditable && isEnabled) {
            await page.locator(register.userNameField).fill("Admin");
        }

    })

})