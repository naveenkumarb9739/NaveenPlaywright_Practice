import { test, expect } from '@playwright/test';

test('verify admin can create emp status', async ({ page }) => {

// //launch the url
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//enter username
await page.locator("//input[@placeholder='Username']").fill("Admin")
//enter password
await page.locator("//input[@placeholder='Password']").fill("admin123")
//click on login
await page.locator("//button[@type='submit']").click();
//verify dashboardURL
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
//click on admin
await page.locator('//span[text()="Admin"]').click()
 // click on job
  await page.locator("//span[normalize-space()='Job']").click();
  //click on jobtitle
  await page.locator()
  

})