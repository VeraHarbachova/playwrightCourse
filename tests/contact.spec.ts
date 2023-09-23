import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
    let contactPage: ContactPage;

    test('Fill contact form and verify success message', async ({ page }) => {
        contactPage = new ContactPage(page);

        // open contact page
        // await page.goto('https://practice.sdetunicorns.com/contact');
        await contactPage.navigate();

        // fill out the input fields
        // await page.locator('.contact-name input').fill('Test Name');
        // await page.locator('.contact-email input').fill('test@mail.com');
        // await page.locator('.contact-phone input').fill('123456789');
        // await page.locator('.contact-message textarea').fill('This is a test message');

        // click submit
        // await page.locator('.button[type="submit"]').click();

        // fill out the input fields and click submit - two previous
        //await contactPage.submitForm('Test Name', 'test@mail.com', '123456789', 'This is a test message'); type data
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));

        // verify success message
        // const successAlert = page.locator('div[role="alert"]');
        await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
    
})

test.describe('Contact2', () => {
    test('Fill contact form and verify success message 2', async ({ page }) => {
        // open contact page
        await page.goto('https://practice.sdetunicorns.com/contact');
        
        // fill out the input fields
        await page.locator('.contact-name input').fill('Test Name');
        await page.locator('.contact-email input').fill('test@mail.com');
        await page.locator('.contact-phone input').fill('123456789');
        await page.locator('.contact-message textarea').fill('This is a test message');

        // click submit
        await page.locator('.button[type="submit"]').click();

        // verify success message
        const successAlert = page.locator('div[role="alert"]');
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
    
})


