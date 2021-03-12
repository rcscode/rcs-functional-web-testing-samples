# Vue.JS

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/4/2021 | Creation of Document |
| 2/7/2021 | Modifications to the Document |
| 2/8/2021 | Further Modifications to the Document |
| 2/9/2021 | Fixed a small issue |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

Vue.Js is one of the pinnacle JavaScript frameworks used by many businesses today. It is an open-source front-end framework used for building user interfaces and single-page applications (SPA). Vue aims to follow its three principles; Approachable, Versatile, and Performant. If you already know HTML, JavaScript, and CSS then this framework is rather approachable for any developer. It is versatile in its incrementally adoptable ecosystem, scaling between a library and a fully-featured framework. With it's incredibly small download size of only 20KB (with gzip), blazing fast virtual dom and minimal optimization efforts. Vue.JS has a lot to offer in its performance.

### **Publisher**

Created by **Evan You**.

### **Feature List**

Components

> Vue components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue's compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.

Templates

> Vue uses an HTML-based template syntax that allows binding the rendered DOM to the underlying Vue instance's data. All Vue templates are valid HTML that can be parsed by specification-compliant browsers and HTML parsers.

Reactivity

>Vue features a reactivity system that uses plain JavaScript objects and optimized re-rendering. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render.

Transitions
>Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM.

This includes tools to:

* Automatically apply classes for CSS transitions and animations
* Integrate third-party CSS animation libraries, such as Animate.css
* Use JavaScript to directly manipulate the DOM during transition hooks
* Integrate third-party JavaScript animation libraries, such as Velocity.js

Routing

Traditionally Single Page Applications do not allow for routing to the exact subpage of a specific webpage. This is due to the server of a SPA serving only one URL-based response to the user rather than multiple URL's.
>Vue provides an interface to change what is displayed on the page based on the current URL path – regardless of how it was changed (whether by emailed link, refresh, or in-page links). Additionally, using a front-end router allows for the intentional transition of the browser path when certain browser events (i.e. clicks) occur on buttons or links.

### **Sample Projects**

* [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin)

* [Awesome Vue.JS](https://github.com/vuejs/awesome-vue)

* [Hoppscotch](https://github.com/hoppscotch/hoppscotch)

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 2.6.12 |
| Size of Framework | 92 KB (compressed) / 334 KB (uncompressed) |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit here](https://vuejs.org/) |
| Installation | [Follow here](https://vuejs.org/v2/guide/installation.html) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## **Code Sample**

Here is our own code sample used to outline the features of Vue.JS compared to other frameworks in the market.

[Vue.JS Quiz](https://codepen.io/wistydagel/pen/MWbKMqE)

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

After spending much time working with Vue.JS to build our Code Sample and researching a lot about the framework to gain a better understanding of it's entirety. We have found that Vue.JS offers a lot in it's ability to make a Single Page Application transform into a fully-fledged website.

### Pros

---

* Vue is a progressive Framework, so if you were to already have an existing server-side application. You can simply inject Vue into your app in order to fulfill certain requirements of your application.
  * You can connect the the framework by inserting this snippet into your html page
  
        <script src = "https://unpkg.com/vue></script>

* Building an application purely with Vue.JS in mind. You will have all the Core libraries already provided for you in order to build your application.

* Similar to some other Front-End frameworks. Vue allows for reusable components each containing its own HTML, JS, and CSS needed to render the specific component of the webpage.

* Vue is reactive and whenever data has changed it will update the webpage immediately wherever that data is currently being used.

* Vue embeds pseudo code into your html elements in order to loop through objects and display their value, conditionally render an element based on true or false and much more.
  * Looped Rendering Example

        <li v-for="product in products"></li>

  * Conditional Rendering Example

        <span v-ifr="product.quantity === 0"></span>

* You can simply bind models which reside in the 'data' object to data that is given via an input field. This makes for very simple on-the-fly updates to any data you are currently taking any input from in your application.

  * String Example

        <input type="text" v-model="product.name"></input>

  * Number Example

        <input type="number" v-model.number="product.quantity"></input>

* If you're using Google Chrome, Vue has a developer tools plugin which you can use to vew your data easier than the standard developers window offered via Chrome.

   [plugin](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

### Cons

---

* As you can see in our sample, Vue Syntax can quickly become congested to anyone who hasn't used it for very long. For example; Loading in all of your methods within an object called methods and having that reside in your actual Vue Object can start to look pretty nasty the longer your page gets.

* Surprisingly enough while researching this framework, there was a bit of a language barrier when it came to seeking specific information and sifting through discussions in forums. Being that this framework is increasingly popular in China, many of its content and documentation is still in Chinese.

  This most definitely is a problem for developers who are only English-speaking and do not know Chinese. So, don't be surprised if you stumble your way into any Chinese forums or discussion when searching for Vue content.

* Vue has a lack of support for very large-scale projects. As the development team behind Vue is a lot smaller than that of Angular's for example. So, the framework is still lacking the capability to support projects that many large companies like IBM or Adobe are trying to sustain. Due to it's support for smaller applications, we will not be seeing these kinds of companies shell out their resources and financial support in order to back something like Vue just yet.

* Vue.JS is still a relatively young framework and it still has a lot to improve on when you compare it to the more seasoned frameworks like React or Angular. Certain elements may be implemented better. However, the framework has a long way to go.

## **Compare and Contrast**

### Vue vs React

#### **Vue**

* This framework is also focused on rendering the UI, but it has also added more convenient features to its ecosystem to benefit the developer (Vue CLI, Vuex, Vue Router). It is not necessarily rigid in its design, but it gives more guidance and convenience to building apps.

* By default, Vue components are separated into three main categories; template, scripts, and styles to separate its constructs.

* The templates are custom Vue attributes added to HTML elements to output dynamic content that requires an if-statement, loops, etc.

      <ul>
        <li v-for="todo in todoList" :key="todo.message">
          {{ todo.message }}
        </li>
      </ul>

* It is more specific it's own syntax and less reliant on standard JavaScript, which can lessen the learning curve but you may not pick up as much JavaScript knowledge using Vue.

#### **React**

* React is mainly a library concerned with rendering UI elements and it stays true to that purpose. It is fairly open in its use of building web applications.

* In most cases, having just a library for rendering UI is not enough, so other packages are typically added (create-react-app with routing, CSS-in-JS, state management, etc.) to improve the experience for the user. With these additional add-ons, the React app becomes more framework-like.

* Scripting HTML elements is done with JavaScript XML (JSX) which are HTML-like elements plus standard JavaScript to create conditional-based renders or even loops-based renders.

      const toDoItems = todos.map((todo, index) =>
        <li key={index}>{todo.text}</li>
      );

* It is less tied down to it's own language as most constructs derive from standard JavaScript. So, this can make for a steeper learning curve but will help improve JS language skills for most developers.

## **Conclusion**

### **Why Consider Vue.JS?**

If you already know HTML, JavaScript, and CSS then this framework is rather approachable for any developer. It is versatile in its incrementally adoptable ecosystem, scaling between a library and a fully-featured framework. With it's incredibly small download size of only 20KB (with gzip), blazing fast virtual dom and minimal optimization efforts. Vue.JS has a lot to offer in its performance.

There is a reason why Vue.JS is one top JavaScript Frameworks for front-end development and that is purely in its simplicity of design and its ease of use for building robust Single Page Applications.

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 4 | 4 | 3.5 | 4 | 4/5 |

Opinions, Testing Criteria, Pros / Cons
