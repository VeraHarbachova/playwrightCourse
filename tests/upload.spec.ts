import { test, expect } from '@playwright/test';
import CartPage from '../pages/component/cart.page'; 
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['title.png', 'Manual_interview_questions.pdf'];

        for (const name of fileName) {
            test(`Should upload a ${name} file`, async ({ page }) => {
                cartPage = new CartPage(page);   
        
                // open url
                await page.goto('/cart');
        
                // provide test file path
                const filePath = path.join(__dirname, `../data/${name}`);
        
                // upload test file - change 2w1
                // await page.setInputFiles('input#upfile_1', filePath);
                
                // click the submit button - change 2w1
                // await page.locator('input#upload_1').click();
        
                //upload test file 
                cartPage.uploadComponent().uploadFile(filePath);
                
                // assertion
                await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully');
            })
        }
})

test.describe('Upload File', () => {
    test('Should upload a test file on a hidden input field', async ({ page }) => {
        // open url
        await page.goto('/cart');

        // provide test file path
        const filePath = path.join(__dirname, '../data/title.png');

        // DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = ''
            }
        })

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error
        
        // click the submit button
        await page.locator('input#upload_1').click();
        
        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })
    
})

test.describe('Upload File', () => {
    test('Should upload a test file on a hidden input field Hardcoded Wait', async ({ page }) => {
        // open url
        await page.goto('/cart');

        // provide test file path
        const filePath = path.join(__dirname, '../data/QA interview questions and answers .pdf');

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error
        
        // click the submit button
        await page.locator('input#upload_1').click();

        // hardcoded sleep - WRONG WAY!
        await page.waitForTimeout(10000);
        
        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })
    
})

test.describe('Upload File', () => {
    test('Should upload a test file on a hidden input field Conditional Wait', async ({ page }) => {
        // open url
        await page.goto('/cart');

        // provide test file path
        const filePath = path.join(__dirname, '../data/QA interview questions and answers .pdf');

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error
        
        // click the submit button
        await page.locator('input#upload_1').click();

        // wait for condition
        await page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000});
            
        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })  
})

test.describe('Upload File', () => {
    test('Should upload a test file on a hidden input field Assertion Wait', async ({ page }) => {
        // open url
        await page.goto('https://practice.sdetunicorns.com/cart');

        // provide test file path
        const filePath = path.join(__dirname, '../data/QA interview questions and answers .pdf');

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error
        
        // click the submit button
        await page.locator('input#upload_1').click();

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', {timeout: 10000});
    })  
})