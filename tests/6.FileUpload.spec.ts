import { expect, test } from '@playwright/test';
var upload = 'input[id="fileInput"]';

test.describe('File Upload Practice', () => {
    
    test('upload single file', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');
        await page.locator(upload).setInputFiles("C:/Users/DELL/Downloads/Node_API_Test_Report.pdf");
        await page.waitForTimeout(5000);

    });
    test('upload Multiple  file', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');
        await page.getByText('Multiple select').click();
        await page.waitForTimeout(3000);
        await page.locator(upload).setInputFiles(["C:/Users/DELL/Downloads/Node_API_Test_Report.pdf", "C:/Users/DELL/Downloads/Sitefinity_API_Test_Report.pdf"]);
        await page.waitForTimeout(5000);

    });
    test.skip('custom file upload', async ({ page }) => {
        await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');
        await page.getByText('Custom Button').click();
        await page.waitForTimeout(3000);
        await page.locator('div').getByText('Upload File',{exact:true}).setInputFiles("C:/Users/DELL/Downloads/Sitefinity_API_Test_Report.pdf");
        await page.waitForTimeout(5000);

    });
    
});
/*
Error: locator.setInputFiles: Error: Non-multiple file input can only accept single file
Call log:
  - waiting for locator('input[id="fileInput"]')
    - locator resolved to <input type="file" name="file" id="fileInput" class="ps-[30%]"/>
    */