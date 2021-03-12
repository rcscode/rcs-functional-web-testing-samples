# Backbone.JS

## Document History

| Date | Description |
| ------------- | -------------- |
| 3/3/21 | Creation of Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

---

Backbone JS is a front-end library with a RESTful interface and is based on the model-view-controller (MVC) application design structure. It is known for being lightweight and not relying on many dependencies like other popular front-end libraries. The only hard dependency is the Underscore.js library and that is due to the fact that both Backbone and Underscore were developed by the same person, Jeremy Ashkenas. The library was designed for developing Single Page Applications (SPA) and keeping both the server and client synchronized with one another.

>Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.

### **Publisher**

Jeremy Ashkenas

### When to use Backbone JS

* When you are creating an application which requires numerous lines of JavaScript or JQuery code. If you are working with a complicated project that includes:

  * Adding or replacing DOM elements to the application
  
  * Making requests from the server to client

  * Showing various animations in the application

 Then Backbone JS is the library for you.

* If you want develop an app with a sleeker design with less code, the Backbone JS library offers better functionality, organization and structure.

* With Backbone JS making it easier for the developer with its use of events. Your code will be cleaner, easy to read and maintain.

### **Feature List**

* **JavaScript focussed**

    JavaScript is utilized in all aspects of the library. It allows for development using JavaScript functions and does not have any prerequisite for what is needed to know in order to use the library. Furthermore, it updates the HTML whenever a change has been made.

* **Efficient Communication between the client and server**

    Backbone manages the data model, consisting of the user data, and then displays it at the server-side with the same format written at the client-side. Once the change to the user data has updated, it will then reflect back on the client-side instantaneously.

* **Realtime Updates**

    For the developer, if you're afraid of having to stop your server in order to push out the most current version of your product. Fret not, as you can update any of your code simultaneously while the user is online.

* **An extensive amount of libraries/extensions on offer**

    Being an open-source library, Backbone provides over 100 extensions for the developer to choose from. For example, it has an easy-to-use library that is used to separate user interface logic and business logic.

### **Sample Projects**

