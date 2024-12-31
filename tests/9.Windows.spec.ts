import { test } from '@playwright/test'
test.describe('WindowHandle Practice', () => {
    var window = '[id="browserLink1"]'

test('Window handle', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0');
    await page.waitForTimeout(5000);
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),  // Wait for a new page
        page.click(window)  // Trigger the popup by clicking a button
      ]);
      console.log(await newPage.title());  // Print the title of the new page

  
    
})
   
});
