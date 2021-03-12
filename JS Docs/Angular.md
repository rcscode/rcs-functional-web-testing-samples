# Angular.JS

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/11/2021 | Creation of Document |
| 2/12/2021 | Modifications to the Document |
| 2/15/2021 | Further Modifications to the Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

AngularJS is an open-source front-end web framework built from the ground-up through vanilla JavaScript. The framework was created by both Google and a variety of individual developers aiming to extend the HTML vocabulary in adding more dynamic views for your web applications. This framework addresses many of the concerns developers previously had when it came to creating Single-Page Applications (SPA).
It does this by simplifying the development cycle by implementing a client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) architectures, as well as components similarly to what is used in both React and Vue.

### **Publisher**

Google

#### Mission Statement

> AngularJS is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.

### **Feature List**

* MVC Framework
  
  A very popular feature AngularJS has to offer is its "Model View Control" architecture. This provides developers the perfect opportunity implement dynamic modelling. Normally, when developing an application it consists of multiple modules consisting of different logic and developers need to combine these modules together with code in order for their application to work.

  With MVC, AngularJS makes it super simple for developers by automatically combining their separated modules into the client-side web application. Saving the developer a great amount of time and effort.

* Expanding HTML User Interface
  
  Unlike other popular JS Frameworks, Angular utilizes the standard HTML language to build its user interfaces. It expands the use of HTML by implementing model-based rendering, data-binding, and much more.  

  >HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

* Access to Javascript Models

  AngularJS utilizes the "Plain Old JavaScript Objects" model (POJO), which is already beneficial to many developers who are used to writing in standard JavaScript. Previous data models required the constant monitoring of data flow and sequences. However, a POJO model only requires well-planned objects and logic. This means that Developers only need to create loops with the right properties and mess around with their code until the correct result has produced. Following the POJO model makes it easier for the developer to build highly-interactive and user-friendly applications.  

* Directives

  Something unique to Angular is it's use of directives by providing extra functionality with the HTML language. Additional elements do not require any use of the DOM to be accessed and the controller doesn't need to manipulate the DOM directly, as this is all handled via directives. Directives make up a separate part of the element set which can be used anywhere other than in a web application. AngularJS and its use of directives only enhance the HTML language for its developers.

* Filtering

  This feature is just as it sounds. It simply filters out the data before it reaches the view. By performing paginations and filtering through data arrays within th4e scope of it's parameters. Filtering has a lot to offer and luckily, it can also be modified by including parameters to follow. This system works by putting information into the right format before it is delivered to the end-user.

* Unit Testing Facilities

  AngularJS has streamlined the use of Unit Testing by using Dependency Injection to bind both the Angular application and testing framework together. This helps smooth the process in managing the application and its overall functionality.

  > All controllers available within the AngularJS unit testing facilities are dependent on the dependency injection.
  
  This means that you can adjust certain aspects to find out the preferred configuration for data or an app.

* Templates

  Another fantastic feature to AngularJS is its use of Templates. This makes it way easier for the developer to streamline their dev-cycle and utilize previous templates they have already created with their new application. In this fashion, templates are made of plain HTML, but the language can be extended to include instructions for developers on how the model should be displayed in the end view.

  This unique use of templates offered by AngularJs makes it easier for both designers and developers to work in tandem. The designer can write their HTML normally, while the developers can take the same HTML and add the respective functionality to it.

### **Sample Projects**

