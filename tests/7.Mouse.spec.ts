import { expect, test } from '@playwright/test';
import { parseEnv } from 'util';
var doubleClick = 'button[id="dblclick"]';
var rightClick = 'button[id="rightclick"]';
var source='div[id="draggableElement"]'
var destination='div[id="droppableElement"]'
test.describe('Mouse  Handle Practice', () => {
    
    test('Double Click', async ({ page }) => {
       await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.locator(doubleClick).dblclick();
        const text = await page.locator('p[id="demo"]').textContent();
        console.log("Double click message:",text);
    });

    test('Right Click', async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.locator(rightClick).click({button:'right'});
        const text = await page.locator('ul center').first().textContent();
        console.log("Right click message:",text);
    });
    test('Mouse Over', async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.locator('[title="Enter First Name"]').hover();
    });

    test('Drag and Drop', async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.dragAndDrop(source,destination);
        await page.waitForTimeout(5000);
    });

    test('Drag and Drop by Mouse Methods', async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.hover(source);
        await page.mouse.down();
        await page.hover(destination);
        await page.mouse.up();
        await page.waitForTimeout(5000);
    });

    test.skip('Mouse Methods', async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/mouse-event');
        await page.click('selector',{button:'left',delay:5});
        await page.dblclick('selector',{button:'right'});
        await page.mouse.click(10,10);
        await page.mouse.dblclick(10,100);
        await page.mouse.down({button:'left'});
        await page.mouse.up();
        await page.mouse.move(100,100);
        await page.mouse.wheel(100,100);
    });

    
});