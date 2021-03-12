# Ember.JS

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/24 | Creation of Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

---

Ember is a widely popular, open-source, front-end web framework built with the component-service pattern in mind. The framework is designed for developers to create scalable Single Page Web-Applications (SPA), utilizing best practices from other frameworks as well as incorporating their own flare in it's design.

Some popular websites that utilize the framework include, Discourse, Groupon, LinkedIn, Nordstrom, Twitch, and much more. Although this framework is primarily used in designing web-based applications, it is also possible to build both desktop and mobile using Ember. The most notable application to use this framework would be Apple Music. An application stemming from the iTunes desktop application. Ember is most definitely designed to seek the widest appeal from developers and is gradually rising in the ranks among the popular web frameworks.

### **Publisher**

Original Author - Yehuda Katz

Developers - [Ember Core Team](https://emberjs.com/teams/)

#### Mission Statement

> Ember. js is an open source, free JavaScript client-side framework used for developing web applications. It allows building client side JavaScript applications by providing a complete solution which contains data management and an application flow. The original name of Ember.

### Design Principles

* **Focused on building innovative Web Applications**

When it comes to the model-view-controller component to any web-based applications. Most frameworks focus on finding the best way to solve view aspect first and don't take into consideration how best to handle both the models and controllers. Well, Ember is designed to fix that issue and promote the idea of innovating all fronts rather than just the one.

* **Packs a punch**

Ember is seen as a toolbox by its development team, providing a set of tools that work together to provide a complete development stack. No use for external plugins or the reliance of third party components to create basic features for your webpage. One major tool is the Ember CLI, as it provides the application with a structure/build pipeline to follow, making it easier for the developer to create applications. This CLI also is built with plugins in mind and has over 3500 additional components you can use to enhance your application.

* **Stability without Stagnation**

For any developer who has already designed their webpage and has it running with an older version of Ember. There is no need to worry about any compatibility issues when the latest update rolls out. Ember is built with backwards compatibility in mind and does not require the developer to constantly shift and evolve their program along with the framework.

* **Built with the future in mind**

Ember was built upon today's standards around JavaScript and web development, including promises, web components, and ES6 syntax. What's even more reassuring is that one of the co-founders of Ember, Yehuda Katz, is a member of [TC39](https://tc39.es/) which is responsible for the future iterations of the JavaScript language. This only further proves the fact that Ember is here to stay.

### **Feature List**

* Routes

> In Ember, the state of an application is represented by a URL. Each URL has a corresponding route object that controls what is visible to the user.

* Models

> Every route has an associated model, containing the data associated with the current state of the application. While one can use window.fetch to load JSON objects from a server and use those objects as models, most applications use a model library such as Ember Data to handle this.

* Templates

> Templates are used to build the application's HTML and are written with the HTMLBars templating language. (HTMLBars is a variation of Handlebars that builds DOM elements rather than a String.)

* Components

> A component is a custom HTML tag. Behavior is implemented using JavaScript and its appearance is defined using HTMLBars templates. Components "own" their data. They can also be nested and can communicate with their parent components through actions (events). Other component libraries such as Polymer can also be used with Ember.

* Controllers

> A controller is an object that stores application state. A template can optionally have a controller in addition to a model, and can retrieve properties from both.

* Services

> Services are just singleton objects to hold long-lived data such as user sessions.

### **Sample Projects**

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 3.25 |
| Size of Framework | 340 kB (minified) / 1.5 MB (uncompressed) |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://www.emberjs.com/) |
| Instillation | [Follow Here](https://guides.emberjs.com/v1.11.0/ember-cli/) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | X |

## **Code Sample**

[Ember Sample](https://codepen.io/wistydagel/pen/ZEByoNE)

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

**Side Note** - Modifications had to be made to our Code Sample due to the current version of Ember supported on CodePen. Normally, the application would match all the specifications if built on a local machine and using the most current version of Ember JS.

## **Our Takeaway**

### Pros

---

* **Fast in its performance**

Looking through the documentation and building the code sample for this framework. It became very clear that Ember JS strives for superior performance in its rendering. With "View Rendering" appearing on the screen in just under 26 milliseconds, Ember JS is blazing fast in updating the DOM and rendering the newest set of data for the current user.

* **Largely supported by it's core development team**

The downfall with some smaller frameworks is that once the development of the framework has finished, the team behind it may move on or do very little to continue supporting the framework and the community it has built along with it. Fortunately, Ember JS is dedicated not only to it's community of developers, but also continuing to innovate and push their framework to the top of the charts. Starting from version 1.10 (releasing in 2015) and now sitting at version 3.25, they have continued to push out a variety of improvements and fixes to the framework making it far easier for the developer to jump into.

* **Data binding made easy**

Now, Ember JS is just like any other popular frameworks offering both one-way and two-way data bindings between data variables. However, unlike most other frameworks, Ember JS offers data binding with any object. Making it far easier for the developer to synchronize object data with elements on the webpage and their respective JavaScript value.

* **Easy to follow documentation**

Luckily, the development is not only focussed on building a superior front-end framework, but also focussed on delivering incredible documentation for anyone to follow. From easy installation guides, tutorials on building a variety of components, adopting various plug-ins and much more. There is a lot of fantastic documentation to read through to grow in your knowledge with Ember Js. Not only that, but they provide the documentation for all the previous versions of the framework as well. Which you can easily select when visiting the respective page.

* **Provides a proprietary debugging tool**

Not only did the development team provide developers with great documentation, but they also provide any developer who uses Ember Js (and Google Chrome) a proprietary tool used for debugging Ember-specific projects. There is no need for spending the additional time in researching for a proper JS debugging tool as you can use the one that the Ember Development Team provides for you.

For more on the tool, [click here](https://guides.emberjs.com/release/ember-inspector/)

### Cons

---

* **Rather large learning curve**

With developing the code sample, it became very apparent how steep of a learning curve Ember had in order to make a fully functional SPA. It became very confusing early on with what the framework required in it's syntax, nomenclature, structure, dependencies, and overall development cycle. Luckily, Ember has a very dedicated development team that produces rather great documentation for anyone to follow. However, if you're looking for an entry-level JS framework... Ember JS may not be the choice for you.

For instance, you will need to set the type of your script to "text /x-handlebars" in order for you to have the ability to embed expressions in your HTML. This is lost within the vast array of documentation and took way too long to find in order to get our Code sample to work properly. 

    <html>
        <body>
            <script type="text/x-handlebars">
                Hello, <strong>{{firstName}} {{lastName}}</strong>!
            </script>
        </body>
    </html>

* **Large install for SPA's**

Ember is a rather large framework pushing into the megabyte size (1.5mB to be exact) where other frameworks are only in the kilobyte range. Ember tries to be an all-in-one framework that provides a fully-functional model-view-controller design and in doing so they can't necessarily remove all the dependencies the framework needs in order to operate correctly. Resulting in being one of the largest SPA frameworks on the market.

* **Community is rather small compared to other popular frameworks**

According to [w3techs](https://w3techs.com/technologies/details/js-emberjs), Ember is used by less than 0.1% of all live websites deployed with JS frameworks today. This number is incredibly small compared to that of React, Angular and so on... Now, developers are increasingly showing interest in the framework so the community is still growing. However, the community of developers for Ember are nowhere near the size of most popular front-end frameworks.

## **Compare and Contrast**

---

### **Ember vs. Angular**

### Performance & DOM

Both Ember and Angular equally offer great opportunities to develop large-scale front-end applications.

Both frameworks manipulate the DOM directly and do not make any use of a virtual DOM.

For the most part, Ember allows for native ways to accomplishing goals in your application rather than relying on the direct manipulation of the DOM for the user to experience feedback from the webpage.

For Angular, this leaves the experience to be a lot more slower when dealing with frequent data requests.

### Data Binding

Data binding is all about synchronizing data between logic and the UI. Bindings can connect properties on the same object, or across two different objects.

Angular uses both one and two way data bindings - changing the data will impact the view and vice-versa.

Ember handles it's data binding fairly similar but also offers more for the developer to utilize. However, unlike Angular and many other frameworks, bindings in Ember can be used with any object, not just between views and models.

### Component Architecture

"If it ain't broke don't fix it."

Ember has a component architecture down to its core. It's fairly similar to what you may find with a variety of other frameworks, as components in Ember are reusable controls that can simplify your application and clean up repetitive templates.

AngularJS is not built around component-based architecture and is still locked to an MVC structure. However, Angular 2 is built all around components and offers an experience similar to what you may find with Ember and many other front-end frameworks.

### Size of the Framework

Simply put, the smaller the file size the faster the application loads.

Angular solves this problem by not including everything in its build within the developer's app. During the build process it ignores things like development utilities and unused modules. The framework then minifies and compresses the rest and this results in better optimizations.

Ember is a rather large framework in comparison to both Angular JS and a variety of other frameworks on the market. This is due to the fact that Ember tries to be an all-in-one framework that provides a fully-functional model-view-controller design. With it's dependencies on libraries which come downloaded with the framework directly, you'll see that Ember has a pretty chunky size to it.

| Framework | Size |
| ----------- | ----------- |
| Angular | 144kB (minified and compressed) |
| Ember | 340 kB (minified) / 1.5 MB (uncompressed) |

## **Conclusion**

---

### **Why Consider Ember JS?**

Ember JS has a lot on it's plate when it comes to offering a front-end framework that fully offers the MVC structure. Where most other frameworks tend to focus on the View component out of MVC, Ember JS tries to tackle it all by offering the ability to develop large client-side web applications. According to the Ember.js website, having the ability to work in an MVC structure provides the developer the ability to build "ambitious and innovative" web applications.

However, that's all said in good, but with such a vast array of dependencies, plugins, and more. The framework falls short in providing the most condense and performant framework on the market. As the developer will spend a large amount of their time trying to set up the project in the first place rather than building an operating website out the gate. With a rather high learning curve and the need for the developer to spend a majority of their time (in the beginning) sifting through documentation, just to understand how the framework operates and works. Ember JS falls short in providing an easy-to-use experience for any developer who is relatively new to JS frameworks and their use for web development.

If you are a seasoned web developer and have a better understanding on building Single Page Applications with the use of JS frameworks (like Angular, React, etc.), then Ember JS provides an all-in-one experience for you. With a vast array of plugins, continued support from the development team, and even its own debugging tool provided for you to use. Ember JS has a lot to offer more seasoned developers who want to make "ambitious and innovative" web pages. However, if you are brand new to this type of environment, then it may be better to look elsewhere and save yourself the headache in the beginning.

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4 | 3 | 3 | 2.5 | 3 | 3/5 |
