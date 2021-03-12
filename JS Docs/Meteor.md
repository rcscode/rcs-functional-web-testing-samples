# Meteor

## Document History

| Date | Description |
| ------------- | -------------- |
| 3/2 | Creation of Document |

## Document Author

* Chris Dazley - cdazley@student.neumont.edu

## **Introduction**

---

Meteor JS is a free and open source isomorphic framework created for seamlessly building Web, Mobile, and Desktop applications in JavaScript. Meteor was designed for rapid prototyping and produces cross platform code between the web and mobile devices (Android or IOS). Being integrated with MongoDB, using what is called the Distributed Data Protocol and a publish-subscribe pattern. The framework allows for automatic propagating of data to the client without requiring the developer to write any synchronizing code. On the client, Meteor can be used with any popular front-end JS framework, Vue, React, Svelte, Angular, or Blaze.

### **Publisher**

Meteor Software

### **Feature List**

* **JavaScript focussed**

    JavaScript is utilized in all aspects of the framework. The same language you use to develop the application on the client side can also be used when querying from your database on the server. Having Meteor run on top of Node.JS and using MongoDB database, all code is consistent and easy to maintain for the developer.

* **Realtime rendering**

    Applications developed with Meteor can handle real time communication using Distributed Data Protocol (DDP). Utilizing both WebSocket and Ajax for modern browsers, users will see live updates to their data without ever having to refresh their screen.

* **Powerful data synchronization with MongoDB**

    Being that Meteor is structured to be a full-stack web framework. Your client code can directly access your back end database without any errors cropping up.

* **Reduced delay**

    With the Meteor, the client updates immediately whenever there is a change in the front-end or back-end. Whenever a user makes a change to the data on the respective screen, that change will occur instantaneously.

* **Realtime Updates**

    For the developer, if you're afraid of having to stop your server in order to push out the most current version of your product. Fret not, as you can update any of your code simultaneously while the user is online.

* **Code Security**

    With "Security checklist", you can ensure your app doesn't have any insecure or autopublish packages. You can include multiple functions to automate this process and limit the rate your application runs to prevent DDoS attacks.

* **Support for the Mobile development**

    Meteor makes it very easy for the developer to convert their Meteor applications to target mobile platform such as IOS or Android. You can simply configure your app's metadata and build process with a special file called 'mobile-config.js' and you're ready to go!

    For more on mobile development, [click here](https://docs.meteor.com/api/mobile-config.html)

### **Sample Projects**

## **Framework Specifications**

| Specification | Description |
| ----------- | ----------- |
| Version | 2.1 |
| Size of Framework | 329kB |
| Licenses | MIT |
| Source Language | JavaScript |
| Framework Webpage | [Visit Here](https://www.meteor.com/) |
| Instillation | [Follow here](https://www.meteor.com/developers/install) |

### **Browser Support**

| Internet Explorer | Mozilla Firefox | Safari | Opera | Chrome | Edge |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| X | ✓ | ✓ | ✓ | ✓ | X |

## **Code Sample**

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

* **Keeps things simple for the developer**

Unlike other popular web frameworks out there, Meteor JS offers a very approachable environment for any novice developer. What sets Meteor apart is its design in being a Full-Stack framework, making it an all in one package for the developer to use in order to build a complete website. Keeping the development environment to a single platform and a single language makes it much easier for beginners.

* **Real-time communication between the client and server**

Having jQuery handle the client side of Meteor and Node JS be responsible for the server side. Meteor JS has structured itself in a way to ensure a seamless real-time communication between both the client and server. Providing both an easy-to-use and easy-to-develop for both the developer and user.

* **Extensive support with libraries and packages**

Meteor provides both first party and third party libraries/packages for the developer to utilize. With such great libraries as jQuery, Underscore, Tracker and Blaze. You can ensure that your Meteor application will preform at industry-level standard.

* **Can be used alongside other popular Web Frameworks**

* **Debugging with it's real-time testing tool**

Meteor allows for popular testing frameworks (such as WebStorm) to help debug and test your code in real-time. This makes it much easier for the developer to squash any bugs that creep up and continue to push their development forward.

### Cons

---

* **Framework is rather large for building small projects**

* **No Server side Rendering**

* **Does not support multiple databases**

* **Good luck if you have a poor internet connection**

## **Conclusion**

---

### **Why Consider Framework?**

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
|  |  |  |  |  |  |