For an extensive list of Backbone Projects published on Github, [click here](https://github.com/jashkenas/backbone/wiki/Projects-and-Companies-using-Backbone).

## **library Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 1.2.1 |
| Size of library | 7.6 kB |
| Licenses | MIT |
| Source Language | JavaScript |
| library Webpage | [Visit Here](https://backbonejs.org/) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## **Code Sample**

[Backbone Sample](https://codepen.io/wistydagel/pen/xxRzQwQ)

### Code Specifications

---

1. The library should be able to fetch a collection of questions and answers using the predetermined Quiz API

    * The data is then stored as an object
    * We will store the question as a String variable
    * Store the correct answer as a String variable
    * Store the incorrect answers as an array of Strings

2. The questions are limited to 5 questions

    * This is so we can keep the sample short while also demonstrating the capabilities of the library

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

* **Lightweight**

    For any library, having a fast and responsive library is everything to the developer and what they are intended to build for the user. With Backbone JS being only 7.6 kB in size, the library is able to achieve these requirements in spades.

* **Inclusion of small libraries and extensions**

    With Backbone, the inclusion of a variety of libraries/extensions are one of it's core values. Having a better ecosystem at the hands of the developer makes for a better application overall. With the inclusion of several libraries, like LayoutManager or Marionette, Backbone JS has plenty to offer in making the development process much easier and more manageable. Not to mention that you can also create your own MVC library using Backbone JS and this can be shared globally making support for the library all the more better.

* **Model/View Structure**

    Abstract code is crucial to any type of programming and having a library which incorporates the values of Object Oriented Programming is a necessity for modern development.

* **Easy to follow Documentation**

    With documentation being accessible straight from the home page, Backbone does not mess around when it comes to learning all the intricacies of the library. Having tons of documentation, both on the library's source page and scattered all throughout the internet. Developers will find learning this library to be fairly easy to do and not too difficult to manage.

* **Event-driven communication**

    With any large project, having complex declarations be distributed throughout the application can become fairly overwhelming and difficult to manage all at once. Backbone JS solves this issue by utilizing event-driven communication. By simply attaching listeners to the model's attributes you can control everything that can be changed in the view and now your data/model can easily update whenever a change occurs.

### Cons

---

* **Hard/Soft dependencies**

    Unfortunately Backbone JS has a soft dependency on the use of jQuery for both RESTful persistence and DOM manipulation with the view. If you are not familiar with how jQuery works then you will be spending a good amount of time researching and learning how to further develop your Backbone JS project in order to gain the benefit of what this library has to offer. Luckily, this can be avoided if you are either using another library to help with these features or mixing Backbone with another project that already has this covered.

    The other issue is it's hard dependency on Underscore.js and how the user must understand the library in order to use Backbone. However, having this be only one additional library needed in order to use Backbone is a rather small asking price. Additionally, Underscore was created to help rid any development bloat and provides over 100 functions for the developer to call on at any time when using both the library itself and Backbone JS.

    For more on Underscore.js, [click here](http://underscorejs.org/)

* **Loss in structure/architecture**

    Due to Backbone being far less opinionated than other libraries out there. The application you develop is more dependant on what you know of the library than it giving you the structure you need to follow in order to complete the project. Having this lack of structure can make things much more challenging and unclear for the developer.

    Luckily, there are plugins and extensions which you can implement in your Backbone project to give you more of the structure you need.

* **Small community support**

    Unfortunately, Backbone JS is on the decline in popularity compared to many front-end libraries out there on the market. Due to a lack of relevancy today and not seeming to invoke any modern-day development necessities is only furthering the fact that Backbone JS is losing it's community and support from developers world-wide.

* **Potential for memory leaks**

    Similar to what was touched on earlier, having a lack of structure can make the weight of the project rely too heavily on the developer and what they know in order to develop a Backbone project. This can lead to many complications and more notably memory leaks created by the developer and how they are writing their code.

* **Lack of two-way data binding**

    Unlike many popular front-end libraries, Backbone JS lacks the ability for two-way data binding. Not having the streamlined ability for the view to update whenever the model changes and vice versa, can be a huge set back in the eyes of the developer.

## **Conclusion**

---

### **Should you consider Backbone JS?**

Overall, Backbone has a lot to offer when it comes to developing Single Page Applications. Even in it's name, it is designed as a library which provides support in the ability to handle HTML requests between the client and server, simplifying complex UI design and reducing the amount of code that's needed. Being the "backbone" for web applications, it is seen as one of the most widely used JS libraries (not frameworks) to date and it is mostly due to its accessibility in how it handles its models, routes, collections, extensions and much more. Having it be one of the smallest libraries to date makes it one of the fastest and most responsive libraries to use as it is not bogged by many dependencies and hooks in order for your application to operate. Having many companies like Reddit, Uber, Pinterest, LinkedIn, Walmart and much more further prove the fact that Backbone is capable of handling business-level tasks and isn't a library just built for "small projects". Having the library depend solely on JavaScript for it's language also makes the experience far less confusing compared to other frameworks.

However, if you find you are a new-comer to web development and are looking for a fresh framework/library to help guide you in creating new and innovative sites. Backbone JS is not for you. This library is clearly structured in a way to help elevate and lighten the load for those who are already have established websites or applications. Being that there is very little structure to Backbone itself and is rather open ended in how it operates with vanilla JavaScript may leave many new developers with more questions than answers. Furthermore, to be frank, Backbone is dying in the eyes of modern developers. There are flashier libraries/frameworks out there that do a lot more of the work and provide a better experience for the consumer overall. For example, ever since Angular had stepped into the light providing a similar MVC structure for developers. Backbone has only gained less traction and from the looks of it, is continuing to spiral down the road of obscurity. This isn't to say Backbone is dead... far from it as a matter of fact, but it is good to be aware of the trends we are seeing in today's market.

Nevertheless, if you are looking to develop a single-page application and need a library which requires a small download, reduced need of code, an open-ended structure, and has an abundant amount of extensions and plugins to only enhance your project. Then consider implementing Backbone JS in your next application.

### **Our Score**

Here we will be rating the overall library out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 3.5 | 3.5 | 4 | 3.5 | 2 | 3.3/5 |
