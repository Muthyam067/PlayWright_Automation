import { expect, test } from '@playwright/test'

test.describe('Groups Practice', () => {
    test.describe.configure({mode:'parallel'});
test.only('test1',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});

//npx playwright test --project=chromium
//npx cross-env NODE_ENV=test npx playwright test
// npx playwright test --config=playwright.custom.config.ts


});