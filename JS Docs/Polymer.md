# Polymer

## Document History

| Date | Description |
| ------------- | -------------- |
| 3/8/21 | Creation of Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

---

Polymer is an open-source JavaScript library used for building web applications with a component structure in mind. It allows developers to create their own custom elements using HTML, CSS, and JavaScript for adding interactions to components, templates and more. The library was developed by Google as well as a variety of contributors outsourced via GitHub. Polymer is used for a variety of Google services including YouTube, Google Earth, Google I/O websites, Google Play Store, Music, and much more. Now, this doesn't mean there aren't other notable projects out there using Polymer. Far from it as a matter of fact. Some famous properties including, Netflix, Electronic Arts, Comcast and many more all use the library and are benefiting from its major features.

### **Publisher**

Google and a variety of contributors

#### Mission Statement

> As front-end engineers in the Chrome team, our mission is to make the web better.

* >**We work on libraries & tools** to help developers unlock the web’s full potential, taking advantage of cutting-edge features like Web Components, Service Workers and HTTP/2.

* >**We experiment with new patterns** for building faster and smaller web applications.

* >**We advocate for standards** helping ensure that web developers have a strong voice in the process.

### Distinct Differences

Directly from the libraries homepage, here are the key-differences that Polymer implements to set itself apart from other frameworks/libraries

* LitElement

  > A simple base class for creating fast, lightweight web components.

* Lit-html

  > An efficient, expressive, extensible HTML templating library for JavaScript.

* Material Web Components

  > High-fidelity realizations of Google's Material Design spec that work anywhere on the web.

* Web Components Polyfills

  > A suite of polyfills supporting the Web Components specs.

* Polymer Library

  > An original library providing web components for the developer.

* Polymer Elements

  > An original set of web components, embedded in the Polymer library.

### **Feature List**

* **Simplified way of creating custom elements**

  Custom elements can be created using ES2015 modules with classes. These custom elements comprise of CSS style, HTML templates, element properties, and JS functions/methods.

* **Both One-way and Two-way data binding**
  
  Benefiting the developer, Polymer offers the ability for data to bind between both the client and server in both one-way and two-way bindings. Having this ability makes the development process run a lot smoother and does not shackle the developer when writing the application.

* **Computed properties**

  Similarly to other frameworks, Polymer offers the ability for the developer to write Computed Properties.
  
  **What are they?**
  
  Well, Computed Properties are calculations that will be cached based on their dependencies and will only update when needed. They're extremely usefull to the developer when implemented correctly and show an increase in performance for the application overall.

