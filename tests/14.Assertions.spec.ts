import { expect, test } from '@playwright/test'
test.describe('Assertions Practice', () => {
test.skip('Assertions ', async({page})=>{
    var element =page.locator("");
    expect("value").toBe("expected");
    expect("value").toBeNull();
    expect("value").toBeFalsy();
    expect("value").toBeGreaterThan(8);
    expect("value").toEqual("value");
    expect("array").toHaveLength(0);
    await expect(page.locator("")).toBeVisible();
    await expect(element).toHaveClass('expected-class');
    await expect(element).toBeChecked();
    await expect(page.locator('div')).toHaveCount(9);
    await expect(element).toHaveAttribute('attributeName', 'expectedValue');
});
});