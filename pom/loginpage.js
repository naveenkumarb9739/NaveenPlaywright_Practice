import { expect } from '@playwright/test';

export class loginPage {

   constructor(page){
      
      this.page = page
      this.logo = page.locator('//img[@alt="company-branding"]')
      this.usernameInput = page.locator('input[name="username"]')
      this.passwordInput = page.getByPlaceholder('Password')
      this.loginBtn = page.locator('button[type="submit"]')
      this.loginErrorMessage = page.locator("//p[text()='Invalid credentials']")
   }

   async launchUrl(){

       this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   }

   async verifyLogo(){

      await  expect(this.logo).toBeVisible()
   }

   async loginwithCreds(username, password){
    
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginBtn.click()
    
   }

   async loginSuccess(){

    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   }

   
}

