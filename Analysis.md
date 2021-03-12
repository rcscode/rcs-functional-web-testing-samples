# Analysis

This analysis document is used to document both the outline of our respective documents as well as the sample we will be using to test each framework we are researching against one another. Any updates to the doc will be recorded below in the Document History section.

## Document History

| Date | Description |
| ------------- | ------------- |
| 1/22/2021 | Initial creation of the document |
| 1/25/2021 | Added the JS Outline & JS Sample | 
| 1/25/2021 | Testing Section Updated |
| 1/26/2021 | CSS section updated with both the Outline and Sample sections included |
| 1/26/2021 | Small changes added to both the JS and Testing sections of the doc |
| 2/10/2021 | Vue sample and thoughts added to the JS section |
| 2/13/2021 | React sample and thoughts added to the JS section |
| 2/17/2021 | Angular sample and thoughts added to the JS section |
| 2/23/2021 | Svelte sample and thoughts added to the JS section |
| 2/25/2021 | Bootstrap, Bulma, Foundation, and Tailwind samples and thoughts added to the CSS section |
| 2/26/2021 | Pure sample and thoughts added to the CSS section |
| 3/2/2021 | Materialize sample and thoughts added to the CSS section |
| 3/3/2021 | Ember JS sample and thoughts added to the JS section|
| 3/5/2021 | Milligram sample and thoughts added to the CSS section |
| 3/5/2021 | Backbone JS sample and thoughts added to the JS section|
| 3/5/2021 | Added Selenium, Nightwatch, and Playwright to Testing Section |
| 3/9/2021 | Polymer JS sample and thoughts added to the JS section|
| 3/9/2021 | Semantic UI sample and thoughts added to the CSS section |
| 3/11/2021 | Fixed typos in Testing Section and added Postman Analysis |
| 3/11/2021 | Tachyons sample and thoughts added to the CSS section |
| 3/11/2021 | Aurelia JS sample and thoughts added to the JS section|
| 3/11/2021 | Added Puppeteer analysis |

## Document Authors

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

* Chris Dazley - cdazley@student.neumont.edu

## CSS Frameworks

### CSS Document Outline

#### Introduction

#### Description/Details of Framework

* Style/Design
* Ease of Use
* Platform(Mobile/Desktop)

#### Samples

* Implementation(Console, Href, etc.)
* Tools(Classes, IDs, etc.)
* Process to make every part of the sample (Banner, Three Cards, Navbar)

#### Conclusions

* Rating  
* Scorecard with the Framework and how it rates on certain attributes(Ease of Use, Features, Speed, etc.)
* Opinion

### CSS Sample

* Create a Banner and three cards to display on a simple webpage using the grid tools provided by the framework. The end result should look similar between every sample.
* Next, create a nav menu to be displayed at the top of the page. None of the links should have any function but should look professional.
* With the banner, cards, and nav menu created, every sample should be finalized with making the page able to fit into a mobile screen. This means that every sample should also reformat itself when the screen size is shrunk down to a mobile screen.

# Bootstrap

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/poNgXPN)

### __Framework Details__

Twitter's Boostrap framework labels itself as a *front-end toolkit* when you first look at the Bootstrap home page. I can definitely say that toolkit is a very appropriate word to describe what Bootstrap provides. Looking through the docs, Bootstrap has a multitude of Components, Layout features, Utilities, and Plugins that you can utilize to add some clean and professional flair to your website. Bootstrap isn't flashy, but it isn't void of color.

At first glance, Bootstrap looks as if it is mainly black and white, but there are some components, such as buttons, that come in a variety of colors to choose from. With that said, Boostrap leads itself to be an easy way of bringing your basic HTML up a level to be consistent and professional with the use of its many SASS variables to use as classes for every html element you can think of. Bootstrap even has a responsive grid system that takes out a lot of the hassle of formatting a grid to your specifications.

The Bootstrap grid system is by far my favorite part of the framework. It's very simple to apply Bootstrap's grid to a set of cards nicely and evenly with the use of only a few class variables. The Jumbotron class makes a great banner that even includes a class that makes it fluid with the width of the page. Also, with Bootstrap's JS plugin, you can have a navbar that collapses into a hamburger icon when you shrink down the size of the screen with the use of even more Bootstrap classes. With the many different uses for Bootstrap's every class, variable, and utility, you can make a well-designed website that can even function really well on a mobile device. In the end, Bootstrap is simply an easy-to-use framework that can turn any basic website into a professional-looking masterpiece in a matter of minutes.

### __Conclusions__

I'll admit that Bootstrap is an extremely useful framework. I had nearly no css put into the sample at all, save for setting the row class margin to zero. Every single portion of the html had its own class that made setting up every html element extremely easy. With the help of the docs, I managed to finish the sample in a matter of only 2 and a half hours.

Bootstrap has a set of docs that is very helpful, descriptive and links parts of itself together very nicely to create a very nice experience for learning how the framework works. The responsive grid is by far my favorite tool that Boostrap provides. It is extremely simple and easy to use and manages to handle all the mobile responsiveness that you could ever need in a full website, and made aligning the three cards super fast and easy with no hassle to make them respond with shrinking the screen. With all of these positives though, I did manage to find a couple of negatives in the process.

I mentioned earlier that I had to put the button in last when building the collapsible navbar. I did this because I was struggling to make the navbar appear. On my first attempt at it, I created the button right after adding the brand name. With this scenario, the unordered list was invisible and never showed any of the links that I had inside of it. I had to debug and check the rendered html in the webpage for a good half an hour before I had to tear down the code and build it up again from scratch. I don't know if the code was bugged somehow or the rendering got messed up in the process, but I found it a little annoying to try and figure this little problem out.

One final thing about Bootstrap that I found is that, while the number of tools is nice, I do find it a little daunting that there are just so many tools and components to choose from. This bloats up the documentation quite a bit and can make reading how to use some components quite the chore. Everything is still simple, but it is also very cramped.

All in all, Bootstrap is still a very effective CSS framework. It gets a lot of the more annoying parts of working with CSS out of the way and it gets a major plus that it does put a lot of mobile building first. The framework is very good at leaving very little css work for you to do both on the mobile and desktop end. I can definitely see why Bootstrap is the most popular front-end framework in the world.

To wrap up, I'm going to score Bootstrap based on the features it offers and the resources you are given with it. The way I will score is a 1 to 5 system. 1 is terrible, 5 is perfect.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 5 | 5 | 4 | 4 | 4 |

> ### **Final Rating** 4.3/5

# Bulma

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/xxREVJG?editors=1010)

### __Framework Details__

Bulma markets itself as a *mobile-first* CSS framework. Thus, you can expect every component and tool in Bulma to be pre-built with mobile-responsiveness in mind. From the ground up, you can expect any one of Bulma's many CSS classes to come prepared with the CSS to shrink itself down and form itself to the best fit on a mobile device.

Outside of the responsiveness of Bulma it also comes with a very simple and intuitive grid system that makes fitting columns across the screen as easy as getting Hello World to show up on the screen. Honestly, I truly believe that Bulma does indeed, and I quote, have

> The **simplest** grid system.

Simple is exactly what Bulma is. You import the framework and it brings all the basics of CSS while taking care of responsiveness for you as well. With that in mind, this allows Bulma to also be a very good outlet for creativity. With Bulma's included modifiers, you can quickly turn a blank slate into a basic yet colorful layout. Or, if you really want to take it to the max, you can freely customize elements of Bulma by creating Sass variables before importing the framework.

Really, Bulma simply allows you to do it all for the CSS of your website. You'll see in my sample that got all the CSS I needed from Bulma without needing to add any extra CSS to any portion of the website.