* [Soundnode App](https://github.com/Soundnode/soundnode-app)

* [Duckie TV](https://github.com/SchizoDuckie/DuckieTV)

* [Taiga-Front](https://github.com/taigaio/taiga-front)

* [Awesome AngularJS](https://github.com/gianarb/awesome-angularjs)

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 1.8.2 |
| Size of Framework | 144kB (minified and compressed) |
| Licenses | MIT  |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://angularjs.org/) |
| Instillation | [Follow Here](https://angular.io/guide/setup-local) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | X |

## **Code Sample**

Here is a code sample we created to outline the features of Angular.JS so you may compare it to other frameworks on the market.

[Angular.JS Quiz](https://codepen.io/wistydagel/pen/yLVgEdE)

### Code Specifications

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

After much time working with AngularJS and devising a sample project for you to look over. We have found Angular has quite the extensive features in building many top-end Single Page Applications. To give you a more extensive idea on what we think please look to our pros and cons list below.

### Pros

---

* **Two-way Data Binding**
  
  Super convenient for any developer as it always ensures the changes made to the model will be displayed in the view and vice-versa.

* **No DOM Manipulation**

  Unlike other popular front-end frameworks, most notably Vue or React. AngularJS does not require the developer to actively manipulate the DOM and this is due to two-way data binding. This really cuts back on the headache and learning curve that is required when you normally need to update the DOM elements directly.

* **Responsive Applications**

  Angular JS makes it both easy for the developer and user when it comes to building and displaying SPAs. By supporting caching and many other processes, Angular reduces the burden from servers CPU. This means that the AngularJS application will be responsive, fast-loading and can be navigated more seamlessly.

* **Easy to Pick Up**

  After spending very little time building out the code sample, it became very apparent how easy it was to pick up on AngularJS and how it operates. If you are a fast learner and are comfortable with working in a variety of frameworks, then AngularJS will be no trouble to you whatsoever, *at the start*.

### Cons

---

* **MVC Can be a Challenge to Follow**

  For developers who are used to the traditional form of development (HTML, JavaScript and CSS) than you may find yourself a little lost when working with Angular's MVC architectural structure. Using Angular can be extremely time consuming and in case you have strict deadlines to meet then this framework may not be the correct method of choice.

* **Angular Scopes**

  * What are scopes?

    Well scopes are what bind the HTML (view) with the JavaScript (controller)

  If this is going to be your first experience with Angular than the quick layered and hierarchically arranged scopes will be complex entities to handle. What makes it even harder is the time it takes to debug scopes as you aren't explicitly told what the problem is and given ways to fix it.

* **Performance**

  Although our application is very simple and doesn't require much to render on the given page, this doesn't mean all SPAs will run swimmingly. Complex applications could be laggy and slow to render due to their larger size.

* **Hard to Master**

  Being how Angular is very diverse and offers a lot for the developer to master, there are always more than one way to complete a task. One example could be the sample we developed for this research document. In order to retrieve the data from the Quiz API, there are multiple ways to go about getting that data and it makes it harder for us, the developer, to understand which one is the correct method to implement. Luckily, there is a lot of support in Angular's community which can easily remedy these frustrations.

## **Compare and Contrast**

### **Angular vs. React**

### Performance & DOM

Both React and Angular equally offer great opportunities to develop large-scale front-end applications.

The large difference lies in React.js use of its virtual DOM while Angular operates using the real DOM.

The virtual DOM allows the application to update without rewriting the entire HTML doc. This makes rendering a lot faster and ensures for better performance.

This leaves the experience on Angular to be slower when dealing with frequent data requests.

### Data Binding

Data binding is all about synchronizing data between logic and the UI.

The difference here is that Angular uses both one and two way data bindings - changing the data will impact the view and vice-versa.

React only uses one-way binding - this can make the code more stable and the debugging a lot easier, as it's a straight forward relationship rather than having both sides impact the model and it's data.

### Component Architecture

If you are using Angular 2 then the framework will offer component-based architecture and is very similar to how React handles its architecture. However, AngularJS is still locked in on its MVC method of structure and does not offer the ability to break up your app into multiple components.

Unlike AngularJS, React is built solely off of the Component-based architecture. That being said, you will also need multiple integrations and external tools in order to run the React-App, this includes; Redux, Babel, Webpack, etc.

AngularJS does not need any external tools in order to run its framework.

### Size of the Framework

Simply put, the smaller the file size the faster the application loads.

Angular solves this problem by not including everything in its build within the developer's app. During the build process it ignores things like development utilities and unused modules. The framework then minifies and compresses the rest and this results in better optimizations.

ReactJS utilizes Webpack, splitting your code into smaller parts and also has dynamic imports that reduce the bundle size. With dynamic imports it only loads what is needed for the app initially and then dynamically loads the rest whenever it is needed.

## **Conclusion**

### **Why Consider Angular.JS?**

For anyone looking to make a web-based application that blends standard HTML with new and innovative ways to code via JavaScript, then AngularJS is the front-end framework for you. As you are choosing to use a framework that will assumedly never die as it is backed by Google, offers detailed documentation, and has a wide range of support from its community. AngularJS has thousands of additional tools and libraries that can be used in any Angular app.

Although the framework may be easy to pick up it can be very hard to master and leave you frustrated with your application. So, make sure to have some patience when using this framework, take the time to research your problem, and do some trial and error when necessary. As the advantages of using Angular far outweigh some of the disadvantages.

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4 | 2.5 | 3 | 2.5 | 4.5 | 3.3/5 |
