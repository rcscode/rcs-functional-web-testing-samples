# React.JS

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/9/2021 | Creation of Document |
| 2/10/2021 | Modifications to the Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

React.JS is one of the pinnacle front-end frameworks designed for building responsive user-interfaces. The company, Facebook, teamed with individual developers and various companies to build React into what it is today. As of now, Facebook and it's community of developers are the lead contributors to the framework. React can both be developed for single-page web applications or for mobile devices using the framework, [React-Native](https://reactnative.dev/). Something that is unique to React is its concern with state management and how it renders the state to the Document Object Model (DOM). This usually results in the need for various other libraries to be integrated with the React app in order to complete a fully-functional application. For instance, a library called React-Router would be used in order to route components to their respective pages.

### Mission Statement

>React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time. (Pete Hunt, 2013)

### **Publisher**

**Jordan Walke** / **Facebook**

### **Feature List**

* Components
  
  >React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props".
  
  There are two main types of React Components:

  * Functional Components

    These components are declared with a function that then return some form of JSX:

        const Greeting = (props) => <div>Hello, {props.name}!</div>;

  * Class-based Components

    These components are declared using ES6 based syntax:

        class ParentComponent extends React.Component {
            state = { color: 'green' };
            render() {
                return (
                <ChildComponent color={this.state.color} />
                );
            }
        }

* Virtual Dom

  >Another notable feature is the use of a virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.

* Lifecycle Methods

  >Lifecycle methods use a form of hooking that allows the execution of code at set points during a component's lifetime.

  Here are some examples of those methods:

  * shouldComponentUpdate()
  
  Prevents unnecessary re-rendering of a component by returning false of the initial rendering is not required.
  
  * componentDidMount()

  This method is called once the component has initially been created in the UI. This is commonly used to load data as soon as the page has been rendered.

  * componentWillUnmount()

  This is basically the opposite of the prior method. It is called immediately before the component is removed or "unmounted".

  * render()

  This method is required from any component as it is what will be called in order to render the actual UI and will continuously update whenever data changes in the state.

* JSX
  > JSX, or JavaScript XML, is an extension to the JavaScript language syntax. Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be and may also be written in pure JavaScript.

### **Sample Projects**

[Notus React](https://www.creative-tim.com/product/notus-react)

[Now UI Dashboard](https://www.creative-tim.com/product/now-ui-dashboard-react)

[BLK Design System Pro](https://www.creative-tim.com/product/blk-design-system-pro-react)

[QRBTF](https://github.com/ciaochaos/qrbtf)

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 17.0.1 |
| Size of Framework | 98.81 KB |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://reactjs.org/)  |
| Installation | [Follow Here](https://reactjs.org/docs/getting-started.html) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## **Code Sample**

Here is a code sample we created to outline the features of React.JS so you may compare it to other frameworks on the market.

[React.JS Quiz](https://codepen.io/wistydagel/pen/wvooyrd)

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

After much time working with React.JS and devising a sample project for you to look over. We have found React has quite the extensive features in building many top-end web applications. To give you a more extensive idea on what we think please look to our pros and cons list below.

### Pros

---

* **Let's start of by talking about Reacts use of the _Virtual DOM_**.

  With the traditional DOM construct, the way data is processed tends to run rather slow as the server is constantly checking between the changes and its way of responding.

  However, React has managed to significantly increase the speed of updating the page and it's way of responding by the use of the virtual DOM. Instead of using the real DOM like other frameworks would do, React.JS uses a copy. This is how the React Framework can make changes so efficiently as the developers can programmatically intend for whatever changes may be made by the user and update them instantaneously.

* **The ability to reuse React components significantly reduces development time and less headache for the developer as a whole.**

  Think of it like this. If you were to build a house and the initial time you built that house, you created a blueprint to follow, knowing that you would be building that same house again in another location. Wouldn't doing so cut a lot of time in the initial time in design off? Yes. Well, this is the same for React and its ability to reuse components.

* **The extensive community and support from developers.**

  One of the many great benefits to React is the amount of libraries you can pull from and use to better the development and dynamics to your own application. Thanks to Facebook and its choice to make React open-source. You will find an extensive amount of libraries to choose from.

* **The _state_ container**

  The ability for the React components to house their own state variable where you can access or update it's data at any moment, makes for a really easy development cycle.

* **Reacts use of Lifecycle Methods**

  For our application, we were pulling from an outside API to get quiz data and needed that stored within the state. For React to have an ability to instantly call method the moment the page loads to retrieve that data and then instantly display it is an absolute lifesaver for development.

* **React is a framework designed and built by developers**

  Instantly working in this framework you can tell that the nuances of pure JS development have been flushed away, as the developers of React put the concerns of the programmer first.

### Cons

---

* **A forever changing development environment**

  For many developers who consistently use React they must also consistently relearn new ways of doing things. With the amount of support this framework receives there a constantly updates to how it behaves and is designed. Everything is revolving with React, so developers must always look out for the latest update and anticipate the changes that must be made to their application. On the upside core React is at a rather stable state and any updates we may face today are more library-side.

* **Documentation could be better for such an extensive framework**

  This goes in tandem with the previous con. Being how the framework is consistently updating and changing the documentation that follows must also follow the same pace. Unfortunately, it doesn't. With researching this framework, some developers even report that Reacts technologies are updating so quickly that their is no point in writing any documentation to support their React-based libraries as it will become obsolete soon after.

* **JSX can be a hassle compared to standard HTML**

  For those who are used to working with standard HTML may find there is a bit of a learning curve when it comes to working with JSX.
  
  JSX itself is a mix between HTML and JavaScript and for those who are not comfortable with mixing the two languages together may find their code comes across as messy and ugly to read. It may not be the worst thing in the world to deal with but it most definitely is not the best looking markup language out there.

## **Compare and Contrast**

### React vs Vue

#### **React**

* React is mainly a library concerned with rendering UI elements and it stays true to that purpose. It is fairly open in its use of building web applications.

* In most cases, having just a library for rendering UI is not enough, so other packages are typically added (create-react-app with routing, CSS-in-JS, state management, etc.) to improve the experience for the user. With these additional add-ons, the React app becomes more framework-like.

* Scripting HTML elements is done with JavaScript XML (JSX) which are HTML-like elements plus standard JavaScript to create conditional-based renders or even loops-based renders.

      const toDoItems = todos.map((todo, index) =>
        <li key={index}>{todo.text}</li>
      );

* It is less tied down to it's own language as most constructs derive from standard JavaScript. So, this can make for a steeper learning curve but will help improve JS language skills for most developers.

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

## **Conclusion**

### **Why Consider React.JS?**

There are many great elements to React.JS. For one, it makes it rather painless to create interactive user interfaces. You can design simple view elements for each state in your app and React will update the UI whenever a change has been made to the data. Second, you can build encapsulated components (decoupled from the main JS file) that manage their own state, which then are integrated with other pages to make for rather complex UIs. And third, React can be blended with whatever technology stack your current app is using. It is easier than ever to develop new features in React without rewriting any of your existing code.

Not to mention if you are ever in the need to develop a mobile application React has your back with [React-Native](https://reactnative.dev/).

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 3 | 4 | 2.5 | 4.5 | 3.7/5 |
