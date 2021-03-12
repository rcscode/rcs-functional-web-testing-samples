
# __An Analysis of Playwright__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 2/22/2021 | Initial Creation of Document |
| 2/23/2021 | Updated Docs based on new Info |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Nightwatch?__

Playwright is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Playwright offers simple, user-like interaction with the browser.

## __Technical Specifications__

Playwright was developed by Microsoft for browser automation. It has simpler syntax than selenium's verbose english-like syntax, with a more easily readable and usable one. It also ships with all necessry components inside it's node.js package, allowing seamless integration into the workflow. It should be noted that legacy Edge and Internet Explorer are not supported.

## __Samples__

Only a handful of developers actively use Playwright. I am unsure as to why, perhaps it's predecessor is more well known or other more easy to use frame works are available that make it a middling option. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Playwright.  
`$npm i playwright`

It really is that simple to set up; As stated previously: seamless integration.
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. It has signifigant improvements to Selenium, where Selenium inconsistently clicks and fires mouse events, Playwright can even hover unlike slenium. There are some bugs having to do with accurate clicks and css animations, but these can be fixed with a hover and then a click.

## __Conventions__

This really is just a simplified version of Selenium. The syntax may be simpler, but it also has similar issues with clarity. The browser object refers the program itself, the context to a window and tabs, and the page to a page itself. The separation is nice for specific things like tabbing in and out or making specific changes to a browser. However, most often you will be working with a singular page. It still uses the await syntax and implicit waits, but does so without the user needing to set these values explicitly. It also defaults to using a headless mode that goes as fast as possible. You have to change these yourself, but with poor documentation it's easy to look over the full range of options. One of the nicer tools that comes with this framework is the recording of actions on a website that gets transfered into code, though it does not record when hovering over elements so it doesn't necessarily work out of the box.

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

There is also support for easier assertions, although this requires an outside library for unit testing. The documentation does not explicitly tell you this and even will autogenerate it for you.

## __Conclusions__

If you had to pick a testing framework, don't forget about this one. While there are easier to use frameworks that have some more interesting support, this framework is robust with very little issues in usage.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 4 | 4 | 4 | 4 | 3 |

> ### **Final Rating** 3.8/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
