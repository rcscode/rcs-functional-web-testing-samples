# Aurelia

## Document History

| Date | Description |
| ------------- | -------------- |
| 3/10 | Creation of Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

---

Aurelia is an open-source web framework collecting Modern Javascript modules to provide a powerful platform for building modern browser, desktop and mobile applications. Rather than being a monolithic framework, Aurelia is broken down into a collection of feature-oriented modules. These modules can then be used for a variety of purposes for building the front-end of web applications. If your goal is to create rich, engaging experiences for your user-base then Aurelia is the platform of choice.

### **Publisher**

Rob Eisenberg

#### Mission Statement

> There are many frameworks to choose from today. We believe that Aurelia provides a fresh and exciting approach to front-end development with power and flexibility that is unmatched by other options. That said, we recognize that each team and each project has different needs. You might find Aurelia to be the right choice for you if...

* You want an all-in-one solution

* You need blazing rendering speed and great memory efficiency

* You require the safety of uni-directional data-flow, but need the productivity of data-binding

* You desire API stability amidst a turbulent JavaScript landscape

* You value high standards compliance

* You think a framework should "get out of your way"

* You like programming models that are easy to learn and remember

### **Feature List**

* **Components**

  Aurelia is built upon Component architecture, composing of HTML view and JavaScript view-model pairs. Aurelia makes it easier than ever to create reusable components for the developer to utilize.

* **Follows Modern Web Standards**

  Aurelia prides itself on offering a simple and easy to use developer environment. It is one of the cleanest modern frameworks, completely focused on following modern web standards without unnecessary abstractions for the user to follow. Having an unobtrusive style makes it one of the only frameworks that allows users to develop their applications using either vanilla JavaScript or Typescript.

* **Creative Data Binding**

  For most modern web frameworks, having some way to bind data is crucial for any developer. What sets Aurelia apart is its ability to use adaptive techniques selecting the most efficient way to observe each property in a given model and having it sync between both the client and server.

* **Broad Ecosystem**

  Not only does the core team provide additional plugins to use when developing an application with Aurelia, but many other third party plug-ins are available as well. These include CLI, VS Code Plugins, Chrome Debuggers and more. Aurelia is not just a powerful platform but also provides an extensive ecosystem for the developer to ensure rapid success.

* **Routing and UI Composition**

  Aurelia has the ability to leverage client-side routing with its pluggable pipeline and child routers. Not only that, but for user's who don't need a router but dynamic, data driven UI composition. Aurelia covers both grounds by consistently adopting and changing its framework to fit a diverse need from the developers.

