
# __An Analysis of Selenium__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 2/22/2021 | Initial Creation of Document |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Nightwatch?__

Playwright is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Playwright offers simple, user-like interaction with the browser.

## __Technical Specifications__

Playwright was developed by Microsoft for browser automation. It has simpler syntax than selenium's verbose english-like syntax, with a more easily readable and usable one. It also ships with all necessry components inside it's node.js package, allowing seamless integration into the workflow. It should be noted that legacy Edge and Internet Explorer are not supported.

## __Samples__

Only a handful of developers actively use Playwright. It once had a larger following, but since has fallen out of favor due to it's outdated feature set and availiblity of better frameworks like Selenium and Nightwatch. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Playwright.  
`$npm i playwright`

It really is that simple to set up; As stated previously: seamless integration.
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. It has similar issues with selenium in trying to write code for it: it's clunky, lacks features for modern websites, and cannot test some features that require `onmouseover` events. It also inconsistently clicks specific places and makes actions faster than css animations, *sometimes*.

## __Conventions__

This really is just a simplified version of Selenium. The syntax may be simpler, but it also has similar issues with clarity. The browser object refers the program itself, the context to a window and tabs, and the page to a page itself. The separation is nice for specific things like tabbing in and out or making specific changes to a browser. However, most often you will be working with a singular page. It still uses the await syntax and implicit waits, but does so without the user needing to set these values explicitly. It also defaults to using a headless mode that goes as fast as possible. You have to change these yourself, but with poor documentation it's easy to look over the full range of options. One of the nicer tools that comes with this framework is the recording of actions on a website that gets transfered into code, though because of the framework limitations, good luck on having it work correctly without major modification.

```JavaScript
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
```

## __Conclusions__

This is not a framework you would want to use on a modern site, if nothing else, for the lack of support on the mouse. As time has gone on, users have relied on their mice more and more for shortcuts between sites. Sites have also become far more dynamic, with elements showing up and leaving as the user interacts with the site, having issues with mouse events is a major detriment and does not lend itself well to testing major sites. The documentation is also confusing, having syntax specifically relating to Assertion libraries which it **does not come with** and does not tell you this despite having auto generated code that produces assertions.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 4 | 2 | 3 | 2 | 2 |

> ### **Final Rating** 2.6/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
