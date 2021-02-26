const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50
      });

      // Open new page
      const page = await browser.newPage();
  
      // Go to http://automationpractice.com/index.php
      await page.goto('http://automationpractice.com/index.php');
    
      // Fill input[name="search_query"]
      await page.focus('input[name="search_query"]');
      await page.keyboard.type("Blouse");
      await page.keyboard.press("Enter");
      
      // Click div[id="center_column"] >> text=/.*Blouse.*/
      await page.click('#center_column > ul > li > div > div.right-block > h5 > a');
      // assert.equal(page.url(), 'http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1');
    
    //   // Click input[name="qty"]
    //   await page.focus('input[name="qty"]');
    
    //   // Fill input[name="qty"]
    //   await page.keyboard.press("Backspace");
    //   await page.keyboard.type('5');
  
    //   // Click text="Add to cart"
    //   await page.click('text="Add to cart"');
  
    //   // Click text=/.*Continue shopping.*/
    //   await page.click('text=/.*Continue shopping.*/');
    
    //   // await page.click('#block_top_menu > ul > li:nth-child(1) > a');
    //   await page.hover("#block_top_menu > ul > li:nth-child(1) > a");
    //   // Click a[id="color_8"]
    //   await page.click('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1#/size-s/color-white');
  
    //   await page.hover("#color_20");
    //   await page.click("#color_20");
    //   await page.selectOption("#group_1", "3");
    
    //   // Click text="Add to cart"
    //   await page.click('text="Add to cart"');
    
    //   // Click text=/.*Continue shopping.*/
    //   await page.click('text=/.*Proceed to checkout.*/');
    
    //   // Click //tr[starts-with(normalize-space(.), 'Printed Summer Dress SKU : demo_5 Color : Blue, Size : L In stock $28.98 �-5%� $')]/td[7]/div/a[normalize-space(@title)='Delete']/i
    //   await page.click("#cart_summary > tbody > tr:nth-child(2) > td:nth-child(7) > div > a");
    
    //   // Click div[id="center_column"] >> text="Proceed to checkout"
    //   await page.click('div[id="center_column"] >> text="Proceed to checkout"');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&back=http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0');
    
    //   // Click input[name="email"]
    //   await page.click('input[name="email"]');
    
    //   // Fill input[name="email"]
    //   await page.fill('input[name="email"]', 'Test@automation.org');
    
    //   // Press Tab
    //   await page.press('input[name="email"]', 'Tab');
    
    //   // Fill input[name="passwd"]
    //   await page.fill('input[name="passwd"]', 'Test@Atomaton');
    
    //   // Click button[id="SubmitLogin"] >> text=/.*Sign in.*/
    //   await page.click('button[id="SubmitLogin"] >> text=/.*Sign in.*/');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=authentication');
    
    //   // Click //div[normalize-space(.)='Email address']
    //   await page.click('//div[normalize-space(.)=\'Email address\']');
    
    //   // Click input[name="email"]
    //   await page.click('input[name="email"]');
    
    //   // Double click input[name="email"]
    //   await page.dblclick('input[name="email"]');
    
    //   // Triple click input[name="email"]
    //   await page.click('input[name="email"]', {
    //     clickCount: 3
    //   });
    
    //   // Fill input[name="email"]
    //   await page.fill('input[name="email"]', 'test@test8.com');
    
    //   // Press Tab
    //   await page.press('input[name="email"]', 'Tab');
    
    //   // Fill input[name="passwd"]
    //   await page.fill('input[name="passwd"]', 'iamdave');
    
    //   // Click //span[normalize-space(.)='Sign in']/i
    //   await page.click('//span[normalize-space(.)=\'Sign in\']/i');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0');
    
    //   // Click div[id="center_column"] >> text="Proceed to checkout"
    //   await page.click('div[id="center_column"] >> text="Proceed to checkout"');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order');
    
    //   // Check input[name="cgv"]
    //   await page.check('input[name="cgv"]');
    
    //   // Click form[id="form"] >> text=/.*Proceed to checkout.*/
    //   await page.click('form[id="form"] >> text=/.*Proceed to checkout.*/');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order&multi-shipping=');
    
    //   // Click text=/.*Pay by check.*/
    //   await page.click('text=/.*Pay by check.*/');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment');
    
    //   // Click text="I confirm my order"
    //   await page.click('text="I confirm my order"');
    //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order-confirmation&id_cart=2747491&id_module=30&id_order=287385&key=90e3298beb16b4cae272d5a62a219928');
    
    //   // Close page
    //   await page.close();
    //   // ---------------------
    //   await context.close();
      await browser.close();
})();