import { expect, test } from '@playwright/test';

test.describe('DropDown Handling', () => {
   
    test('Select and deSelect for single drop down', async({page}) => {
        await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        page.locator('select[id="select2"]').selectOption('Male');
        await page.waitForTimeout(3000);
        page.locator('select[id="select2"]').selectOption('');
        await page.waitForTimeout(3000);
        page.locator('select[id="select2"]').selectOption('Female');
        page.selectOption('select[id="select2"]',{index:0})
        await page.waitForTimeout(3000);
       
    });

    test.skip('Select and deSelect for Mult select drop down', async({page}) => {
        await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        page.locator('select[id="select2"]').selectOption(["option1","option2","opyion3"]);
        await page.waitForTimeout(3000);
        // deselect
        page.locator('select[id="select2"]').selectOption('');
        await page.waitForTimeout(3000);
        
    });
});