* **Conditional and repeat templates**

  Polymer has the ability for elements on the webpage to only render when a condition has been met. These are called "Conditional templates" in Polymer.

  Polymer similarly offers the feature of repeating templates whenever it is needed across the application. No need to repeat your writing of the same code, but instead reuse the template you had already created in another area of the application's environment.

  Fore more on templating in Polymer, [follow here](https://polymer-library.polymer-project.org/1.0/docs/devguide/templates#dom-if)

* **Gesture events**

  Polymer provides developers the support to create custom gesture events for certain user interactions. Rather than solely relying on mouse or touch-specific events. This provides better operational-control between the application and user with both touch and mouse devices.

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 3.4.1 |
| Size of Framework | 127kB (minified) / 37kB (minified and gzipped) |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://www.polymer-project.org/) |
| Instillation | [Follow Here](https://polymer-library.polymer-project.org/3.0/docs/install-3-0) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | X |

## **Code Sample**

[Polymer Sample](https://codepen.io/wistydagel/pen/RwoeMvz)

### Code Specifications

---

1. The framework should be able to fetch a collection of questions and answers using the predetermined Quiz API

    * The data is then stored as an object
    * We will store the question as a String variable
    * Store the correct answer as a String variable
    * Store the incorrect answers as an array of Strings

2. The questions are limited to 5 questions

    * This is so we can keep the sample short while also demonstrating the capabilities of the framework

3. Stores the multiple-choice input (A..D, etc.) given by the user

4. Comparison function will initiate when the user selects an answer

    * This will compare the currently selected answer with the correct answer
    * A boolean will return (T/F) depending on if they selected the correct answer or not

5. Forward function will move through the quiz by one question whenever the user clicks the next button on the front-end page

### Front-End Specifications

1. The Web-UI will be simple and easy to understand for demonstration

    * It will display the question towards the top of the page
    * The questions will be multiple choice
    * The corresponding answers will be listed out below the question appearing as buttons

2. Users can click whatever answer they think is correct

    * This will trigger the comparison function in the script

3. The result will be displayed for the user to see on the webpage

    * The answers will appear shaded red - indicating the incorrect option
    * The answer will appear shaded green - indicating the correct option

4. A simple text prompt will display if they got the question right or wrong as well

5. A progress bar will display above the current question stating the progress of the user and how far they are on completing the quiz

6. A next button will be below the question and answers allowing the user to move forward after answering the question.

## **Our Takeaway**

### Pros

---

* Interoperable Architecture

  One of the greatest aspects about Polymer is its ability to integrate with finished applications. With an application separated out by modules you can simply inject the Polymer library wherever it is needed and the application will have no trouble continuing to run with the newly integrated library. This is what makes Polymer one of the most popular libraries to use as it is not relying on the developer to build the application from the ground up with Polymer in mind, but rather offers end products the chance to use Polymer just the same.

* Material Web Components

  Polymer was developed with Component architecture in mind. Making it much easier for the developer to write and create their own components to share across the entire application. Not only that, but having the library include all Material Web Components (MWC) for the developer to use makes the development process fly by a lot quicker. Instead of having to write out certain processes like buttons, icons, lists, etc. Material components already have all of those elements integrated and can simply be included in your project with a sample tag.

  For more on MWC, [click here](https://github.com/material-components/material-components-web-components)

* Use of data-binding

  Having both one way and two way data-binding makes things more open for the developer. This is super convenient for any developer as it always ensures the changes made to the model will be displayed in the view and vice-versa.

* Smart templating

  Separate HTML templates can also be built through Polymer JS, which will later become parts of the fully-functional web applications. You can employ these templates for an unlimited number of times without having to rewrite the same code over and over. This is due to the declarative integration of HTML when creating the templates and having no need to build anything from scratch once the templates are complete.

* Event Handling

  Polymer innovates in its use of event listeners, making it super and easy to follow in their very straight forward documentation. You can easily create normal event listeners, annotated event listeners, custom events, property change events and much more.

  For more on event listeners, follow this [documentation](https://polymer-library.polymer-project.org/1.0/docs/devguide/events)

* Polymer CLI

  Developers are given the ability to use the proprietary Command Line Interface (CLI) built for any Polymer project by default. Having this built in the library reduces the total number of requests and decreases the size of the whole project overall.

* Support for ES2015 standards

  Having a framework follow today's standards of web-design and development only pushes the use of the library forward rather than losing itself in dated methodologies. Luckily, Polymer strives itself in its ability to stay current with modern development practices. This is even more surprising as its cousin "Angular" tends to lose itself in certain dated JS practices.

### Cons

---

* Limited tools

  Being that this is a library designed by and for Google, the range of tools/plugins that are compatible with Polymer are rather limiting. This is mainly due to the fact that Google built this library to mainly benefit their applications and then outsourced the library for other companies to use for their websites. Now, more tools are still being developed and are on their way to fit Polymer JS so this may not always be the case down the road.

* Browser constraints

  Some features built natively aren't always supported by every browser, so the developer may have to take it upon themselves to innovate and right components that fit for a variety of browsers. This not only takes additional man-power to work on adapting to a variety of browsers but also an unnecessary amount of time trying to rewrite similar components to fit the requirements of the browser.

* Slower performance

  Having to build a variety of components fitting to different browsers can also impact the speed and performance of the application.

## **Conclusion**

---

### **Why Consider Polymer?**

Polymer is a great JS library for anyone looking to add a variety of components or templates into their web-application. Now, many people may mistake Polymer for a Web Framework but as a matter of fact it is only a library. It does not have any constraints in syntax bound to a specific methodology, but is rather open to the developers' way of writing their application. To put it simply, it does not force you to play its rules but rather allows you to play by your own. Polymer JS has gone through a variety of changes over its course of development and is now sitting at a fairly comfortable spot. By stripping away some of the unnecessary dependencies other libraries/frameworks have and keeping things fairly slim for its install, Polymer makes things really easy for the developer.

For those who only want to add Polymer as an addition to their already established web-application there's a version of polymer for you (look for *Polymer Micro*). For those who are looking to try and build the front-end of their application entirely with Polymer there's a version for you (look for *Polymer Standard*). And for those who are sitting somewhere in the middle, well there is also a version for you (look for *Polymer Mini*). Polymer was created with the developer in mind and it clearly shows with the state it is in today. Having such an adaptable library that has very little pre-requisites for the developer to implement is a breath of fresh air. Not only that, but if you find you aren't getting enough out of the library... there is a whole plugin you can include for Material Design Elements which further enhance the client-server communication and much more.

For anyone new to web development and would like to get their feet wet with Component Architecture before they dive into larger frameworks like View, React, etc. Then look no further than Polymer JS as it offers a great experience for anyone looking to build a variety of web applications using components and more.

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4 | 4.5 | 3.5 | 4 | 3.5 | 3.9/5 |
