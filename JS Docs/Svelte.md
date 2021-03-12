# Framework

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/17 | Creation of Document |
| 2/18 | Initial research of the framework |
| 2/19 | Stubbed out the pros/cons based on research and devising the sample |
| 2/22 | Continued working on the document and finishing what is required |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

Svelte may be one of the more lesser known frameworks when it comes to building out your front-end but that doesn't mean it is any less capable in doing the job right. Svelte is a radically new approach to building user interfaces as it doesn't do the bulk of it's work in the browser (As seen with React or Vue), but shifts that focus of work into another step when your code is compiling. Instead of relying off of techniques like the Virtual DOM, Svelte writes code that will update the DOM whenever the state of your app changes.

### **Publisher**

Rich Harris

#### Mission Statement

>Svelte applications do not include framework references. Instead, building a Svelte application generates code to manipulate the DOM, which may reduce the size of transferred files as well as give better client startup and run-time performance.

### **Feature List**

* Components

  > Svelte components are built on top of HTML. Just add data.

        <script>
            let name = 'world';
        </script>

        <h1>Hello {name}!</h1>

    **RESULT: "Hello World"**

  * Components can also be shared between different pages

    Page1.svelte

        <p>Svelte has so much to offer!</p>

    Page2.svelte

        <script>
            import Page1 from './page1.svelte';
        </script>

        <Page2/>        

    **RESULT: "Svelte has so much to offer!"**

    [For more on components](https://svelte.dev/docs#Component_format)

* CSS Rework

  >CSS is component-scoped by default — no more style collisions or specificity wars. Or you can [use your favorite CSS-in-JS library](https://svelte.dev/blog/svelte-css-in-js).

  This means that all components that are called in one svelte page will share the styling of that page. For example:

    Page1.svelte

        <p>Svelte has so much to offer!</p>

    Page2.svelte

        <script>
            import Page1 from './page1.svelte';
        </script>

        <Page2/>        

    **RESULT: Both will share the same css as the Page1 component is called into Page2**

* Compiler

  > Trigger efficient, granular updates by assigning to local variables. The compiler does the rest.

        <script>
            let count = 0;

            function handleClick() {
                count += 1;
            }
        </script>

        <button on:click={handleClick}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>

* Powerful Transition Engine

  > Build beautiful UIs with a powerful, performant transition engine built right into the framework.

  You can see an example of it [here](https://svelte.dev/tutorial/local-transitions) on their site.

### **Sample Projects**

* [Svelte Notifications](https://github.com/keenethics/svelte-notifications)

* [Pancake Svelte](https://github.com/Rich-Harris/pancake)

* [Svelte-Firebase](https://github.com/jorgegorka/svelte-firebase)

* [Svelte Sortable List](https://github.com/brunomolteni/svelte-sortable-list)

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 3.32 |
| Size of Framework | 3.8 kB |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://svelte.dev/) |
| Instillation | [Follow Here](https://svelte.dev/blog/the-easiest-way-to-get-started) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| X | ✓ | ✓ | ✓ | ✓ | ✓ |

## **Code Sample**

[Svelte Sample](https://svelte.dev/repl/2d5f951c7f254807b8e2585ef3139d9d?version=3.32.3)

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

### Pros

* **Less code = more fluidity**

By simply keeping your scripts, html, and css housed in a .svelte file. Code is incredibly easy to maintain and there isn't much bloat to the file as it is all dependant on the core functionality of the component.

* **No use of the Virtual DOM**

This helps keep the performance high by having a faster user experience and increasing the ability for the user to stay engaged without any loss of attention by a slowly updating DOM.

* **Truly reactive in it's interface**

With the use of two-way binding, anything that changes on the page will immediately update the value of the data in code and vice versa. Beyond that, it's use of automatic updates whenever a change of data occurs, eliminates the need to wait for the virtual structure to reflect first and then process it in the UI.

* **Does not require the use of extra plugins**

Svelte does not rely on any additional plugins or libraries in order for the web app to work. All tools are immediately accessible as soon as the framework has been installed.

* **Scoped Styling can be done without CSS-in-JS**

CSS is component scoped by default. Meaning that you're style is automatically applied to whatever component you are currently residing in. No more style collisions or specificity wars. If you would like to use your favorite [CSS-in-JS library](https://svelte.dev/blog/svelte-css-in-js), then Svelte does offer the option to do so.

* **Easy to pick up and learn**

The framework utilizes high-quality, readable and compact code. The development environment and maintenance is relatively easy for anyone new to front-end frameworks. For beginners looking to explore the use of front-end frameworks, look no further than Svelte as it's bar of entry is extremely low.

* **The set-up process is relatively small for a front-end framework**

With an install size of only 3.8kB this makes for one of the smallest frameworks on the market. All you need to do to create a Svelte app, is initiate the project using node and degit, then boom! You're Svelte app is ready to go!

For more on the initial set up, [click here](https://svelte.dev/blog/the-easiest-way-to-get-started)

---

### Cons

---

* **Small community of developers**

The community may be small for now. However, it is growing at a steady pace and the framework is still heavy in development. The community will only grow each and every year.

* **Limited in its processes**

The framework is still being heavily developed to this day and has a lot left wanted by developers. Being that the framework is not complete, it is only limited to what the development team has completed thus far.

* **Lack of support when solving technical problems**

Being how the framework is still climbing in it's popularity, there is very little community support in solving problems that developers may run across. Be prepared to handle a lot of the debugging on your own and patiently await for more developers to experience similar problems in order to solve the same issue. New technology has to start somewhere, so the community forums are gaining size slowly.

* **Lack of tools**

Svelte does not offer a lot in the use of tools for debugging and testing the application. Being that the framework is still growing, this may very well be remedied later.

## **Compare and Contrast**

---

### **Svelte vs. Vue**

Here we will be putting two up and coming front-end frameworks head to head with each other and let you decide which is more of a viable option in developing a reactive front-end.

### Performance & DOM

---

When it comes to building fast and responsive front-ends you want to choose the framework that is blazing fast in displaying the most current data to the user.

Well, Svelte and it's use of the rollup plugin ensures that any developer using the framework will see a lightning fast response. Beyond that, with Svelte the majority of what is needed to render a webpage is accomplished during the time your code is compiling instead of during the browser. Comparing this to Vue, you will most definitely see a considerable amount of difference in performance. Vue utilizes webpack instead of rollup and due to webpack being a much more complex bundler, Vue will falter in some aspects of its performance.

The difference between these frameworks manipulating the DOM is that Svelte uses *real* DOM, while Vue makes use of the virtual DOM. Both utilize their own methods of manipulating the DOM and it's how both frameworks are viewed as quick and responsive with its updates to the front-end.

### Data Binding

---

Data binding is everything when it comes to using intuitive front-end frameworks. Luckily, both Svelte and Vue offer the same way of binding data and that is through Two-way binding.

**What is two-way binding?**

>Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s), and that any changes made in the view(s) (say, by the user) are immediately reflected in the underlying model.

### Component Architecture

---

Similar to data binding, these frameworks offer fairly similar ways to build components.

Svelte applications are entirely built upon components. A way you can write components in Svelte are by simply writing them into .svelte files, using a superset of HTML

Here is an example:

    <script>
        export let foo;

        // Values that are passed in as props
        // are immediately available
        console.log({ foo });
    </script>

    <style>
        /* styles go here */
    </style>

By using export, any consumers of the component will be able see the value contained within the consumed component.

For more on Svelte components [click here](https://svelte.dev/docs)

Vue handles their way of components in a relatively similar light. However, the difference here is really in it's nomenclature and syntax. Both in Svelte and Vue components are built as reusable instances which can be consumed and used wherever the web application requires it.

Here is an example to see the difference:

    Vue.component('button-counter', {
        data: function () {
            return {
            count: 0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })

    <!-- Calls for the component in the JSX -->
    <div id="components-demo">
        <button-counter></button-counter>
    </div>

For more on Vue components [click here](https://vuejs.org/v2/guide/components.html)

### Size of the Framework

---

Luckily, both frameworks are incredibly small and offer really good performance due to their light install. That being said, Svelte is incredibly small compared to even Vue, which is already small in its installation.

| Framework | Size |
| ----------- | ----------- |
| Svelte | 3.8kB |
| Vue | 23kB |

## **Conclusion**

---

### **Why Consider Svelte?**

Svelte is a relatively new framework compared to the other popular front-end frameworks out there. However, just because the framework is smaller and has laid less groundwork than others it doesn't mean it should be any less relevant. Svelte has got to be one of the most approachable front-end frameworks for building web-based single page applications. With a relatively low entry point, easy nomenclature, and incredibly fast performance due to it's new and innovative way of handling compilation. Svelte offers any developer the ability to make smaller web projects with ease.

Now, that's not to say it can't handle larger projects, but with it being fairly small in both it's features and community (compared React, Angular, etc.), there is still much room for the framework to grow. To put it in perspective, there are approximately 3,200 live websites built with Svelte. While Vue currently has 1,523,449 active websites as of right now. With there being such a small community of developers, you will find it harder to solve development problems through forums or even look for developers who have already dabbled with Svelte.

Svelte can easily be looked as the Tortoise in the race against the Hare as it is a framework which is slower in gaining its popularity. However, give it time, and you will see this framework sit right next to the top frameworks of today. With so many great features and a framework that keeps the development easy and the entry point low. More and more developers will be flocking towards Svelte.

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 4.5 | 4.5 | 5 | 2.5 | 4.2/5 |
