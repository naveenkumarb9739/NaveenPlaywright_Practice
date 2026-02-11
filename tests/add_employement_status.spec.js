import { test, expect } from '@playwright/test';

test('verify admin can create emp status', async ({ page }) => {

  // launch the url
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // enter username
  await page.locator("//input[@placeholder='Username']").fill("Admin");

  // enter password
  await page.locator("//input[@placeholder='Password']").fill("admin123");

  // click on login
  await page.locator("//button[@type='submit']").click();

  // verify dashboard URL
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" );

  // click on admin
  await page.locator("//span[text()='Admin']").click();

  // click on job
  await page.locator("//span[normalize-space()='Job']").click();

  // click on employment status
  await page.locator("//a[normalize-space()='Employment Status']").click();

  // click on add button
  await page.locator("//button[contains(.,'Add')]").click();

  // enter employment status
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("parttimer1223");

  // click on save
  await page.locator('//button[@type="submit"]').click()

 await expect(page.locator('')).toBeVisible()

});
