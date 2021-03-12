
# __An Analysis of Puppeteer__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 3/11/2021 | Initial Creation of Document |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Puppeteer?__

Puppeteer is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Puppeteer was Google's solution to testing it's websites and was thus focused on Angular.

## __Technical Specifications__

Puppeteer was designed for Angular and works only using the Chromium driver. It can be run on major OSs as it's primary implementation is on Node.Js.

## __Samples__

Obviously Google is the primary user of Puppeteer and is used when testing against sites like YouTube, Google+ (when that was up), and of course their main search engine. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Puppeteer.  
`$npm i playwright`
  
Writing the tests was usually simple: locate an element, and interact with it, usually by clicking or sending keystrokes. Though, as I will discuss later, it's successor Playwright outclasses it greatly.  

## __Conventions__

This framework, when compared to, it's successor, has some major differences. For one thing, keyboard inputs are not obfuscated into other inputs, they are direct and are also slowed down based on the speed a human would input them. Other than that, those are the only possible benefits of Puppeteer over Playwright.

The framework requires a lot of waiting, a lot of waiting. Unfortunately, it is also unpredictable, so it is not uncommon to have almost every selector be waited upon. It also needs to wait after most navigations, though when this needs to be done is unclear, in fact sometimes this may break the test, failing it, if it was unnecessary.

It also does not support more advanced CSS selectors, like choosing elements that have specific text.  

This makes your code much longer and less readable.

```JavaScript
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

//code skipped for brevity

await page.hover("#block_top_menu > ul > li:nth-child(1) > a");
await page.waitForSelector("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a", {visible: true, hidden: false});
await page.click("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a");

```

## __Conclusions__

There isn't a good excuse to use puppeteer. It lacks feature that even Selenium has, so it needs work arounds and poor practices to function. In comparison to it's successor, it needs more code and time to work on. The real killer for a choice is browser support. Disallowing any browser except for Chromium is unacceptable.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 2 | N/A | 2 | 3 | 1 | 4 |

> ### **Final Rating** 2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
