import { expect, test } from '@playwright/test'
import * as fs from 'fs'
test.describe('Files Practice', () => {
test('Read Json file ', async({page})=>{
    const data1 = fs.readFileSync('Read.json','utf8');
    console.log(data1);
    const data = JSON.parse(data1);
    data.forEach((element)=>{
        console.log(element.username , element.password);
    })
})

test('Write data into Json file ', async({page})=>{
    const data1 = [
        {
          "username": "user1",
          "password": "password1"
        },
        {
          "username": "user2",
          "password": "password2"
        }
      ]
   fs.writeFileSync('Write.json',JSON.stringify(data1));
})
});