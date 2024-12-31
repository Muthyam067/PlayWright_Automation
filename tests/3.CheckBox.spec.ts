import { expect, test } from '@playwright/test';

test.describe('Check box Handling', () => {
    var checkBoxes = '[type="checkbox"] +span'
    var checkBoxInput = '[type="checkbox"]'

    test('Print all Check boxes by Locator Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        await page.waitForTimeout(5000);
        const checkBoxElements = page.locator(checkBoxes);
        const length = await checkBoxElements.count();
        for (let i = 0; i < length; i++) {
            const checkBoxName = await checkBoxElements.nth(i).textContent();
            console.log("Printing checkBox by locator method: ", checkBoxName);

        }
    });

    test('Print all Check boxes by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        await page.waitForTimeout(5000);
        const checkBoxElements = await page.$$(checkBoxes);
        const length = checkBoxElements.length;
        for (const checkBoxElement of checkBoxElements) {
            const checkBoxName = await checkBoxElement.textContent();
            console.log("Printing checkBox by $$ method: ", checkBoxName);
        }
    });

    test('Check & uncheck checkBox  by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        await page.waitForTimeout(3000);
        const checkBoxElements = await page.$$(checkBoxInput);
        const length = checkBoxElements.length;
        for (const checkBoxElement of checkBoxElements) {
            const checkBox = await checkBoxElement.$('+span');
            const checkBoxName = await checkBox?.textContent();
            if ((checkBoxName === 'WhatsApp') || (checkBoxName === 'Flipper')) {
                checkBoxElement.check();
                await page.waitForTimeout(3000);

            }
        }
    });


    test('Validate check box is checked by $$ Method', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');
        await page.waitForTimeout(3000);
        const checkBoxElements = await page.$$(checkBoxInput);
        const length = checkBoxElements.length;
        for (const checkBoxElement of checkBoxElements) {
            const checkBoxButton = await checkBoxElement.$('+span').then(async (checkBox) => {
                const checkBoxName = await checkBox?.textContent();
                if (checkBoxName === 'WhatsApp') {
                    checkBoxElement.check();
                    await page.waitForTimeout(3000);
                    console.log(`is this ${checkBoxName} checked:`, await checkBoxElement.isChecked());
                    expect(await checkBoxElement?.isChecked).toBeTruthy;
                }

            });

        }
    });

});
/*
Error: locator.check: Error: Not a checkbox or radio button
Call log:
- waiting for locator('//div[@id=\'radio-btn-example\']//label').first()
 - locator resolved to <label for="radio1">…</label>

Error: locator.uncheck: Clicking the checkbox did not change its state
Call log:
- waiting for locator('//div[@id=\'radio-btn-example\']//label').locator('input').first()
 - locator resolved to <input type="radio" value="radio1" name="radioButton" class="radioButton"/>
- attempting click action
 - waiting for element to be visible, enabled and stable
*/