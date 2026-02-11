import { test, expect } from '@playwright/test';

('verify admin can create emp status', async ({ page }) => {

  // Launch URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  // Login
  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();

  // Verify dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Click Admin
  await page.locator("//span[text()='Admin']").click();

  // Job → Employment Status
  await page.locator("//span[normalize-space()='Job']").click();
  await page.locator("(//a[@role='menuitem'])[3]").click();

  // Click Add
  await page.locator("//button[.//i]").first().click();

  // Enter employment status (stable locator)
  const empStatus = 'tester';
  await page.locator("//label[text()='Name']/../following-sibling::div//input").fill(empStatus);

  // Save
  await page.locator("//button[@type='submit']").click();

  // Verify URL
  await expect(page).toHaveURL(/employmentStatus/);

  // Verify status is displayed
  await expect(
    page.locator(`//div[normalize-space()='${empStatus}']`) ).toBeVisible();

  // Close browser (optional)
  await page.close();
});