### __Conclusions__

Bulma makes a lot of bold claims and it definitely has a right to. In my opinion, Bulma is a near-perfect framework to use in any project, whether big or small. Its nature of being completely built mobile-first makes it a major addon to any project that will give any website a major boost for utility and positive user experience.

Bulma is a sleek and simple framework that gives you everything you could ever need to build your website. I say everything you *need* in this circumstance because Bulma also gives you a lot of wiggle room to completely change the entire framework to fit any style you would want. It requires extra work but is completely worth it and easy to add a font, change a color, or even add your own classes to use on **top** of Bulma's entire framework. That gets all the praise from me, as the ability to provide everything needed but allow so much more room to grow is a major trait that makes Bulma so highly useable and accessible to everyone.

But the praise doesn't stop there, no. Bulma also has a very well-done and useful flexbox-based set of tools, components, and layouts that turn hours of work into mere minutes instead. The grid system is super simple but ingenious. You don't need to have so many options for your grid upfront when all you need is a simple container and a single class that makes every element inside of it react to one another in the most flexible way possible. And that's not to say that this is all that Bulma has. In fact, Bulma has plenty of other ways for you to utilize its column system to whatever specification you would like. But I personally like the most simple form being presented to me first and how that simple form works. I don't have to go soul searching just to find two simple classes that can make everything work perfectly.

Honestly, so far, Bulma is my personal favorite CSS framework to work with. It is simple, modular, responsive, and, most of all, useful. However, with all my praise, Bulma does have one lacking feature that doesn't make it a 5 out of 5 for me. That one thing is that Bulma doesn't have any JS included with it. Now, I can't really say that this is a bad thing. This allows Bulma to be plugged in with any JS framework that you have built, which makes this feature great! However, I simply found it a little annoying that I had to manually add the JS needed to get the navbar-burger menu to work. Little things like that are things I feel should automatically have some form of JS with them. But I won't say Bulma needs it, as it could end up bringing it back down with the modularity that comes with Bulma itself.

In the end, Bulma is a near-perfect framework in my eyes, and I won't be surprised if its popularity continues to grow and that Bulma will only get better within the next few years. With all of that said, I should give my final rating on Bulma for all of the features it brings.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 5 | 4 | 5 | 5 | 5 | 4 |

> ### **Final Rating** 4.7/5

# Foundation

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/wvodbJL)

### __Framework Details__

ZURB is a company that is all about design and the user experience. So, it comes as no surprise that they came to make Foundation the way they did. Foundation is mobile-first, taking a lot of the hassle away from the developer when building their web pages utilizing the Foundation framework. With Foundation's hefty Javascript files, you can have access to a mobile responsive navbar with only one single line of code in your JS file. However, for this JS to work, you have to understand that your project must be running from JQuery first.

Other than JS required problems, every other mobile aspect of CSS is covered by Foundation. Font sizes shrink with the size of the screen as well as dimensions of HTML elements, taking away a very large chunk of CSS in the process.

Oh, one other thing that should be noted is that Foundation is split up into two different kinds of frameworks. The big one, as well as the one I shall be talking about/using, is Foundation for Sites. The other one is called Foundation for Emails. While I never got to look at Foundation for Emails, I am acknowledging that it exists for the sole purpose of providing aid to:

> craft responsive HTML emails that can be read and anywhere and on any device.

For this document, I will be going over Foundation for Sites. If you want to look at this specific framework then please click [here](https://get.foundation/sites.html).

Immediately, I can see that Foundation for Sites is currently on its sixth iteration, which means that this framework has a good amount of history behind it. With a total of 6 different versions, its no wonder how Foundation is as big as it is. Oh, actually, Foundation seems to come in with a total weight of 60KB of CSS and 84KB of JS. So, if file size is an issue for you, then don't worry when it comes to Foundation!

Other than providing a multitude of mobile-friendly components as well as a good amount of JS to back it up, Foundation does allow you to create your own website completely using its customizable Sass libraries. So, no need to worry about your final vision being taken away, you can simply take what Foundation brings and make it to whatever you like!

### __Conclusions__

Now, I must say that I was surprised with how useful Foundation itself was as a CSS framework. The grid system is very simple and easy to understand, and the amount of HTML code for the responsive nav menu was by far the smallest amount I've ever typed up. Foundation has a very nice default style that makes everything look professional and clean. The modifier classes are also extremely useful and make adding space between elements a breeze. I never really ran into a single moment where the HTML didn't make sense and I was lost on what classes to use for what I needed in an element. However, I will say that Foundation definitely doesn't make Javascript very easy in the end and it doesn't exactly have ALL the perfect defaults.

As stated, I have next to no problems at all with the classes and modifiers that Foundation provides. Each one mingles well together and is very intuitive for making CSS as easy as it can ever be. But this feeling completely changes when taking a look at the Javascript side of Foundation. The one downfall of the JS it provides is that it requires a backend to be running off of JQuery in the first place. This means that, if you want the JS to back up the more involved responsive elements, then you'll have to build your entire project around JQuery first before you can even think about including Foundation's entire JS side of its framework. It's a real shame, because the JS is very easy to include past that point, and is even modifiable to match any need that you have. Only one line is needed to get every default in the JS, but it is pointless if you are either not comfortable with JQuery or don't have a JQuery project altogether.

To extend it even further, I needed even more than JQuery in my Codepen sample. I struggled for a whole two hours trying to figure out what I needed before coming to the solution of including modernizr as well. This holds back Foundation so much from being an amazing framework, as it makes it rather limited to who is willing to use it as it can really be applied to only one kind of project if you need the JS with it. But, if you don't need the JS, then you're in good hands. Foundation does provide the perfect amount of CSS to make your prototype a professional project in no time and is even customizable to boot, which makes up for the lack of rather desaturated default coloring it does provide.

One final minor complaint is that the docs for Foundation can be a little hard to navigate through. Every page has some video that goes with it, but not every page has all the necessary information to make the elements your working with actually work. This was mainly for the responsive navbar, as I didn't know until I had built the HTML that I needed JQuery with the Foundation JS to make it work.

With all of that said, I will give my final rating of Foundation as a whole.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 4 | 5 | 5 | 4 | 4 |

> ### **Final Rating** 4.2/5

# Tailwind CSS

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/qBqjxaX?editors=1100)

### __Framework Details__

So, Tailwind markets itself as a utility-first framework that is, and I quote:

> "packed with classes like **flex, pt-4, text-center** and **rotate-90** that can be composed to build any design, directly in your markup."

Now, when Tailwind says that it is packed with classes, it doesn't lie. Looking at the docs, Tailwind is quite literally PACKED with an enormous amount of classes. You have classes for a grid, classes for padding, classes for margins, centering, typography, color, and more and simply more! In short, if it is a part of CSS then Tailwind has a class for it. And with this sheer amount of classes, you can really fit together many pieces to one giant jigsaw puzzle to come to your masterpiece.

Tailwind itself is a very low-level framework. Its marketing of providing only utility classes makes this trait shine through. Every class name is simple and easy to understand and can be applied to literally any HTML element you can think of. It only matters how you use these classes to fully customize your markup to your own liking.

When launching to production, Tailwind automatically removes all unused CSS, which shrinks the final product to the smallest it can possibly be. This is an extremely useful system, as it allows your website to keep a lot of its perfected and professional look without sacrificing all the speed that is lost from having so many unused classes that are contained in the framework itself. Tailwind says itself that:

> "...most Tailwind projects ship with less than **10kb** of CSS to the client."

