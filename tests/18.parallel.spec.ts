import { expect, test } from '@playwright/test'
test.describe('Executtion Practice', () => {
    test.describe.configure({mode:'parallel'});
test('test1', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});
test('test2', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});
test('test3', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
});
});