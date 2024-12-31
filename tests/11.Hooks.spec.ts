import { test } from '@playwright/test'
test.describe('Hooks Practice', () => {
    // test.beforeAll(() => {
    //     console.log("File level Before All");
    // })
    // test.afterAll(() => {
    //     console.log("File level After All");
    // })
    // test.afterAll(() => {
    //     console.log("File level After All 2");
    // })

    test.beforeEach(async({page}) => {
        console.log("File level Before Each");
    })
    test.afterEach(async({page},testInfo) => {
        console.log("File level After Each:", testInfo.title, testInfo.status);
        if(testInfo.status=='failed'){
            await page.screenshot();
        }
    })

    test('First testcase',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });

        console.log("First testcase");
    })
    test('second testcase',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: "load" });

        console.log("First testcase");
    })
});