To sprinkle in something sweet, Tailwind is mobile-responsive as well, which is something to expect out of a CSS framework at this point. Tailwind seeks to take away every complex media query out of your CSS as a whole. All you need to do to get this feature is to simply throw a screen size variable in front of any utility class. In my sample, I will be providing some examples of this screen size use.

Tailwind has many features that are geared towards its utility-classes. So many that I could be typing this document all day about these features. If you want to learn more about these features, then I advise you to click [here](https://tailwindcss.com/) or the link at the top of the doc to view Tailwind for yourself. 

### __Conclusions__

To start, Tailwind is a very unique framework. Its utility-first focused classes are definitely a completely different view I have seen compared to other CSS frameworks. And, while having so many classes to be used for a specific reason, such as padding or margins, is nice, it is rather annoying to have to use so many classes all at once to make a single element look good. Compared to other frameworks, which require one or two classes to get your HTML to where you want, Tailwind provides many "helper" classes, and **only** those helper classes are available.

Tailwind has a theory that, and I quote:

> **"Best practices" don't actually work**

This theory is why there are all of these utility-first classes throughout the entirety of its docs. And, that is perfectly fine. In fact, I find some of these classes very helpful, such as the padding and margin classes. But, there are SO many classes that are thrown into the mix. On average, I was applying a good four to even seven classes *per element*. This bloated the entire HTML code and honestly exhausted me in the process of building every part of every element in the page. What every other CSS framework I have worked with thus far has had is a set of classes to create a dedicated card, or a set of classes to make a hero banner. However, this time around, I was left to the tools Tailwind provided.

An argument could be made that Tailwind would have samples to back up the sheer amount of classes that come with it. And, yes, they show some samples for some individual parts of their framework, but that is simply it. They have a components section that has many examples, but a good 95 percent of the samples are locked behind a 200 dollar paywall. Now, for a large company that needs a framework, this really isn't an issue. However, for a casual build that is a simple landing page, I had to jump through multiple hoops trying to find a simple example of how to create certain elements using the gigantic amount of utility-based classes.

I will state it now that I do not personally give myself the credit for the navbar. The way I went via a checkbox and a label to make the button happen was through a video I found online. This video was also using an older version of Tailwind, so that could be why the navbar felt super bloated with too many classes to back it up. But, I digress, the simple notion that a simple sample of a banner or a set of cards is locked behind a paywall is rather annoying to deal with and personally doesn't feel too fair in my eyes. A company needs to make money, yes, but a premium should be for some extra features or some early build releases, not a simple sample of how to make a banner.

I have to give Tailwind some praise though, and I do have some for it. That praise is that Tailwind does have a simple and easy-to-use grid system that made aligning those cards a breeze. And, while I say that the framework is super bloated with classes, I will still say that the classes have their own uses and are still important. But, in the end, I would just like a little bit of extra help when trying to make a card, rather than having to apply eight different classes to make a simple card. In the end, Tailwind's philosophy of using only utility-first classes can make using it a chore and exhausting to use.

With the final thoughts said, I shall give my final rating of Tailwind CSS from my experience of using it to make my sample.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 3 | 4 | 5 | 4 | 3 |

> ### **Final Rating** 3.7/5

# Pure

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/LYbLQRz)

### __Framework Details__

So, when taking a first look at Pure CSS, you can see that it has 6 distinct main sections. These sections are listed as:

* Base

* Grids

* Forms

* Buttons

* Tables

* Menus

Most of these sections are rather self-explanatory, however, I should explain what the Base section is about. For the Base section, Pure goes on to explain how it is a framework that is built on top of Normalize, so it gives a quick little way to include Normalize in your project to get started. It then gives a little flavor text about Normalize and how it builds over it before moving on to elaborate on how to hide an element and what class you can use to make an image be mobile responsive. Both are helpful in their own cases, but that is about it for the entirety of this section.

Now, Pure does have a Tools section, but that section is a little misleading with the name. Instead of displaying its tools that can be used with the framework, it shows the "tools" you can use to install Pure for your project. While a little misleading, the section is useful to learn how you can install this framework on your project.

Pure does have a couple of extra sections, such as Customize and Layout, but that is essentially it. So, as I had my worries about the number of features with this framework, it seemed like those worries might indeed be correct. 

### __Conclusions__

Pure is a very unique framework. It provides the very basics of html classes and a grid system, but that is just about it. I personally can't find too many positives to Pure. The one thing I can say is that Pure does live up to its own name. The framework really is mostly "Pure" CSS.

I was personally disappointed by this framework. It is extremely barebones and really doesn't do enough for me to consider it as an actual framework. Pure CSS is a very basic framework with even more basic documentation. When making my sample, I found that I was making my own CSS by my own hand more than the framework actually putting in much work. All Pure did for me was provide a basic nav menu and a grid system. 

This one framework doesn't feel like one at all to me. This sample felt like a basic project and by far took the most time out of every framework so far. While I can appreciate Pure providing some basic mobile-responsiveness and a useful grid system, I don't appreciate having to do nearly all the CSS myself.

I wish I could provide some extra thoughts about Pure, but I am simply disappointed with it. The only way I can give an accurate view of my thoughts is to give Pure a proper rating. So, here is my rating below:

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 2 | 2 | 4 | 1 | 3 |

> ### **Final Rating** 2.5/5

# Materialize

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/vYyjXmR)

### __Framework Details__

On the forefront, you can see that Materialize does provide every bit of its own theme from the moment you install it on your project. However, Materialize does state that you can easily drop in your own styles by changing up the Sass that comes with it. If that isn't your cup of tea then don't fret because you can easily drop in one of Materialize's themes, only for a decently small price. In short, Materialize has a lot of forms of customizability for you to take advantage of and create your very own website however you would like.

Materialize doesn't just give you multiple forms of customizing your site. In fact, it also supplies a modest amount of its own css, components, helper classes, grids, transitions, and more. Materialize certainly does bring more options to the table than I expected and I haven't even talked about their JS yet.

On top of multiple components and classes for your html, Materialize also provides quite a bit of its own javascript to back up its own html. When looking over their docs, it seems you can run their javascript with basic javascript or with jQuery, allowing you the option to pick and choose what form of JS you are working on within your own project.

To put the cherry on top of this wonderful cake, Materialize is also mobile-responsive. With components and their JS built to make your website able to fit easily onto a mobile-screen, Materialize simply has all the makings of a well-designed and formatted framework.

### __Conclusions__

All in all, Materialize actually surprised me. The documentation looks simple and small on the surface, as does the framework, but Materialize itself does quite a bit more than meets the eye. Having access to some rather decent default css is a pleasure alone but still having the ability to customize every bit of the html with Materialize's very wide color palette, entire Sass library, and a handful of themes definitely gives Materialize a thematic edge over most other frameworks I've seen.

The grid system is very basic too, with a helpful container class included that can make centering your entire page a breeze. And the sheer amount of js you can include in your project is also very useful. Combine it all with a very good amount of css, components, and even a handful of helper classes, and Materialize simply has a lot to bring to the table, which is very impressive considering the framework was made by a team of four students. However, as impressive as Materialize is, I did find a few things that the framework does lack.

While Materialize does have a handful of helper classes, that is still it. Just a handful of helper classes didn't feel like enough to me. It's nice to have a helper class to truncate some text, vertically align an element, or hide an element, but I felt the need for some more. Perhaps some classes that could provide some padding or margins to an element would be helpful. The same thing can be said about the typography that the framework brings. While having some default headers, blockquotes, and flow text is nice, I couldn't help but feel the need for some font sizes to choose from as well as more font colors. In my sample, I found that I only had the choice of black or white text. I tried to look for gray but got nothing.

