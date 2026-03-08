import { test, expect } from '@playwright/test';
import { loginPage } from "../pom/loginpage";
import { addEmployeePage } from "../pom/addemployee";
import addEmployeeData from "./addemployee.json";
import loginData from "./logindata.json";

test.describe('Verify Add Employee', () => {

    let login;
    let addemp;

    test.beforeEach(async ({ page }) => {

        login = new loginPage(page);
        addemp = new addEmployeePage(page);

        await login.launchUrl();
        await login.verifyLogo();

        await login.loginwithCreds(
            loginData.username,
            loginData.password
        );

        await addemp.navigateToAddEmployee();
    });

    test("Verify user can create employee", async () => {

        // test.slow();

        const randomId = Math.random().toString(36).substring(2, 7);

        await addemp.addEmployee(
            addEmployeeData.firstname,
            addEmployeeData.lastname,
            randomId,
            "tests/train.png"
        );

        await addemp.verifyEmployeeCreated();
    });

    test("Verify error message for mandatory fields", async () => {

        await addemp.clickOnSave();
        await addemp.verifyErrorMessages();

    });

});