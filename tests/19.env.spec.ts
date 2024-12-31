import {test} from '@playwright/test'
test.describe('ENV  Practice', () => {
test.only('Global Video file ', async({page})=>{
    const url =process.env.BASE_URL
    console.log("Env:",url);
    await page.goto('/')
    
});
});
// command npx cross-env NODE_ENV=test npx playwright test