let {test, expect} =require('@playwright/test')

test('home page',async ({page})=>{

    await page.goto('https://www.facebook.com/')

    let pageTitle= page.title();
    console.log('page title is', pageTitle)

  await  expect(page).toHaveTitle('facebook');
  await expect(page).toHaveURL('https://www.facebook.com/');
    await page.close();

} )