In the end, Materialize is a very fine framework. It provides a high amount of customizability, a good amount of javascript that is easy to implement, and some great components to include in your project. My one complaint is that the framework could have some extra little helper classes to make working with typography and larger elements easier than they already are and to make the customizability even better! Materialize gets a lot right and it seems to still be in its infancy. So, my hope is that Materialize will eventually get to a proper 1.1, 1.2, or even a 2.0 release that can make this framework reach its full potential!

To finalize my thoughts, have my rating of Materialize.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 5 | 4 | 4 | 4 | 5 | 4 |

> ### **Final Rating** 4.3/5

# Milligram

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/poNZwEr)

### __Framework Details__

Being a minimalist CSS framework, it comes as no surprise that Milligram has a 2kb gzipped download size. This framework is strictly meant, and I quote, to be a framework that:

> "provides a minimal setup of styles for a fast and clean starting point."

Milligram is specifically designed to provide better performance and higher productivity. Essentially, this framework wants to provide a solid starting point for you to begin designing your website to your own wildest dreams.

This is about all I can provide in terms of details about Milligram. Such is the nature of being a minimalist framework.

### __Conclusions__

There isn't much I can say about Milligram honestly. The only way I can convey my thoughts of this framework is to compare it to Pure. Because, honestly, I felt that Pure does a little more than Milligram does, which surprises me.

First of all, Pure provides its own CSS reset by working off of Normalize in the first place. While it doesn't have too much to offer on its own, I can appreciate having that reset so I can freely create my elements without the extra hassle of messing with default element values. Milligram, however, requires you to import your own CSS reset or do the reset yourself. Due to this, I had to struggle with my sample by constantly reworking every margin, padding, and more of the page and elements on the page. To me, it isn't that hard to include your own CSS reset, since it really is just copy and paste. It would just be nice if Milligram provided it within the framework instead of forcing you to get the reset yourself. In the end, that isn't really too much, but would at least be a nice gesture.

Secondly, Pure at least provides elements for a navbar while Milligram doesn't. I can simply ask why? A navbar is an essential element that basically goes on every web page/website. It only makes sense to provide a quick and easy way to make a navbar instead of wasting an hour plus making it myself. I honestly spent more time making the navbar over making it mobile responsive, which says a lot for me.

My main complaint about Pure is that it doesn't feel like it is helping me that much. Milligram has that same complaint but also feels like it does even less than Pure does. A small element here and there, like a button, is okay, but I simply am flabbergasted that it can't even provide a navbar for a developer to use in their project.

I also can't really tell if Milligram is making my entire page mobile responsive either. While the grid is simple and does respond with the size of the page, it doesn't feel like it provided any help with my other elements. This means I can't directly say that Milligram is aiding me in terms of mobile responsiveness, so I can't accurately judge it in that aspect.

In the end, my sample at least works fine, but I felt like I was making my own scratch project that followed a color scheme of only purple and white. Milligram doesn't provide its own color palette either, but that is something I have come to expect out of a minimalist framework.

The best and most accurate way I can sum up my thoughts is to rate Milligram. Without further ado, here is how I rate Milligram as a CSS framework.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 1 | 1 | 3 | 1 | 2 |

> ### **Final Rating** 1.8/5

# Semantic UI

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/dyOgmZg?editors=1100)

### __Framework Details__

The "Concise HTML" that Semantic shows off are a set of classes that are built off of natural languages like noun/modifier relationships, word order, and plurality to make an attempt to link concepts intuitively. As an example, they show a div that holds three buttons. Every single element has the **ui** class, but each button has a simple **button** class. The div itself has **three** and **buttons** classes. Honestly, reading it in plain English can explain really well that this div is meant to be a container that holds *three buttons*. To me, that kind of language does make sense and is rather satisfying at the end of the day.

Semantic UI isn't just HTML and CSS though. In fact, Semantic claims to have "Intuitive Javascript" that uses simple phrases called behaviors that they use to trigger functionality. Semantic's example of this Javascript is 3 line piece of code that links to a dropdown menu. It simply uses the class of **dropdown** and sets the currently selected values of this dropdown to show up inside the initial dropdown element. You can even play with this element by clicking the dropdown, selecting elements in the dropdown, or even getting rid of elements that you have chosen already. It looks simple enough and might help in a larger scale project that might utilize the aid of Semantic UI.

One major highlight of Semantic is the sheer amount of themes that come with it. On the very front page of this framework's website, you can find a section with a simple online store set of buttons. But there is a dropdown menu right above this little section where you can test out some of the themes that Semantic seems to bring with it. It all changes right on the screen in real-time with quite a few options to choose from. Semantic says that it comes equipped with an intuitive inheritance system and high-level theming for ultimate design freedom. The way that Semantic puts it is like this:

> "Develop your UI once, then deploy with the same code everywhere."

While I never explored this feature of Semantic, you're more than free to click this [link](https://semantic-ui.com/usage/theming.html) to find some extra information about Semantic's theming feature.

### __Conclusions__

So, after spending some time with Semantic, I have to say that I have...mixed thoughts about the framework. On one hand, it provides a lot of useful features with its variety of themes, html, and javascript to back it up for a larger project. On the other hand, it seems to be too much to handle on a smaller scale and doesn't exactly provide every element that other frameworks seem to do.

I definitely see the many uses that Semantic UI can provide for a very large scale project. If you have a project with 10 or more pages, then Semantic can make it very easy to create a simple and consistent UI without the hassle of having to import the same UI over and over to every single page and have to modify every individual element as well. The Javascript that is also provided with this framework does seem really useful and can help buff up the elements that Semantic UI provides. But I can't get over the lack of help that I was able to get with the navbar. That isn't the only complaint though.

While Semantic does provide their own classes to use for creating a card, I didn't exactly like the end result of these cards. They came out much smaller and more generic looking than I would have expected. I honestly felt the need to get rid of the default styling all together and make my own cards instead. The actual grid system doesn't have any margins by default either. My grid aligns the elements to the left side. Semantic does provide ways to get around this, but the centered class I added made one card hover directly below the other two instead. So, the options I had seemed to be ones that I would just have to deal with.

These little things are some complaints from me, but there is one major issue that I had with this framework. That is the reasoning behind I had to create my own navbar by default. When I added their menu elements to my code, I did still need to add my own css and js to try and make these elements. However, this involved needing to add margins and changing the display of these elements. To my surprise, I couldn't change these elements at all. In fact, I wasn't able to add any margins to any element that Semantic provided. It seemed that I was just locked into whatever Semantic gave me and I could only update items that didn't have a single Semantic class added to them. This was particularly frustrating for me, as I couldn't do anything to make the menus they gave me mobile responsive. And since I'm on a bit of a time crunch for these sample and docs, I had to resort to bringing in an entirely original navbar that I made myself, which also includes elements to make my navbar mobile responsive in the first place.

I can't put all these faults on Semantic alone though. Of course, my sample was being built on Codepen, which has some limitations itself and its own hiccups. In the end, Semantic UI feels like it is better saved for a large-scale project that can take more advantage of its Javascript and themes.

To accurately give my final thoughts about this framework, all I can do is rate it based on my own scale of its features.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 4 | 4 | 3 | 5 | 3 |

> ### **Final Rating** 3.7/5

# Tachyons

