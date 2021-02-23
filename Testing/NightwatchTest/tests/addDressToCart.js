module.exports = {
    "AP Search for blouse" : function(browser) {
        browser
            .url("http://automationpractice.com/index.php")
            .waitForElementVisible("body")
            .assert.titleContains("My Store")
            .assert.visible("#search_query_top")
            .setValue("#search_query_top", "blouse")
            .assert.visible("#searchbox > button")
            .click("#searchbox > button")
            .assert.containsText("#center_column > ul > li > div > div.right-block > h5 > a", "Blouse")
            .click("#center_column > ul > li > div > div.right-block > h5 > a")
            .assert.containsText("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1", "Blouse")
            .setValue("#quantity_wanted", [browser.Keys.BACK_SPACE, "5"])
            .click("#add_to_cart > button")
            .assert.visible("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span")
            .click("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span")
            .moveToElement("#block_top_menu > ul > li:nth-child(1)", 0, 0)
            .assert.visible("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a")
            .click("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a")
            .assert.visible("#color_20")
            .click("#color_20")
            .click("#group_1")
            .click('#group_1 option[value="3"]')
            .click("#add_to_cart > button")
            .assert.visible("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")
            .click("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")
            .assert.visible("#total_price")
            .verify.containsText("#total_price", "$165.98")
            .click("#cart_summary > tbody > tr:nth-child(2) > td:nth-child(7) > div > a")
            .verify.containsText("#total_price", "$137.00")
            .click("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium")
            .assert.visible("#email")
            .setValue("#email", "test@test8.com")
            .setValue("#passwd", "iamdave")
            .click("#SubmitLogin")
            .assert.visible("#center_column > form > p > button")
            .click("#center_column > form > p > button")
            .assert.visible("#form > div > p.checkbox > label")
            .click("#form > div > p.checkbox > label")
            .click("#form > p > button")
            .verify.containsText("#total_price", "$28.00")
            .click("#HOOK_PAYMENT > div:nth-child(2) > div > p > a")
            .assert.visible("#cart_navigation > button")
            .click("#cart_navigation > button")
            .assert.containsText("#center_column > div > span > strong", "$28.00")
            .end()
    }
}