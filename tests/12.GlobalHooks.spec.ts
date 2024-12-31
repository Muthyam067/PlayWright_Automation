import { test } from '@playwright/test'

test.describe('Global Hooks Practice', () => {

    test('First testcase', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });

        console.log("First testcase");
    })
    test('second testcase', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });

        console.log("First testcase");
    })
})