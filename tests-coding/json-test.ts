
import { test } from '@playwright/test';
import users from './../Test-data/test-data.json'
 
test('demo', async () => {

  for(const user of users){
    console.log(user.user);
    console.log(user.pass);
  }

});
