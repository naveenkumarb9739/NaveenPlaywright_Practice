import { expect } from '@playwright/test';

export class addEmployeePage {

    constructor(page){ 
        this.page = page;

        this.pimMenu = page.locator('(//a[@class="oxd-main-menu-item"])[2]');
        this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });

        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });

        this.uploadImage = page.locator('//input[@type="file"]');

        this.employeeIDInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');

        this.saveBtn = page.getByRole('button', { name: 'Save' });

        this.personalDetails = page.getByRole('heading', { name: 'Personal Details' });

        this.firstnameErrorMsg = page.locator("(//span[text()='Required'])[1]");
        this.lastnameErrorMsg = page.locator("(//span[text()='Required'])[2]");

        // Edit locators
        this.editFirstName = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.saveEditedEmployee = page.getByRole('button', { name: 'Save' });

        // Delete locators
        this.employeeListLink = page.getByRole('link', { name: 'Employee List' });
        this.searchEmployeeId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.searchBtn = page.getByRole('button', { name: 'Search' });

        this.deleteBtn = page.locator('//button[i[@class="oxd-icon bi-trash"]]');
        this.confirmDeleteBtn = page.getByRole('button', { name: 'Yes, Delete' });

        this.successMsg = page.locator('//p[contains(text(),"Success")]');
    }

    async navigateToAddEmployee(){
        await this.pimMenu.click();
        await this.addEmployeeLink.click();
    }

    async addEmployee(firstname, lastname, empid, filePath){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.employeeIDInput.fill(empid);
        await this.uploadImage.setInputFiles(filePath);
        await this.saveBtn.click();
    }

    async verifyEmployeeCreated(){
        await expect(this.personalDetails).toBeVisible();
    }

    async verifyEmployeeId(empid){
        await expect(this.employeeIDInput).toHaveValue(empid);
    }

    async clickOnSave(){
        await this.saveBtn.click();
    }

    async verifyErrorMessages(){
       await expect(this.firstnameErrorMsg).toBeVisible();
       await expect(this.lastnameErrorMsg).toBeVisible();
    }



