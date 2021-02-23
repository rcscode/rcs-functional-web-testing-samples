const {Builder, By, Key, until, Actions, WebDriver} = require('selenium-webdriver');

// (async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
//         // Navigate to Url
//         await driver.get('https://www.google.com');

//         // Enter text "cheese" and perform keyboard action "Enter"
//         await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

//         let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 10000);

//         console.log(await firstResult.getAttribute('textContent'));
//     }
//     finally{
//         driver.quit();
//     }
// })();

(async function automationSiteTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({implicit: 10000});
    try {
        const actions = driver.actions({async: true});
        //get to autmation practice site
        await driver.get('http://automationpractice.com/index.php');
        //Search "blouse"
        await driver.findElement(By.name('search_query')).sendKeys('blouse', Key.ENTER);
        //Select first result
        let firstRes = await driver.wait(until.elementLocated(By.css("#center_column > ul > li > div > div.right-block > h5 > a")), 10000);
        await firstRes.click();
        //Change quantity to 5
        let amt = await driver.findElement(By.css("#quantity_wanted"));
        await amt.sendKeys('5');
        //Change color to white
        let whiteSelect = await driver.findElement(By.css("#color_8"));
        await whiteSelect.click();
        //Add to cart
        let cartButton = await driver.findElement(By.css("#add_to_cart > button"));
        await cartButton.click();
        //Continue shopping
        //I have to wait for the modal to load
        let contButton = await driver.wait(driver.findElement(By.css("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span")), 1000);
        await contButton.click();
        //women -> dresses -> summer dresses
        let womenSelect = await driver.findElement(By.css("#block_top_menu > ul > li:nth-child(1) > a"));
        await womenSelect.click();
        //select the blue dress
        let blueDress = await driver.findElement(By.css("#color_20"));
        await blueDress.click();
        //change size to L
        let sizeSelect = await driver.findElement(By.css("#group_1 > option:nth-child(3)"));
        await sizeSelect.click();
        //add to cart
        cartButton = await driver.findElement(By.css("#add_to_cart > button"));
        await cartButton.click();
        //proceed to checkout
        let proceed = await driver.findElement(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a"));
        await proceed.click();
        
        let trash = await driver.wait(driver.findElement(By.css("#cart_summary > tbody > tr:nth-child(1) > td:nth-child(7) > div > a")), 10000);
        await trash.click();
        proceed = await driver.findElement(By.css("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium"));
        await proceed.click();
        //sign up
        let newEmail = await driver.findElement(By.css("#email_create"));
        await newEmail.sendKeys("test@test8.com", Key.ENTER);
        //fill out info
        await (await driver.findElement(By.css("#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(3) > label"))).click();
        await (await driver.findElement(By.css("#customer_firstname"))).sendKeys("dave");
        await (await driver.findElement(By.css("#customer_lastname"))).sendKeys("dave");
        await (await driver.findElement(By.css("#passwd"))).sendKeys("iamdave");
        await (await driver.findElement(By.css("#days > option:nth-child(5)"))).click();
        await (await driver.findElement(By.css("#months > option:nth-child(5)"))).click();
        await (await driver.findElement(By.css("#years > option:nth-child(5)"))).click();

        await (await driver.findElement(By.css("#address1"))).sendKeys("2134 Cat street");
        await (await driver.findElement(By.css("#city"))).sendKeys("dave");
        await (await driver.findElement(By.css("#id_state > option:nth-child(5)"))).click();
        await (await driver.findElement(By.css("#postcode"))).sendKeys("55555");
        await (await driver.findElement(By.css("#phone_mobile"))).sendKeys("(805) 678-9988");
        await (await driver.findElement(By.css("#submitAccount"))).click();
        //next
        await (await driver.findElement(By.css("#center_column > form > p > button"))).click();
        //comment "help"
        //proceed to checkout
        //#form > p > button
        //agree to ToS
        await (await driver.findElement(By.css("#cgv"))).click();
        await (await driver.findElement(By.css("#form > p > button"))).click();
        //pay by check
        //#HOOK_PAYMENT > div:nth-child(2) > div > p > a
        await (await driver.findElement(By.css("#HOOK_PAYMENT > div:nth-child(2) > div > p > a"))).click();
        //confirm order
        //#cart_navigation > button
        await (await driver.findElement(By.css("#cart_navigation > button"))).click();
    }
    finally {
        driver.quit();
    }
})();