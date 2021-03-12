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
  await page.waitForNavigation();
  await page.click('#center_column > ul > li > div > div.right-block > h5 > a');
  // assert.equal(page.url(), 'http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1');
  await page.waitForSelector("#quantity_wanted");

  //   // Click input[name="qty"]
  await page.focus('#quantity_wanted');
  
  //   // Fill input[name="qty"]
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Backspace");
  await page.keyboard.type('5');

  //   // Click text="Add to cart"
  await page.click('#add_to_cart > button > span');

  //   // Click text=/.*Continue shopping.*/
  await page.waitForSelector("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span", {visible: true, hidden: false});
  await page.click('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span');
  
  await page.hover("#block_top_menu > ul > li:nth-child(1) > a");
  await page.waitForSelector("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a", {visible: true, hidden: false});
  await page.click("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a");

  await page.waitForSelector("#color_20", {visible: true, hidden: false});
  await page.hover("#color_20");
  await page.click("#color_20");
  
  await page.waitForSelector("#group_1", {visible: true, hidden: false});
  await page.select("#group_1", "3");
  //   // Click text="Add to cart"
  await page.click('#add_to_cart > button > span');
  
  //   // Click text=/.*Continue shopping.*/
  await page.waitForSelector("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span", {visible: true, hidden: false});
  await page.click('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span');
  
  //   // Click //tr[starts-with(normalize-space(.), 'Printed Summer Dress SKU : demo_5 Color : Blue, Size : L In stock $28.98 �-5%� $')]/td[7]/div/a[normalize-space(@title)='Delete']/i
  await page.waitForSelector("#cart_summary > tbody > tr:nth-child(2) > td:nth-child(7) > div > a", {visible: true, hidden: false});
  await page.click("#cart_summary > tbody > tr:nth-child(2) > td:nth-child(7) > div > a");
  
  //   // Click div[id="center_column"] >> text="Proceed to checkout"
  await page.click('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
  //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&back=http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0');
  
  //   // Click input[name="email"]
  await page.waitForSelector("#email", {visible: true, hidden: false});
  await page.focus('#email');
  await page.keyboard.type('Test@automation.org');  
  await page.keyboard.press('Tab');
  
  //   // Fill input[name="passwd"]
  //   await page.fill('input[name="passwd"]', 'Test@Atomaton');
  await page.focus('#passwd');
  await page.keyboard.type('Test@Atomaton');  
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  
  //   // Click form[id="form"] >> text=/.*Proceed to checkout.*/
  await page.waitForSelector("#center_column > form > p > button > span", {visible: true, hidden: false});
  await page.click('#center_column > form > p > button > span');

  await page.waitForSelector("#cgv", {visible: true, hidden: false});
  await page.click('#cgv');
  await page.click('#form > p > button > span');
  //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order&multi-shipping=');
  
  //   // Click text=/.*Pay by check.*/
  //   await page.click('text=/.*Pay by check.*/');
  //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?fc=module&module=cheque&controller=payment');
  await page.waitForSelector("#HOOK_PAYMENT > div:nth-child(2) > div > p > a > span", {visible: true, hidden: false});
  await page.click('#HOOK_PAYMENT > div:nth-child(2) > div > p > a > span');
  //   // Click text="I confirm my order"
  //   await page.click('text="I confirm my order"');
  //   // assert.equal(page.url(), 'http://automationpractice.com/index.php?controller=order-confirmation&id_cart=2747491&id_module=30&id_order=287385&key=90e3298beb16b4cae272d5a62a219928');
  await page.waitForSelector("#cart_navigation > button > span", {visible: true, hidden: false});
  await page.click('#cart_navigation > button > span');
  //   // Close page
  //   await page.close();
  //   // ---------------------
  //   await context.close();
  await browser.close();
})();