import { expect, test } from '@playwright/test'
test.describe('Groups Practice', () => {
    test.describe.configure({mode:'parallel'});
test('test1',{tag:'@smoke'},async({page})=>{
    console.log("test1")
    
});
test('test2',{tag:'@smoke'}, async({page})=>{
    console.log("test1")
    
});
test('test3', {tag:'@regression'},async({page})=>{
    console.log("test1")
    
});
test('test4',{tag:'@regression'}, async({page})=>{
    console.log("test1")
    
});
test('test5', {tag:'@regression'},async({page})=>{
    console.log("test1")
    
});
});
//npx playwright test --grep "@smoke" -- for tagging
//npx playwright test --grep "test"  -- for testname

// npx playwright test --config=playwright.config.test.ts 
//  testMatch: ['**/testFile1.spec.ts', '**/testFile2.spec.ts', '**/testFile3.spec.ts'], // List of test files


 