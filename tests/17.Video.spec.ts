import { expect, test } from '@playwright/test'
test.describe('Videos Practice', () => {
test('Global Video file ', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});

test.skip('File Video file ', async({page})=>{
    test.use({video:'off'})
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});
});