[Codepen Sample](https://codepen.io/Vanilla-Ford/pen/PobXqwW)

### __Framework Details__

Tachyons gives its own clear list of every feature that it has to bring to the table. Allow me to give a modest list of what I think is most important for Tachyons to bring to the table.

* Open source component library

* Lightweight

* Documentation

* Multiple Flavors

* Shallow Cascade

* Low Specificity

* Accessible Color Palette

* Mobile-first architecture

* Responsive Grid

* Easy to Customize and extend

I gotta say, from the surface, Tachyons is certainly impressive. The list by itself can be confusing, so allow me to give some flavor text on this matter.

Tachyons has a complete open-source library of components that you can freely use for your project. Each one shows a proper example with the exact code you would need to make that component. You copy it, paste it, and modify it to fill your every need! If you are worried about size though, then you don't need to worry at all. Tachyons’ entire library comes in at a surprising 14kb when minified and gzipped. If that is still too big for you, then you can still strip out what you don't need to make that impressive size even smaller.

Now, it's important for a CSS framework to be well documented. I've experienced too many frameworks that were solid but made me struggle due to navigating through the framework just trying to learn how each component or element worked. Tachyons states directly on the front page that:

> "Each module is **carefully** documented. From stats about the size of the module, to how each CSS class will render on the screen."

Tachyons only gives away two parts of its documentation here, but I'm rather intrigued to judge the documentation for this framework to see just how *carefully* documented it actually is.

Most impressively, Tachyons has multiple ways you can use it. It isn't a simple one-trick pony, no. If you don't like the existing class names, then you can try Tachyons more [verbose version](https://github.com/tachyons-css/tachyons-verbose). If you want to use Sass instead of Postcss, then Tachyons has another [repo](https://github.com/tachyons-css/tachyons-sass) just for that use as well. Impressively, Tachyons even has a [react-native boilerplate](https://github.com/tachyons-css/react-native-style-tachyons) that you can utilize as well. The versatility of Tachyons is among the highest I've seen in any framework. It doesn't cover all grounds, but it does its best to cover every single bit of it that it indeed can.

Beyond its flexibility with implementation, Tachyons itself is flexible with your own CSS. The cascade has nothing that can override a class's effects, but the majority of Tachyons selectors have a specificity of 10. Tachyons will never override your existing styles, so you have the ultimate freedom to just lay it on top of your existing CSS or even another framework in general.

And, finally, also most importantly, Tachyons is built mobile-first. This is like some of the bigger frameworks, like Bootstrap or Bulma. Being built mobile-first puts a special focus on the framework makes it take away as much mobile reformatting as it can just for you. 

To put it simply, Tachyons seems to have everything you could ever want or need from a CSS framework. This framework overall comes off as very well designed and made to fit into your project with the best of ease.

### __Conclusions__

I want to start by making a very obvious comparison to Tailwind CSS with Tachyons. From a first glance, I couldn't tell that Tachyons was mainly a utility-first kind of framework. This gave me some issues at first, as every element has a lot of classes added to them, making it hard to keep track of what class was doing what to my element. Tailwind CSS did this same thing to me and it ended up making the HTML feel bloated with many different classes while also making it hard to figure out how to use these classes to make a proper component, like a card or a banner. However, while I still have the same complaints about the elements being bloated with too many classes, Tachyons has one thing going for it that makes it better than Tailwind as a whole.

Tachyons has great documentation to begin with, but it also has a very strong set of default components that are built for you to use freely. While Tailwind also has default components, they are also locked behind a 200 dollar paywall, making it very frustrating to find a proper example of a component being build with the framework. Tachyons doesn't have a paywall. Instead, every component that you could think of is included with the very docs of this framework. It turned what I thought would be a six-hour-long project into one that took only two hours instead. Being able to simply copy and paste a default component and just modify it with those utility classes is much more efficient than having to spend an extra hour looking up an example of what somebody else did to make ONE component.

Tachyons in general feels like it offers a lot more as a utility-first class framework. It is very lightweight and demands nearly nothing from you. Tachyons is incredibly easy to install, easy to use, and simply allows you all the creative freedom you could want with using a framework. While it does have the drawback you needing a ton of classes to make a single component, it does make up for it by giving you the option to plug this framework in with your own CSS or even to other frameworks. I've seen examples of people using Tachyons on top of Bootstrap with little to no obstacles in the way.

So, in summary, Tachyons is a utility-first framework that supplies plenty of default components and utility classes to be a very effective toolkit that you can use by itself, with your own CSS, or with other frameworks in general. To give a better visual of how I feel about this framework, I will leave it all to the numbers from my rating of Tachyons as a CSS framework.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 5 | 5 | 4 | 4 | 5 |

> ### **Final Rating** 4.5/5


## Javascript Frameworks

### JS Document Outline

This task represents the time to think and document an outline for what we might want to write up about our selected JavaScript frameworks.

* Introduction
 * Description of the Javascript framework and what the intent of use is
 * Who published the JS framework
 * Features list
 * Recognizable sample projects published by well-known companies
* Framework Specifications 
 * Latest Version 
 * Size of the framework
 * Licenses 
 * Source Language
 * Install Specifications / External Dependencies
 * Browser Support 
 * URL to framework website
* Code Samples
 * Specific code pieces that set the framework apart from others in the market
 * Key features mentioned earlier in the doc will be highlighted with code examples
 * Repository links to sample projects 
* Compare and Contrast between similar frameworks
 * I.E. React.js vs Preact.js and why devs should know the difference between the two
* Conclusions
 * What the framework does right (i.e.. efficiency, easy to use, set up, etc.)
 * What the framework does wrong (i.e dependencies, slowdown, size, etc.)
 * Developers mission statement in why they created the framework
 * Outro reinstating the description of the framework and why it is essential for developing web-apps today

### JS Sample

## JS Quiz
This sample is designed to test each JavaScript Framework in its ability to fetch data from an API and use it to display information/interaction with the user on the front end

### API Specifications
1. The API should offer quiz-based data (Questions and their corresponding answers)
2. The API must be free to use/open source
3. The API should be current and still supported by the creators
4. The API must specify a key for the question, correct answer, and incorrect answers

### Code Specifications
1. The framework should be able to fetch a collection of questions and answers using the predetermined Quiz API
 * The data is then stored as an object 
 * We will store the question as a String variable
 * Store the correct answer as a String variable
 * Store the incorrect answers as an array of Strings
2. The questions are limited to 2-3 questions per JS sample
 * This is so we can keep the sample short while also demonstrating the capabilities of each framework
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

## Vue

### **Code Sample**

Here is our own code sample used to outline the features of Vue.JS compared to other frameworks in the market.

[Vue.JS Quiz](https://codepen.io/wistydagel/pen/MWbKMqE)

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

* Vue has a lack of support for very large-scale projects. As the development team behind Vue is a lot smaller than that of Angular's for example. So, the framework is still lacking the capability to support projects that many large companies like IBM or Adobe are trying to sustain. Due to its support for smaller applications, we will not be seeing these kinds of companies shell out their resources and financial support in order to back something like Vue just yet.

* Vue.JS is still a relatively young framework and it still has a lot to improve on when you compare it to the more seasoned frameworks like React or Angular. Certain elements may be implemented better. However, the framework has a long way to go.

## **Conclusion**

### **Why Consider Vue.JS?**

If you already know HTML, JavaScript, and CSS then this framework is rather approachable for any developer. It is versatile in its incrementally adoptable ecosystem, scaling between a library and a fully-featured framework. With it's incredibly small download size of only 20KB (with gzip), blazing fast virtual dom and minimal optimization efforts. Vue.JS has a lot to offer in its performance.

There is a reason why Vue.JS is one top JavaScript Frameworks for front-end development and that is purely in its simplicity of design and its ease of use for building robust Single Page Applications.

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 4 | 4 | 3.5 | 4 | 4/5 |


## React

## **Code Sample**

Here is a code sample we created to outline the features of React.JS so you may compare it to other frameworks on the market.

[React.JS Quiz](https://codepen.io/wistydagel/pen/wvooyrd)

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

## **Conclusion**

### **Why Consider React.JS?**

There are many great elements to React.JS. For one, it makes it rather painless to create interactive user interfaces. You can design simple view elements for each state in your app and React will update the UI whenever a change has been made to the data. Second, you can build encapsulated components (decoupled from the main JS file) that manage their own state, which then are integrated with other pages to make for rather complex UIs. And third, React can be blended with whatever technology stack your current app is using. It is easier than ever to develop new features in React without rewriting any of your existing code.

Not to mention if you are ever in the need to develop a mobile application React has your back with [React-Native](https://reactnative.dev/).

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4.5 | 3 | 4 | 2.5 | 4.5 | 3.7/5 |


## Angular

## **Code Sample**

Here is a code sample we created to outline the features of Angular.JS so you may compare it to other frameworks on the market.

[Angular.JS Quiz](https://codepen.io/wistydagel/pen/yLVgEdE)

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


## **Conclusion**

### **Why Consider Angular.JS?**

For anyone looking to make a web-based application that blends standard HTML with new and innovative ways to code via JavaScript, then AngularJS is the front-end framework for you. As you are choosing to use a framework that will assumedly never die as it is backed by Google, offers detailed documentation, and has a wide range of support from its community. AngularJS has thousands of additional tools and libraries that can be used in any Angular app.

Although the framework may be easy to pick up it can be very hard to master and leave you frustrated with your application. So, make sure to have some patience when using this framework, take the time to research your problem, and do some trial and error when necessary. As the advantages of using Angular far outweigh some of the disadvantages.

### **Our Rating**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Developer Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4 | 2.5 | 3 | 2.5 | 4.5 | 3.3/5 |


##Svelte

## **Code Sample**

[Svelte Sample](https://svelte.dev/repl/2d5f951c7f254807b8e2585ef3139d9d?version=3.32.3)

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
| 4.5 | 4 | 4 | 5 | 3 | 4.1/5 |

## Ember JS

## **Code Sample**

[Ember Sample](https://codepen.io/wistydagel/pen/ZEByoNE)

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

## Backbone JS

## **Code Sample**

[Backbone Sample](https://codepen.io/wistydagel/pen/xxRzQwQ)

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
| 3.5 | 3.5 | 4 | 4 | 2 | 3.4/5 |

## Polymer JS

##Code Sample

[Polymer Sample](https://codepen.io/wistydagel/pen/RwoeMvz)

### Pros

---

* Interoperable Architecture

  One of the greatest aspects about Polymer is its ability to integrate with finished applications. With an application separated out by modules you can simply inject the Polymer library wherever it is needed and the application will have no trouble continuing to run with the newly integrated library. This is what makes Polymer one of the most popular libraries to use as it is not relying on the developer to build the application from the ground up with Polymer in mind, but rather offers end products the chance to use Polymer just the same.

* Material Web Components

  Polymer was developed with Component architecture in mind. Making it much easier for the developer to write and create their own components to share across the entire application. Not only that, but having the library include all Material Web Components (MWC) for the developer to use makes the development process fly by a lot quicker. Instead of having to write out certain processes like buttons, icons, lists, etc. Material components already have all of those elements integrated and can simply be included in your project with a sample tag.

  For more on MWC, [click here](https://github.com/material-components/material-components-web-components)

* Use of data-binding

  Having both one way and two way data-binding makes things more open for the developer. This is super convenient for any developer as it always ensures the changes made to the model will be displayed in the view and vice-versa.

* Smart templating

  Separate HTML templates can also be built through Polymer JS, which will later become parts of the fully-functional web applications. You can employ these templates for an unlimited number of times without having to rewrite the same code over and over. This is due to the declarative integration of HTML when creating the templates and having no need to build anything from scratch once the templates are complete.

* Event Handling

  Polymer innovates in its use of event listeners, making it super and easy to follow in their very straight forward documentation. You can easily create normal event listeners, annotated event listeners, custom events, property change events and much more.

  For more on event listeners, follow this [documentation](https://polymer-library.polymer-project.org/1.0/docs/devguide/events)

* Polymer CLI

  Developers are given the ability to use the proprietary Command Line Interface (CLI) built for any Polymer project by default. Having this built in the library reduces the total number of requests and decreases the size of the whole project overall.

* Support for ES2015 standards

  Having a framework follow today's standards of web-design and development only pushes the use of the library forward rather than losing itself in dated methodologies. Luckily, Polymer strives itself in its ability to stay current with modern development practices. This is even more surprising as its cousin "Angular" tends to lose itself in certain dated JS practices.

### Cons

---

* Limited tools

  Being that this is a library designed by and for Google, the range of tools/plugins that are compatible with Polymer are rather limiting. This is mainly due to the fact that Google built this library to mainly benefit their applications and then outsourced the library for other companies to use for their websites. Now, more tools are still being developed and are on their way to fit Polymer JS so this may not always be the case down the road.

* Browser constraints

  Some features built natively aren't always supported by every browser, so the developer may have to take it upon themselves to innovate and right components that fit for a variety of browsers. This not only takes additional man-power to work on adapting to a variety of browsers but also an unnecessary amount of time trying to rewrite similar components to fit the requirements of the browser.

* Slower performance

  Having to build a variety of components fitting to different browsers can also impact the speed and performance of the application.

## **Conclusion**

---

### **Why Consider Polymer?**

Polymer is a great JS library for anyone looking to add a variety of components or templates into their web-application. Now, many people may mistake Polymer for a Web Framework but as a matter of fact it is only a library. It does not have any constraints in syntax bound to a specific methodology, but is rather open to the developers' way of writing their application. To put it simply, it does not force you to play its rules but rather allows you to play by your own. Polymer JS has gone through a variety of changes over its course of development and is now sitting at a fairly comfortable spot. By stripping away some of the unnecessary dependencies other libraries/frameworks have and keeping things fairly slim for its install, Polymer makes things really easy for the developer.

For those who only want to add Polymer as an addition to their already established web-application there's a version of polymer for you (look for *Polymer Micro*). For those who are looking to try and build the front-end of their application entirely with Polymer there's a version for you (look for *Polymer Standard*). And for those who are sitting somewhere in the middle, well there is also a version for you (look for *Polymer Mini*). Polymer was created with the developer in mind and it clearly shows with the state it is in today. Having such an adaptable library that has very little pre-requisites for the developer to implement is a breath of fresh air. Not only that, but if you find you aren't getting enough out of the library... there is a whole plugin you can include for Material Design Elements which further enhance the client-server communication and much more.

For anyone new to web development and would like to get their feet wet with Component Architecture before they dive into larger frameworks like View, React, etc. Then look no further than Polymer JS as it offers a great experience for anyone looking to build a variety of web applications using components and more.

### **Our Score**

Here we will be rating the overall framework out of a score of 5 in each category.

| Efficiency | Ease of Use | Clean in Syntax | Small Learning Curve | Community Support | Overall Score |
| ----------- | ----------- | ----------- | ----------- |----------- | ----------- |
| 4 | 4.5 | 3.5 | 4 | 3.5 | 3.9/5 |

## Aurelia

## **Code Sample**

[Aurelia Sample](https://codesandbox.io/s/a-simple-component-forked-heh6b?fontsize=14&hidenavigation=1&theme=dark)

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


## Testing Frameworks

### Test Document Outline

1. Introduction 
 * Design principle (i.e. what approach is it best suited for?)  
 * Feature highlights (What is it's main selling point?)  
 * Technology Synergy (What is it built to be used with?)
2. Technical Specs
 * Platforms
 * Supported Browsers/Servers/OS
 * Supported Frameworks/Libraries
 * Language Support
 * Development status
3. Samples  
 * In-industry examples  
 * Mockup Project(s)  
    * Steps to setup
    * Tech stack  
    * Test examples  
    * Quirks/tips/notes  
    * Conclusion on project  
4. Conclusions  
  * Benefits and drawbacks
  * Difficulties installing
  * Truths and lies compared to official site
  * Overall Workflow Improvement/Hinderance
  * Personal notes

### Test Sample

#### Shopping User Testing

##### Step through website to test Automation Framework
Each of these steps will be run through for each framework on the same site. This list will be run at least five times in order to get a small but robust sample from the website and frameworks.
1. Go to http://automationpractice.com/index.php
2. Search “Blouse”
3. Select First result
4. Change Quantity to 5
5. Change Color to white
6. Click add to cart
7. Click Continue shopping
8. Under Women -> Dresses, select Summer dress
9. Under the first option, select the blue dress
10. Change size to L
11. Add to cart
12. Proceed To Checkout
13. Delete Summer Dress
14. Proceed to Checkout
15. Sign in with Test@automation.org and Test@Atomaton
16. Fill out Account info
17. Click next
18. Add comment “Help”
19. Proceed to Checkout
20. Agree to terms of service
21. Pay by check
22. Confirm order

#### Success Criteria
In order to be considered a success, all of these criteria must be met, with no deviation to be considered a successful test. Each framework must be able to complete a successful test to be evaluated.
1. All values are input correctly
2. No errors are thrown by the Framework or as a result of the framework
3. Order is placed successfully
4. The test is repeatable several times consecutively with different values


# An Analysis of Selenium

## Document History

| Date | Description |
| ------------- | -------------- |
| 2/11/2021 | Initial Creation of Document |
| 2/12/2021 | Modification to add revision history and new sections |
| 2/17/2021 | Added Details on code And conventions |

## Document Author

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## What is Selenium?

Selenium is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Selenium offers simple, user-like interaction with the browser; a syntax that is readable similar to English, and user administration automation. It can work with any technology thrown its way including all major web browsers.

## Technical Specifications

Selenium is not platform restrictive as it works on every major browser and it hooks into specialized drivers so where you use it is only limited by the language implementation. It has implementations for Node.Js, C#, Java, Python, Ruby, and Kotlin. It is currently free for most users and has been receiving regular updates since 2005.

## Samples

A variety of companies use Selenium from Alibaba to Trivago to for browser automation. Totaling over a thousand companies and thousands of developers. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install selenium  
`$npm i selenium-webdriver`
2. Download the appropriate Browser Driver (We went with Chrome)  
[Chrome Driver Downloads](https://chromedriver.storage.googleapis.com/index.html)
3. Start writing tests!
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. One of the issues I ran across, and many others on the internet, was that hovering over an element did not always trigger the mouseover event, something crucial for JavaScript based interactivity. The “natural” English syntax was strange for a developer who is more used to the traditional syntax of most languages. It was more verbose but being able to read it like a sentence was helpful somewhat. The asynchronous architecture of the framework makes it strange at first, but you soon realize that this allows for pages and elements to load before your command is executed. This project was difficult to get going, especially getting around the asynchronous nature and the unpredictability of the mouse, but it was certainly not the worst framework ever made.

## __Conventions__

The common method of writing code in Selenium is by calling asyncronous funtions via the await function. This allows for implicit and explicit waits for pages and elements to load. However, this syntax becomes confusing with classes like 'By' having a CSS function, rahter than passing in a css selector directly. There is also not an easy way to assert states in Selenium, in fact this was not stated in the documentation in the getting started or in any of the docs I came across.

```JavaScript
let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://automationpractice.com/index.php');
    let amt = await driver.findElement(By.css("#quantity_wanted"));
    await amt.sendKeys('5');
} finally {
    driver.quit();
}
```

## Conclusions

One of the major benefits of this framework is the automation of tasks. Modern features of the internet are not well suited for Selenium, but if there are multiple things needed to be done on a website that need to be done repeatedly, then this testing suite would suit your needs. The site does not boast too much about what it can do, so it really is an experience you need to try to get a solid opinion on it. This may improve workflow with QA teams, but average developers would probably be better off manually testing and using unit tests. All in all, I personally don’t see myself using Selenium again, but if there was a need for browser automation, it would be on the list of considerations.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | N/A | 3 | 5 | 2 | 3 |

> ### **Final Rating** 3.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable


# __An Analysis of Playwright__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 2/22/2021 | Initial Creation of Document |
| 2/23/2021 | Updated Docs based on new Info |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Playwright?__

Playwright is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Playwright offers simple, user-like interaction with the browser.

## __Technical Specifications__

Playwright was developed by Microsoft for browser automation. It has simpler syntax than selenium's verbose english-like syntax, with a more easily readable and usable one. It also ships with all necessry components inside it's node.js package, allowing seamless integration into the workflow. It should be noted that legacy Edge and Internet Explorer are not supported.

## __Samples__

Only a handful of developers actively use Playwright. I am unsure as to why, perhaps it's predecessor is more well known or other more easy to use frame works are available that make it a middling option. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Playwright.  
`$npm i playwright`

It really is that simple to set up; As stated previously: seamless integration.
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. It has signifigant improvements to Selenium, where Selenium inconsistently clicks and fires mouse events, Playwright can even hover unlike slenium. There are some bugs having to do with accurate clicks and css animations, but these can be fixed with a hover and then a click.

## __Conventions__

This really is just a simplified version of Selenium. The syntax may be simpler, but it also has similar issues with clarity. The browser object refers to the program itself, the context to a window and tabs, and the page to a page itself. The separation is nice for specific things like tabbing in and out or making specific changes to a browser. However, most often you will be working with a singular page. It still uses the await syntax and implicit waits, but does so without the user needing to set these values explicitly. It also defaults to using a headless mode that goes as fast as possible. You have to change these yourself, but with poor documentation it's easy to look over the full range of options. One of the nicer tools that comes with this framework is the recording of actions on a website that gets transferred into code, though it does not record when hovering over elements so it doesn't necessarily work out of the box.

```JavaScript
const browser = await chromium.launch({
    headless: false,
    slowMo: 50
});
const context = await browser.newContext();
// Open new page
const page = await context.newPage();
// Go to http://automationpractice.com/index.php
await page.goto('http://automationpractice.com/index.php');
// Click input[name="search_query"]
await page.click('input[name="search_query"]');
// Fill input[name="search_query"]
await page.fill('input[name="search_query"]', 'blouse');
```

There is also support for easier assertions, although this requires an outside library for unit testing. The documentation does not explicitly tell you this and even will auto generate it for you.

## __Conclusions__

If you had to pick a testing framework, don't forget about this one. While there are easier to use frameworks that have some more interesting support, this framework is robust with very little issues in usage.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 4 | 4 | 4 | 4 | 3 |

> ### **Final Rating** 3.8/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable


# __An Analysis of Nightwatch__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 2/16/2021 | Initial Creation of Document |
| 2/17/2021 | Further addition of information of framework |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Nightwatch?__

Nightwatch is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Nightwatch offers simple, user-like interaction with the browser; It can work with any technology thrown its way including all major web browsers.

## __Technical Specifications__

Nightwatch is based on the Node.Js implementation of Selenium. Despite this, it's asynchronous nature is based on promises and callbacks, not awaits. The configuration file is also extremely extensive, allowing most of the setting to be configured in it's own file, and separate from the testing code.

## __Samples__

A variety of companies use Nightwatch from Amazon to PiNCAMP to for browser automation. It does not yet have a large following, with only a few dozen companies reporting using it in their tech stack. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Nightwatch.  
`$npm i nightwatch`
2. Install the ChromeDriver Install package.  
`$npm i ChromeDriver`
3. Follow the configuration steps on the Nightwatch site.  
The Standard Chrome config that's provided works for this example.  
4. You may need to change your configuration based on your driver of choice.
  
Writing the tests was simple: locate an element, and interact with it, usually by clicking or sending keystrokes. This was one of the most comfortable frameworks I've ever worked with. Writing the code was quick, intuitive and generally pleasant. Configuration was confusing at first, but it ended up being helpful to have preset configuration away from the code.

## __Conventions__

It is common to run tests by changing together functions one after the other, with the browser object at the top of the chain. Two other things here that are important to note are the verify and assert keywords. Assert will print the success or fail to the console, and then stop the test if it is a fail. Verify does the latter but not the former, helpful when attempting to verify that values are correct when running test. Assert is more helpful for stopping a test if an element never shows up, so it is commonly paired with `.visible()`.  

```JavaScript
browser
    .click("#menu")
    .setValue("input[type='username']", ["Tom", browser.Keys.ENTER])
    .assert.containsText("#profile_name", "Tom")
    .verify.containsText("#profile_date", "4/4/2013")
    .end()
```

## __Conclusions__

One of the major benefits of this framework is the automation of tasks. Modern features of the internet are well supported on Nightwatch. It can navigate webpages exactly as a user would. The syntax is natural for a web developer, and even if you aren't, it still reads generally logically: `browser.click("#button")` reads very naturally without breaking convention of standard languages.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | N/A | 4 | 5 | 4 | 4 |

> ### **Final Rating** 4.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable

# __An Analysis of Postman__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 3/11/2021 | Initial Creation of Document |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Postman?__

Postman is a testing suite for API frameworks. It is a robust application for requesting all HTTP requests. This industry standard is one of the most widely used applications for ensuring that your API is functioning, or just learning how an API works before using it in production.

## __Technical Specifications__

Postman supports Mac, Windows, and Linux operating systems, and has 32-bit and 64-bit releases for both Windows and Linux. It can run virtually in any setup and smoothly integrates into any development workflow.

## __Samples__

This industry standard application has a number of examples on their website and of course on sites like Stack Exchange. The example this test was run on is simple:

1) Grab a list of movies with the query "Fear and Loathing."
2) Grab the Second result.
3) Get the lead actor of the cast.
4) Get a list of all movies the actor was present for.
5) Visualize the results in percentage of genre for all films.

## __Conventions__

The first thing to set up is a collection in order to have common variables between tests and to have tests run in a series with the press of a button.

Each test in said collection is then given a URL to receive data from. There is also a pre-request script that could be run before a request to set some variables beforehand if needed. After the request is run the Test section is run, which is a JavaScript script that runs like normal. The tests are run after the script is finished.  

One of the best things about Postman is the built-in assertions, where the user can assert tests and have multiple pass/fail responses per request. These are integral parts of the tests and you can have multiple assertions per test and multiple tests per request.

A small request test script:  

```JavaScript
pm.test('Success', () => {
    pm.response.to.have.status(200);
    pm.response.to.be.ok;
})

pm.test('Set First Movie Variable', () => {
    pm.variables.set("first_movie", pm.response.json().results[1].id);
    pm.expect(pm.variables.get("first_movie")).to.equal(1878);
})
```

This uses the strange "English-like" syntax of chaining together multiple property accessors, but then also uses functions for certain assertions. It can be a bit clunky at times, but not needing external libraries is nice.  

The other great part of Postman is having visualizations for data, where it can render HTML using the HandlebarJS library for templating.  

```JavaScript
var template = `
<canvas id="myChart" width="auto" height="100%"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            {{#each labels}}
                "{{this}}",
            {{/each}}
        ],
        datasets:[{
            data: [{{data}}],
            backgroundColor: [
                {{#each bgColors}}
                    "{{this}}",
                {{/each}}
            ]
        }]
    }
});
</script>
`
//Code cut here for brevity

pm.visualizer.set(template, {
    data,
    labels,
    bgColors
})
```

This particular example here uses ChartJS to show a donut chart for the percentage of the movies. The website has this an example but does not tell you much on how to actually set it up. Just like a regular HTML page you need to import the required scripts, but since we can't make external JS files ourselves we have to write our script in a `<script>` tag.  

One of the issues with the visualizations is that it does not render in the collection runner, only in the standard single request runner.  

## __Conclusions__

Postman is a standard for a **good** reason. It can create several workspaces, environments, and collections of requests, with each group being able to have common scripts and requests but different in each execution. You could feasibly have multiple projects, with multiple APIs each, with hundreds of collections, each sorted and runnable in chunks. There are things that are difficult to use about it, but once you learn them you have a powerhouse of an API development tool.  

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 5 | 4 | 5 | 5 | 4 |

> ### **Final Rating** 4.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable


# __An Analysis of Puppeteer__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 3/11/2021 | Initial Creation of Document |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Puppeteer?__

Puppeteer is an end-to-end framework made for automating browsers programmatically, the implementation we will be referring to in this paper is the Node.Js implementation. Puppeteer was Google's solution to testing it's websites and was thus focused on Angular.

## __Technical Specifications__

Puppeteer was designed for Angular and works only using the Chromium driver. It can be run on major OSs as it's primary implementation is on Node.Js.

## __Samples__

Obviously Google is the primary user of Puppeteer and is used when testing against sites like YouTube, Google+ (when that was up), and of course their main search engine. In our test sample we ran it against [Automation Practice](Automationpractice.com), a site designed to help test and create these kinds of frameworks. It was relatively straight forward:

1. Create a new Node.js project and install Puppeteer.  
`$npm i playwright`
  
Writing the tests was usually simple: locate an element, and interact with it, usually by clicking or sending keystrokes. Though, as I will discuss later, it's successor Playwright outclasses it greatly.  

## __Conventions__

This framework, when compared to, it's successor, has some major differences. For one thing, keyboard inputs are not obfuscated into other inputs, they are direct and are also slowed down based on the speed a human would input them. Other than that, those are the only possible benefits of Puppeteer over Playwright.

The framework requires a lot of waiting, a lot of waiting. Unfortunately, it is also unpredictable, so it is not uncommon to have almost every selector be waited upon. It also needs to wait after most navigations, though when this needs to be done is unclear, in fact sometimes this may break the test, failing it, if it was unnecessary.

It also does not support more advanced CSS selectors, like choosing elements that have specific text.  

This makes your code much longer and less readable.

```JavaScript
const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
});

// Open new page
const page = await browser.newPage();

// Go to http://automationpractice.com/index.php
await page.goto('http://automationpractice.com/index.php');

// Fill input[name="search_query"]
await page.focus('input[name="search_query"]');
await page.keyboard.type("Blouse");
await page.keyboard.press("Enter");

//code skipped for brevity

await page.hover("#block_top_menu > ul > li:nth-child(1) > a");
await page.waitForSelector("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a", {visible: true, hidden: false});
await page.click("#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a");

```

## __Conclusions__

There isn't a good excuse to use puppeteer. It lacks feature that even Selenium has, so it needs work arounds and poor practices to function. In comparison to it's successor, it needs more code and time to work on. The real killer for a choice is browser support. Disallowing any browser except for Chromium is unacceptable.

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 2 | N/A | 2 | 3 | 1 | 4 |

> ### **Final Rating** 2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable