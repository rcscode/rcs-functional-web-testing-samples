# Bulma

[View Bulma Here](https://bulma.io/)

## Document History

| Date | Description |
| ------------- | ------------- |
| 2/10/2021 | Initial Creation of Document |
| 2/11/2021 | Document Update, working towards finish |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Bulma is a CSS framework that markets itself as 100% responsive, modular, and modern. With the use of flexbox, Bulma makes claim by bringing you ready-to-use frontend components that you can easily combine together to build responsive web interface. You don't need a single ounce of CSS experience to use Bulma, or so it claims that you don't need any. I'm here to dig into the meet of the matter, and figure out if Bulma's claims are indeed true.

### __Framework Details__

Bulma markets itself as a *mobile-first* CSS framework. Thus, you can expect every component and tool in Bulma to be pre-built with mobile-responsiveness in mind. From the ground up, you can expect any one of Bulma's many CSS classes to come prepared with the CSS to shrink itself down and form itself to the best fit on a mobile device.

Outside of the responsiveness of Bulma it also comes with a very simple and intuitive grid system that makes fitting columns across the screen as easy as getting Hello World to show up on the screen. Honestly, I truly believe that Bulma does indeed, and I quote, have

> The **simplest** grid system.

Simple is exactly what Bulma is. You import the framework and it brings all the basics of CSS while taking care of responsiveness for you as well. With that in mind, this allows Bulma to also be a very good outlet for creativity. With Bulma's included modifiers, you can quickly turn a blank slate into a basic yet colorful layout. Or, if you really want to take it to the max, you can freely customize elements of Bulma by creating Sass variables before importing the framework.

Really, Bulma simply allows you to do it all for the CSS of your website. You'll see in my sample that got all the CSS I needed from Bulma without needing to add any extra CSS to any portion of the website.

### __Samples__

I created my entire Bulma sample on Codepen while using Bulma's CSS framework for the entire process. If you want to view this sample, then simply click [here](https://codepen.io/Vanilla-Ford/pen/xxREVJG?editors=1000) to do so.

Now, I can't just read about Bulma all day. After all, actions do indeed speak louder than words. So, I went through a process of creating a simple web page that contained a banner, three cards, and a collapsible navbar. But, before we begin, allow me to explain how you can install Bulma in your own project.

#### *Installation*

It is actually a very simple process to get Bulma installed in your project. You can either choose to include Bulma with a link in your HTML or you can install the npm package of Bulma to include the Sass library in your css.

If you want to install Bulma through npm then use this command in the console:

`$ npm install bulma`

If you would rather include bulma as a link, then utilize this bit of HTML to do so:

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css"></link>`

With the installation out of the way, I can now move on to making my banner!

#### *The Banner*

Now, I'll admit that I had to dig through the docs a bit, but it didn't take too long before I found a the **hero** banner that Bulma provides. The **hero** class is a layout class that you can apply a containing element, such as a section or a div, to get started on creating a banner. I decided to go with a section to change things up and make the html a little easier to read.

With the section attached by a **hero** class, all I needed to do was to then create a div inside the section that contained a class called **hero-body**. As the name suggests, this would be the body of the banner. The section is just the container that helps fit the banner to the screen while the div is the actual hero banner itself. With that in mind, I then added my **title** and then a **subtitle** inside the **hero-body**. 

In a total of only 6 lines of HTML code, I now had my **hero** banner, but it was very bland and white. Luckily, Bulma has some modifiers you can add to its components to make them stand out a little bit. With that in mind, I applied the **is-info** class to the **hero** section as well as the **is-1** class to the **title** of my **hero-body**. And, with the modifiers added, I now had a nice bright blue banner with a large title saying, "Hello World!"

#### *Three Cards*

After creating the banner, I then moved on to make three cards show under the banner. This entire section of cards had to be spaced evenly apart and had to be responsive with the size of the page. Luckily, as stated earlier, Bulma has the simplest grid system out of any CSS framework I have seen thus far.

To make the grid to hold the cards, I needed to start with a single div and attach the **columns** class to it. Inside of this div, I simply needed to add three more divs, each with the **column** class attached to every individual one. These three **column** divs would be the containers for every card that I needed to make. To test if the html insertion had worked, I put in some sample text in every div and shrunk the size of the page. When I did so, the classes showed that they were working perfectly. So, with the grid in place, I then had to create the three cards.

Now, I wanted to make some very simple cards. Each needed to have a title, some text, and a button at the bottom. I will start by saying that Bulma actually has a lot of options for what you can do with a card. You can make a simple header that acts as a dropdown for your card, a footer to hold any links pertaining to the card, an image to fit inside of your card, and then the content of the card. Since my sample cards were very basic, I only needed to include the **card** container class and then the **card-content** class to another div inside of the **card** container. All three of these cards were built separately inside of each **column** container.

With the card container and the card content divs added, I simply had to add in my **title** and then my **content** div after. After adding the text, I needed to include my button at the bottom of each card. A *button* html element was added to each card and every single one had the **button** class and the **is-link** modifier class. All the classes and content have now been added, meaning that my cards have now been finished.

#### *Collapsible Navbar*

There is only one component to add to my project at this point and that component is the Navbar. I don't want to spoil much but the navbar by far required the most amount of work on my end.

To begin, I needed to start by adding a *nav* element to the top of my html. Following Bulma's example, I added the **navbar** class to the nav element as well as a *role* called **navigation** and an *aria-label* called **Main navigation**. With my nav container now made, I had to move on to the **navbar-brand**; This div will contain my brand name and the button to be able to show my menu items when the screen is shrunken down to mobile device size.

Inside the **navbar-brand**, I added an *a* link element with the class **navbar-item** and my brand name inside of the element itself. 

* **Note:** For most Bulma examples, they use a small image of their logo with a height and width set inside of the img element and it still works just the same as my regular text link. So include whatever represents the brand of your website the best.

With the brand name out of the way, I then moved on to creating the actual menu of the navbar that would contain my links to the rest of my website. Underneath the **navbar-brand** div, I added a new div with the **navbar-menu** class and an id called *navbar*, this id will be used later to create the collapsing part of the navbar.

Inside my **navbar-menu**, I then added four *a* element links. Each element had a class called **navbar-item** and were all contained in a div with the **navbar-start** class.

* **Note:** The navbar-start class is a class usually paired up with the navbar-end class. Both of these classes represent the left and right sides of the navbar. Start is the left side while end is the right side. This is meant to better align all elements of your navbar, such as a search bar being at the right end while you have your links at the left end.

Finally, I needed to add the button that would appear when shrinking down the size of my webpage to a mobile device size. To do this, I needed to go back into my **navbar-brand** and add a new *a* element. This element had a few extra attributes that were needed to help make this button function properly. In the interest of time, I'll list off every attribute with the text inside of them:

* role = "button"
* class = "**navbar-burger**"
* aria-label = "menu"
* aria-expanded = "false"
* data-target = "*navbar*"

With all the attributes added to the *a* element, I then added three spans inside of the element. All were empty and only had an *aria-hidden* attribute set to *true*. This all creates the actual button that will appear when shrinking down the size of the page, but this button is still not functional yet. 

#### *Javascript*

While Bulma does include every bit of CSS you need to build up your webpage, it does not include a single bit of Javascript to make some parts of your CSS function all the way. So, I had to take it on myself to add the funtionality to make the **navbar-burger** button actually drop down the navbar as well as be able to collapse back in on itself when needed. Luckily, there was not a lot of Javascript that I had to.

All I needed to do was add a simple click event to the **navbar-burger** that would add or delete the **is-active** class on it. This event would only be added after another *DOMContentLoaded* event would be activated that would check for all **navbar-burger** classes that currently exist on the page. The event would be constant, so it would always be checking for any change with the responsive nature that is Bulma.

With the Javascript added, I now have a navbar that collapses into a hamburger menu that can be clicked on freely to show the contents of the navbar when the screen is shrunk to a mobile device size.

My sample is now complete, and with the completion of it also comes to my final thoughts about Bulma as a CSS framework.

### __Conclusions__

Bulma makes a lot of bold claims and it definitely has a right to. In my opinion, Bulma is a near perfect framework to use in any project, whether big or small. Its nature of being completely build mobile-first makes it a major addon to any project that will give any website a major boost for utility and positive user experience.

Bulma is a sleek and simple framework that gives you everything you could ever need to build your website. I say everything you *need* in this circumstance because Bulma also gives you a lot of wiggle room to completely change the entire framework to fit any style you would want. It requires extra work but is completely worth it and easy to add a font, change a color, or even add your own classes to use on **top** of Bulma's entire framework. That gets all the praise from me, as the ability to provide everything needed but allow so much more room to grow is a major trait that makes Bulma so highly useable and accessible to everyone.

But the praise doesn't stop there, no. Bulma also has a very well-done and useful flexbox based set of tools, components, and layouts that turn hours of work into merely minutes instead. The grid system is super simple, but ingenious. You don't need to have so many options for your grid upfront when all you need is a simple container and a single class that makes every element inside of it react to one another in the most flexible way possible. And that's not to say that this is all that Bulma has. In fact, Bulma has plenty of other ways for you to utilize its column system to whatever specification you would like. But I personally like the most simple form being presented to me first and how that simple form works. I don't have to go soul searching just to find two simple classes that can make everything work perfectly.

Honestly, so far, Bulma is my personal favorite CSS framework to work with. It is simple, modular, responsive, and, most of all, useful. However, with all my praise, Bulma does have one lacking feature that doesn't make it a 5 out of 5 for me. That one thing is that Bulma doesn't have any JS included with it. Now, I can't really say that this is a bad thing. This allows Bulma to be plugged in with any JS framework that you have built, which makes this feature great! However, I simply found it a little annoying that I had to manually add the JS needed to get the navbar-burger menu to work. Little things like that are things I feel should automatically have some form of JS with them. But I won't say Bulma needs it, as it could end up bringing it back down with the modularity that comes with Bulma itself.

In the end, Bulma is a near perfect framework in my eyes, and I won't be surprised if its popularity continues to grow and that Bulma will only get better within the next few years. With all of that said, I should give my final rating on Bulma for all of the features it brings.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 5 | 4 | 5 | 5 | 5 | 4 |

> ### **Final Rating** 4.7/5