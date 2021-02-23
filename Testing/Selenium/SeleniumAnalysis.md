
# An Analysis of Selenium

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/11/2021 | Initial Creation of Document |
| 2/12/2021 | Modification to add revision history and new sections |
| 2/17/2021 | Added Details on code And conventions |

## Document Author

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## What is Selenium?

Selenium is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Selenium offers simple, user-like interaction with the browser; a syntax that is readable similar to English, and user administration automation. It can work with any technology thrown its way including all major web browsers.

## Technical Specifications

Selenium is not platform restrictive as it works on every major browser and it hooks into specialized drivers so where you use it is only limited by the language implementation. It has implementations for Node.Js, C#, Java, Python, Ruby, and Kotlin. It is currently free for most users and has been receiving regular updates since 2005.

## Samples

A variety of companies use Selenium from Alibaba to Trivago to for browser automation. Totaling over a thousand companies and thousands of developers. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install selenium  
`$npm i selenium-webdriver`
2. Download the appropriate Browser Driver (We went with Chrome)  
[Chrome Driver Downloads](https://chromedriver.storage.googleapis.com/index.html)
3. Start writing tests!
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. One of the issues I ran across, and many others on the internet, was that hovering over an element did not always trigger the mouseover event, something crucial for JavaScript based interactivity. The “natural” English syntax was strange for a developer who is more used to the traditional syntax of most languages. It was more verbose but being able to read it like a sentence was helpful somewhat. The asynchronous architecture of the framework makes it strange at first, but you soon realize that this allows for pages and elements to load before your command is executed. This project was difficult to get going, especially getting around the asynchronous nature and the unpredictability of the mouse, but it was certainly not the worst framework ever made.

## __Conventions__

The common method of writing code in Selenium is by calling asyncronous funtions via the await function. This allows for implicit and explicit waits for pages and elements to load. However, this syntax becomes confusing with classes like 'By' having a CSS function, rahter than passing in a css selector directly. There is also not an easy way to assert states in Selenium, in fact this was not stated in the documentation in the getting started or in any of the docs I came across.

```JavaScript
let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://automationpractice.com/index.php');
    let amt = await driver.findElement(By.css("#quantity_wanted"));
    await amt.sendKeys('5');
} finally {
    driver.quit();
}
```

## Conclusions

One of the major benefits of this framework is the automation of tasks. Modern features of the internet are not well suited for Selenium, but if there are multiple things needed to be done on a website that need to be done repeatedly, then this testing suite would suit your needs. The site does not boast too much about what it can do, so it really is an experience you need to try to get a solid opinion on it. This may improve workflow with QA teams, but average developers would probably be better off manually testing and using unit tests. All in all, I personally don’t see myself using Selenium again, but if there was a need for browser automation, it would be on the list of considerations.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | N/A | 3 | 5 | 2 | 3 |

> ### **Final Rating** 3.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
