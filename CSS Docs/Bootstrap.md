# Bootstrap

[View Bootstrap Here](https://getbootstrap.com/)

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/5/2021 | Initial Creation of Document |
| 2/9/2021 | Updated spelling/grammar errors |
| 2/11/2021 | Added sample link to the samples section of the doc |
| 2/11/2021 | Added new subsections inside the Samples section of the document as well as a link to the bootstrap website |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Bootstrap is known as the most popular open source front-end framework to exist in the world. It claims itself to be able to build fast and responsive websites. Not only does it just provide css using SASS variables and mixins, but it also provides other js plugins to aid with certain HTML and CSS elements, such as adding a collapsible Nav menu. But enough about the synopsis, allow me to get into the meat of what this framework is all about.

### __Framework Details__

Twitter's Boostrap framework labels itself as a *front-end toolkit* when you first look at the Bootstrap home page. I can definitely say that toolkit is a very appropriate word to describe what Bootstrap provides. Looking through the docs, Bootstrap has a multitude of Components, Layout features, Utilities, and Plugins that you can utilize to add some clean and professional flair to your website. Bootstrap isn't flashy, but it isn't void of color.

At first glance, Bootstrap looks as if it is mainly black and white, but there are some components, such as buttons, that come in a variety of colors to choose from. With that said, Boostrap leads itself to be an easy way of bringing your basic HTML up a level to be consistent and professional with the use of its many SASS variables to use as classes for every html element you can think of. Bootstrap even has a responsive grid system that takes out a lot of the hassle of formatting a grid to your specifications.

The Bootstrap grid system is by far my favorite part of the framework. It's very simple to apply Bootstrap's grid to a set of cards nice and evenly with the use of only a few class variables. The Jumbotron class makes a great banner that even includes a class that makes it fluid with the width of the page. Also, with Bootstrap's JS plugin, you can have a navbar that collapses into a hamburger icon when you shrink down the size of the screen with the use of even more Bootstrap classes. With the many different uses for Bootstrap's every class, variable, and utility, you can make a well designed website that can even function really well on a mobile device. In the end, Bootstrap is simply an easy to use framework that can turn any basic website into a professional looking masterpiece in a matter of minutes.

### __Samples__

I created an entire sample on CodePen using Bootstrap as the framework for it all. If you would rather not read all the details about the sample, you are more than free to click [here](https://codepen.io/Vanilla-Ford/pen/poNgXPN) to view the sample for yourself.

I can't simply talk about Bootstrap all day. After all, actions speak louder than words. So, I went and spent a few hours using Bootstrap to create a simple layout. This layout is a banner, three cards, and a navbar. All are responsive to shrinking the size of the screen.

#### *Installation*

Firstly, how do you use boostrap? Just how can you implement this framework for immediate use on your project? Well, if you use npm, then you're in luck! Bootstrap has a npm package that you can install just like the example shown:

`$ npm install bootstrap@next`

Simply input that install command into you npm package installer and you will have bootstrap working on your website in no time. You can also use yarn with the same command, such as what is shown:

`$ yarn add bootstrap@next`

Of course, if you don't use a package manager, you can always include Bootstrap as an external stylesheet. This also includes the JS script you can use for the JS plugins that come with Boostrap:

#### *Stylesheet Link:*

[https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css)

#### *JS Script Link:*

[https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js)

Simply add the stylesheet as a link for you project and you are good to go to using Bootstrap for your website. With the installation out of the way, I can now show you how you can use Boostrap to create a banner, three cards, and a collapsible navbar.

#### *The Banner*

The easiest part of my sample by far was the flexible banner. All I needed to do was create a div with the class called ***jumbotron*** and ***jumbotron-fluid*** and then fill in the div with a ***container*** class div and then my h1 header with the class ***display-4*** and then my flavor text in a paragraph element with the class ***lead***. And, with only 6 lines of code in total, I had my flexible banner! When shrinking down the page, the banner itself would adjust to stay fit with the page.

#### *Three Cards*

After the banner, I had to make three cards that would fit evenly across the screen horizontally. To do this, I utilized the many ***card*** classes as well as Bootstrap's responsive grid layout classes. It took quite a few lines, but I had a single ***row*** div in place after the banner div. Inside of this ***row*** I then had three separate ***col*** class divs that each contained the components of the cards. The cards themselves included the ***card*** div, the ***card-body*** div, the ***card-title*** h1, the ***card-text*** paragraph, and a button with the ***btn*** and ***btn-primary*** classes.

If you couldn't tell, there were a lot of divs involved. As such, I will admit that I went a little cross eyed looking at my code. I ended up having to leave in some white space between the individual columns of the grid. However, I can't blame Bootstrap that much for this one, simply because of how many components are usually involved with making a single card. The end result was rather fantastic. The cards were made and looked really nice. All three were evenly spaced across the screen horizontally and would automatically adjust their width as the screen size shrunk. So, I really can't complain.

#### *Collapsible Navbar*

Finally, I needed to make the collapsible navbar the would be at the top of the screen. This was by far the most complicated and lengthy part of the entire sample. To make the navbar, I needed to start with a nav element. For my nav, I included four classes. Those classes were ***navbar, navbar-expand-lg, navbar-light,*** and ***bg-light***. The first two classes are essential to the navbar, however, the last two are a theme that is included with Boostrap. Inside the nav, I started with an a tag with the class of ***navbar-brand***.

After adding my brand name to the navbar, I then moved on to add the unordered list of nav links inside the nav. I started with the Home link, then added three other links inside of the list. The unordered list was then wrapped by a div with the classes ***collapse*** and ***navbar-collapse*** along with adding an ID named ***navbarSupportedContent***. The list had the classes ***navbar-nav*** and ***mr-auto***. Finally, every list item was attached with the ***nav-item*** class. All the links inside of every list item had the ***nav-link*** class.

Finally, I needed to add the button that would handle the collapsible part of the nav menu. Now, in the docs of Boostrap, this button is right under the html for the brand name. I will explain later why I saved this button for last. The button has by far the longest code of the entire page. The button has only one class, but it has a total of seven attributes. I will go ahead and list off the attributes with the appropriate variables now:

* class = "navbar-toggler"
* type = "button"
* data-toggle = "collapse"
* data-target = "#navbarSupportedContent"
* aria-controls = "navbarSupportedContent"
* aria-expanded = "false"
* aria-label = "Toggle Navigation"

With all the attributes for the button filled in I only needed to include a span inside the button with the class ***navbar-toggler-icon***. I will note that the data-target and aria-controls can both vary, as both are linked to whatever ID you gave the div containing the full unordered list. I also had to add Bootstrap's JS library in order for this entire collapse menu to work. By the end, I did have a nav menu that would collapse into a hamburger menu when I shrunk the width of the screen to a certain point.

With all the components, the grid, and the responsive parts in place, I then had my simple webpage with a collapsible nav menu, a banner, and three evenly spaced cards.

### __Conclusions__

With the sample made and the Bootstrap framework all looked through, I can give my final thoughts on Bootstrap as well as my own rating on Bootstrap as a whole.

I'll admit that Bootstrap is an extremely useful framework. I had nearly no css put into the sample at all, save for setting the row class margin to zero. Every single portion of the html had its own class that made setting up every html element extremely easy. With the help of the docs, I managed to finish the sample in a matter of only 2 and half hours.

Bootstrap has a set of docs that is very helpful, descriptive, and links parts of itself together very nicely to create a very nice experience for learning how the framework works. The responsive grid is by far my favorite tool that Boostrap provides. It is extremely simple and easy to use and manages to handle all the mobile responsiveness that you could ever need in a full website, and made aligning the three cards super fast and easy with no hassle to make them respond with shrinking the screen. With all of these positives though, I did manage to find a couple negatives in the process.

I mentioned earlier that I had to put the button in last when building the collapsible navbar. I did this because I was struggling to make the navbar appear. On my first attempt of it, I created the button right after adding the brand name. With this scenario, the unordered list was invisible and never showed any of the links that I had inside of it. I had to debug and check the rendered html in the webpage for a good half an hour before I had to tear down the code and build it up again from scratch. I don't know if the code was bugged somehow or the rendering got messed up in the process, but I found it a little annoying to try and figure this little problem out.

One final thing about Bootstrap that I found is that, while the number of tools is nice, I do find it a little daunting that there are just so many tools and components to choose from. This bloats up the documentation quite a bit and can make reading how to use some components quite the chore. Everything is still simple, but it is also very cramped.

All in all, Bootstrap is still a very effective CSS framework. It gets a lot of the more annoying parts of working with CSS out of the way and it gets a major plus that it does put a lot of mobile building first. The framework is very good at leaving very little css work for you to do both on the mobile and desktop end. I can definitely see why Bootstrap is the most popular front-end framework in the world.

To wrap up, I'm going to score Bootstrap based on the features it offers and the resources you are given with it. The way I will score is a 1 to 5 system. 1 is terrible, 5 is perfect.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 5 | 5 | 4 | 4 | 4 |

> ### **Final Rating** 4.3/5
