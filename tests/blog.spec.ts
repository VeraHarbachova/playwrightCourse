import { test, expect } from '@playwright/test';
import BlogPage from '../pages/component/blog.page';

test.describe('Blog', () => {
    let blogPage: BlogPage;

    test('Verify Recent Posts count and verify the length of each list item', async ({ page }) => {
        blogPage = new BlogPage(page);

        // open contact page
        // await page.goto('https://practice.sdetunicorns.com/blog');
        await blogPage.navigate();

        // get the recent post list elements
        // const recentPostsList = page.locator('#recent-posts-3 ul li');

        // loop through the list and assert the char length > 10
       for (const el of await blogPage.recentPostsList.elementHandles()) {
        console.log((await el.textContent())?.length);
        console.log((await el.textContent())?.trim());
        expect((await el.textContent())?.length).toBeGreaterThan(10);
       }

        // assert the total length = 5
        expect(await blogPage.recentPostsList.count()).toEqual(5);
 
    })
    
})