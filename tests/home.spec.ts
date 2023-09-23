import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
        test('Open HomePage and verify title', async ({ page }) => {
        // homePage = new HomePage(page); moved to beforeEach section

        // open URL
        // await page.goto('https://practice.sdetunicorns.com/');
        // await homePage.navigate(); 40 lesson - moved to beforeEach section

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
    })

        test('Open About page and verify title', async ({ page }) => {
            homePage = new HomePage(page);
        // open url
        await page.goto('https://practice.sdetunicorns.com/about');
    
        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
      })
    
        test('Click get started button using CSS Selector', async ({ page }) => {
        homePage = new HomePage(page);
        // open url
        // await page.goto('https://practice.sdetunicorns.com');
        await homePage.navigate();
        
        await expect(page).not.toHaveURL(/.*#get-started/);
    
        // click the button
        // await page.locator('#get-started').click();
        await homePage.getStartedBtn.click();
           
        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
      })
    
        test('Verify heading text is visible using text selector', async ({ page }) => {
            homePage = new HomePage(page);

        // open URL
        // await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();
    
        // find the text locator
        // const headingText = page.locator('text=Think different. Make different.');
        const headingText = await homePage.headingText;
    
        // verify heading text is visible
        await expect(headingText).not.toBeHidden();
        await expect(headingText).toBeVisible();
    })
    
        test('Verify home link is enable using text and css selector', async ({ page }) => {
            homePage = new HomePage(page);
        // open URL
        // await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();
    
        // find the home text
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        // const homeText = page.locator('#zak-primary-menu:has-text("Home")');
        const homeText = await homePage.homeLink;
    
        // verify home text is enabled
        await expect(homeText).toBeEnabled();
    })
    
        test('Verify search icon is visible ising xpath selector', async ({ page }) => {
            homePage = new HomePage(page);
        // open URL
        // await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();
    
        // find the search icon
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        // const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        const searchIcon = await homePage.searchIcon;
    
        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
    })
    
        test('Verify text of all nav links', async ({ page }) => {
            homePage = new HomePage(page);

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
    
        // open URL
        // await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();
    
        // find the nav links
        // const navLinks = await page.locator('#zak-primary-menu li[id*=menu]');
        const navLinks = await homePage.navLinks;
    
        // print out all links
    
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }
    
        // verify nav links text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })
    
        test('Verify text of link', async ({ page }) => {
            homePage = new HomePage(page);
            
            const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
    
        // open URL
        // await page.goto('/');
        await homePage.navigate();
    
        // find the link with number 3 
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        // const navLinks = await homePage.navLinks.nth(3); - delete because of we added to the constructor
    
        // verify nav link text of number 3
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks[3]);
    })
    
})

    