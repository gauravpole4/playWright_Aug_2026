import { test } from '@playwright/test'
import userData from './../Test-data/test-data.json' with { type: 'json' };

test('json-data', async({page})=>{

    for(const user of userData){
        console.log(user);
    }


})

