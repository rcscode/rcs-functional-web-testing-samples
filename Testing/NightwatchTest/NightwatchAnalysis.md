
# __An Analysis of Nightwatch__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 2/16/2021 | Initial Creation of Document |
| 2/17/2021 | Further addition of information of framwork |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Nightwatch?__

Nightwatch is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Nightwatch offers simple, user-like interaction with the browser; It can work with any technology thrown its way including all major web browsers.

## __Technical Specifications__

Nightwatch is based on the Node.Js implementation of Selenium. Despite this, it's asyncronous nature is based on promises and callbacks, not awaits. The configuration file is also extrememly extensive, allowing most of the setting to be configured in it's own file, and separate from the testing code.

## __Samples__

A variety of companies use Nightwatch from Amazon to PiNCAMP to for browser automation. It does not yet have a large following, with only a few dozen companies reporting using it in their tech stack. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Nightwatch.  
`$npm i nightwatch`
2. Install the ChromeDriver Install package.  
`$npm i ChromeDriver`
3. Follow the configuration steps on the Nightwatch site.  
The Standard Chrome config that's provided works for this example.  
4. You may need to change your configuration based on your driver of choice.
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. This was one of the most comfortable frameworks I've ever worked with. Writing the code was quick, intuitive and generally pleasant. Configuration was confusing at first, but it ended up being helpful to have preset configuration away from the code.

## __Conventions__

It is common to run tests by changing together functions one after the other, with the browser object at the top of the chain. Two other things here that are important to note are the verify and assert keywords. Assert will print the success or fail to the console, and then stop the test if it is a fail. Verify does the latter but not the former, helpful when attempting to verify that values are correct when running test. Assert is more helpful for stopping a test if an element never shows up, so it is commonly paired with `.visible()`.  

```JavaScript
browser
    .click("#menu")
    .setValue("input[type='username']", ["Tom", browser.Keys.ENTER])
    .assert.containsText("#profile_name", "Tom")
    .verify.containsText("#profile_date", "4/4/2013")
    .end()
```

## __Conclusions__

One of the major benefits of this framework is the automation of tasks. Modern features of the internet are well supported on Nightwatch. It can navigate webpages exactly as a user would. The syntax is natural for a web developer, and even if you aren't, it still reads generally logically: `browser.click("#button")` reads very naturally without breaking convention of standard languages.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | N/A | 4 | 5 | 4 | 4 |

> ### **Final Rating** 4.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
