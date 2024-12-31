import { expect, test } from '@playwright/test';
var upload = 'input[id="fileInput"]';

test.describe('IFrames Practice', () => {

    test('single IFrame', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        const frame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' });
        const frame1 = page.frameLocator('[id="singleframe"]');
        frame1.locator('[type="text"]').fill("singleIframe");
        await page.waitForTimeout(5000);
    });

    test('Nested  IFrame', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        await page.getByText('Iframe with in an Iframe', { exact: true }).click();
        const parentFrame = page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });
        const childFrame = parentFrame?.frameLocator('[src="SingleFrame.html"]')
        childFrame?.locator('[type="text"]').fill("Nested Iframe");
        await page.waitForTimeout(5000);
    });

    test('Multiple IFrame', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Frames.html');
        const framsList = page.frames();
        console.log("number of frames", framsList.length);

    });
});
