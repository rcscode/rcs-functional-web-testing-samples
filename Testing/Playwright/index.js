const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 50
    });
    const context = await browser.newContext();
  
    // Open new page
    const page = await context.newPage();

    // Go to http://automationpractice.com/index.php
    await page.goto('http://automationpractice.com/index.php');
  
    // Click input[name="search_query"]
    await page.click('input[name="search_query"]');
  
    // Fill input[name="search_query"]
    await page.fill('input[name="search_query"]', 'blouse');
  
    // Press Enter
    await page.press('input[name="search_query"]', 'Enter');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=blouse&submit_search=');
  
    // Click div[id="center_column"] >> text=/.*Blouse.*/
    await page.click('div[id="center_column"] >> text=/.*Blouse.*/');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1');
  
    // Click input[name="qty"]
    await page.click('input[name="qty"]');
  
    // Fill input[name="qty"]
    await page.fill('input[name="qty"]', '5');

    // Click text="Add to cart"
    await page.click('text="Add to cart"');

    // Click text=/.*Continue shopping.*/
    await page.click('text=/.*Continue shopping.*/');
  
    await page.click('#block_top_menu > ul > li:nth-child(1) > a');

    // Click a[id="color_8"]
    await page.click('#center_column > ul > li:nth-child(5) > div > div.left-block > div > a.product_img_link', {position: {x: 10, y: 10}});
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1#/size-s/color-white');

    await page.click("#color_14");
    await page.selectOption("#group_1", "3");
  
    // Click text="Add to cart"
    await page.click('text="Add to cart"');
  
    // Click text=/.*Continue shopping.*/
    await page.click('text=/.*Proceed to checkout.*/');
  
    // Click //tr[starts-with(normalize-space(.), 'Printed Summer Dress SKU : demo_5 Color : Blue, Size : L In stock $28.98 �-5%� $')]/td[7]/div/a[normalize-space(@title)='Delete']/i
    await page.click("#cart_summary > tbody > tr:nth-child(2) > td:nth-child(7) > div > a");
  
    // Click div[id="center_column"] >> text="Proceed to checkout"
    await page.click('div[id="center_column"] >> text="Proceed to checkout"');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&back=http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0');
  
    // Click input[name="email"]
    await page.click('input[name="email"]');
  
    // Fill input[name="email"]
    await page.fill('input[name="email"]', 'Test@automation.org');
  
    // Press Tab
    await page.press('input[name="email"]', 'Tab');
  
    // Fill input[name="passwd"]
    await page.fill('input[name="passwd"]', 'Test@Atomaton');
  
    // Click button[id="SubmitLogin"] >> text=/.*Sign in.*/
    await page.click('button[id="SubmitLogin"] >> text=/.*Sign in.*/');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=authentication');
  
    // Click //div[normalize-space(.)='Email address']
    await page.click('//div[normalize-space(.)=\'Email address\']');
  
    // Click input[name="email"]
    await page.click('input[name="email"]');
  
    // Double click input[name="email"]
    await page.dblclick('input[name="email"]');
  
    // Triple click input[name="email"]
    await page.click('input[name="email"]', {
      clickCount: 3
    });
  
    // Fill input[name="email"]
    await page.fill('input[name="email"]', 'test@test8.com');
  
    // Press Tab
    await page.press('input[name="email"]', 'Tab');
  
    // Fill input[name="passwd"]
    await page.fill('input[name="passwd"]', 'iamdave');
  
    // Click //span[normalize-space(.)='Sign in']/i
    await page.click('//span[normalize-space(.)=\'Sign in\']/i');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0');
  
    // Click div[id="center_column"] >> text="Proceed to checkout"
    await page.click('div[id="center_column"] >> text="Proceed to checkout"');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order');
  
    // Check input[name="cgv"]
    await page.check('input[name="cgv"]');
  
    // Click form[id="form"] >> text=/.*Proceed to checkout.*/
    await page.click('form[id="form"] >> text=/.*Proceed to checkout.*/');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order&multi-shipping=');
  
    // Click text=/.*Pay by check.*/
    await page.click('text=/.*Pay by check.*/');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment');
  
    // Click text="I confirm my order"
    await page.click('text="I confirm my order"');
    // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order-confirmation&id_cart=2747491&id_module=30&id_order=287385&key=90e3298beb16b4cae272d5a62a219928');
  
    // Close page
    await page.close();
    // ---------------------
    await context.close();
    await browser.close();
  })();