* **MV with additional Conventions**

  Aurelia stands out as one of the few frameworks that offers the use Conventions. Situating your code at the center of your app, rather than the framework specifically. Conventions let you focus on your code and your business logic in one fell swoop.

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 2.0 |
| Size of Framework | 63 kB |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://aurelia.io/) |
| Instillation | [Follow Here](https://aurelia.io/docs/tutorials/creating-a-todo-app) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## **Code Sample**

[Aurelia Sample](https://codesandbox.io/s/a-simple-component-forked-heh6b?fontsize=14&hidenavigation=1&theme=dark)

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

* **Easy to Learn for any Newcomer**

  Having the ability to write code Aurelia in your own way without any obstructions makes the framework extremely easy to learn and adapt to for newcomers and veterans alike. If you know modern JavaScript/TypeScript and HTML, there's very little left to learn when it comes to building complex apps through Aurelia.

* **Incredible Performance**

  Aurelia was built with having high performance in mind. Having a reactive system capable of batching DOM updates in its own unique way sets it apart from other various front-end frameworks.

* **Reactive Data Binding**

  Aurelia offers a unique way to data-binding. Not only through one-way and two-way binding but also with its adaptive techniques in selecting the most efficient way to observe each property in a model and syncing that data between both the client and server.

* **Offers an Extensive First-Party Ecosystem**

  The core Aurelia team has provided a variety of first party plugins for developers to utilize. This includes, state management, internationalization, and validation. Not only does Aurelia have core plugins to implement in your application but also offers optional tools to enhance the experience. Aurelia prides itself on offering not only a powerful platform fro the developer but also an extensive ecosystem.

* **Unmatched Customization for the Developer**

  You have the ability to create custom elements, add your own custom attributes to already existing elements, generate your own templates, customize the syntax of those templates, create your own reactive data binding and much more. Aurelia's customization seems unmatched compared to other frameworks on the market.

* **Easy to Test and Debug**

  Having a super approachable framework with the ability to write vanilla JavaScript or even TypeScript also makes way for the ability to condone unit testing. Aurelia also provides developers the ability to write integration tests. Having a powerful dependency injection container and testing library built alongside the framework makes it easier than ever to integrate tests within the application.
  
* **Advanced Routing and Progressing Your Application**

  What's great about Aurelia is its form of progressively enhancing already established projects. Through what the development team calls a "script-tag" build, Aurelia can easily coexist alongside your application. Along with that, Aurelia also has advanced in client-side routing by offering a pluggable pipeline for developers to use as well as child routers.

### Cons

---

* **Small community support**

  Compared to many other frameworks on the market, there is not much third-party developer support for Aurelia. It would be great to have more plugins and extensions created by the community to utilize alongside the framework and first party plugins.
  
  Having a smaller community makes for less name-recognition by developers, less support through community forums and feedback, minimal video tutorials, and much less to offer. Unfortunately, researching on Aurelia only further proved the fact that it is struggling to gain popularity. When it comes to working with a framework with a larger community it only makes for a smoother process with first-time development. So here's hoping Aurelia will eventually gain some traction.

* **Not Recognized by Larger Companies**

  Another similar con, would be not many large companies seem to utilize Aurelia with their applications. For a framework that offers a lot of similar functionalities as others, it only makes sense that larger companies wouldn't make the change in their applications to implement Aurelia. Hopefully companies are working on future projects that use the framework and this only boosts Aurelia in its popularity.

## **Compare and Contrast**

---

### **Aurelia vs. React**

### **Performance & DOM**

Both React and Aurelia equally offer great opportunities to develop large-scale front-end applications.

The large difference lies in React.js use of its virtual DOM while Aurelia operates using the real DOM with an addition to reactive binding (exclusive to Aurelia).

The virtual DOM allows the application to update without rewriting the entire HTML doc. This makes rendering a lot faster and ensures for better performance.

However, Aurelia tackles their handling of the DOM through reactive-binding making both frameworks compete at similar rate whenever the client needs to update. You wouldn't be able to tell the difference if the two apps (one being React and one Aurelia) went head-to-head.

### **Data Binding**

Data binding is a feature that could either make-it or break-it for the developer.

Luckily Aurelia uses both one and two way data bindings, offering the choice in the developer and how they want the data to be affected by the users interaction.

React only uses one-way binding - this can make the code more secure, stable, and the debugging a lot easier, as it's a straight forward relationship rather than having both sides impact the model and it's data.

### **Component Architecture**

Both React and Aurelia are built solely off of the Component-based architecture. Following modern web framework standards and offering the ability for the developers to create reusable components anywhere in the application.

### **Size of the Framework**

Surprisingly both of the frameworks are the same size and have very little differences in performance due to its similarity in size.

| Framework | Size |
| ----------- | ----------- |
| Aurelia | 98.81 kB |
| React | 97.5 kB |

## **Conclusion**

---

### **Why Consider Aurelia?**

Aurelia offers a lot when it comes to any open-source front-end framework. A phrase that often comes to mind while writing this document is, "easy-to-use" and this framework is the embodiment of that phrase. For those who don't like to rely on many dependencies in order for your application to run, Aurelia has you covered. With an "all-in-one" solution, Aurelia provides an abundant ecosystem for the developer to uncover. With modern features like dependency injecting, templating, advanced routing and much more. Aurelia at its core has everything you need in order to build out an advanced web application from day one. Luckily, you don't need to gather  a variety of tools in order to build the project. With Aurelia, it provides a CLI for generating and building projects, making it all the more easier for the developer. Aurelia truly is a framework that is "easy-to-use".

Now, after working on the Code Sample for this research document, it only reassured the fact that Aurelia is one of the most approachable frameworks on the market. Having the ability to write in Vanilla JavaScript was a breath of fresh air compared to the tight-nit requirements that other frameworks throw at you. However, that being said, having very little in the way of community support by developers negatively impacts the way Aurelia is seen by the public. When writing the code sample, it became very apparent fairly quick that almost all bugs what will occur during the time of development will not be solved through community forums, or documentation (like StackOverFlow) but rather by my own hand. For a framework that prides itself on approachability and ease of use, they really should look into boosting their PR and community support as not many developers are currently backing this framework.

Fortunately and unfortunately, these kinds of occurrences come with almost any new framework you first start to work with and it only takes time to overcome some barriers. Aurelia really has a lot going for it in terms of breaking common molds and laying down the groundwork for what's to come with modern front-end frameworks. Seeing so much innovation and change to truly  benefit the common developer and their goal in creating advanced web applications is rather unfortunate when you realize how little this framework is known in the eys of the tech world. It would really benefit the core development team to see this framework gain some popularity as it's core features make it stand out compared to other popular frameworks. Here's hoping this framework doesn't fade into obscurity, but rather only gains in popularity as the years go on.

But don't just take my word for it, here is a direct source of all the reasons as to why [Aurelia](https://aurelia.io/docs/overview/what-is-aurelia#why-choose-aurelia) may be your next framework of choice.

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 4 | 5 | 5 | 3 | 4.3/5 |
