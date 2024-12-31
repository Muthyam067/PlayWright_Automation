import{test} from '@playwright/test'
import * as fs from 'fs';


test('web table handling',(async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const rows =await page.$$('[name="courses"] tr');
    await page.waitForLoadState();
    console.log(rows.length);
   // const tableData;
  const ab =  await Promise.all(rows.map(async(row)=>{
      //  console.log(await row.textContent());
      const column = await row.$$('td');
      await page.waitForLoadState('domcontentloaded');
      return {
      column1 :await column[0]?.textContent(),
       column2 :await column[1]?.textContent(),
       column3 :await column[2]?.textContent()
      }
    }));
    console.log("hello ",ab)
    fs.writeFileSync('example.json',JSON.stringify(ab));


    // Read json file
    const jsonData = await fs.readFileSync('example.json','utf-8');
    console.log(jsonData)
   const data = JSON.parse(jsonData);
    console.log(data);
}))