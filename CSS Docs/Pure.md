# Pure

[View Pure Here](https://purecss.io/)

## Document History

| Date | Description |
| - | - |
| 2/25/2021 | Initial Creation of Document |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Pure CSS, yet another framework I've never heard of but also very unique among some other frameworks I have worked with. A framework that sells itself with having:

> "A set of small, responsive CSS modules that you can use in every web project."

Well, with a size of **3.7kb minified and gzipped** then I certainly believe Pure in terms of its small CSS modules. And this shows a little further with the framework being completely designed for mobile devices in mind.

However, there is one concern I have with Pure. Allow me to leave a quote straight from the docs of Pure to put my concern in perspective:

> "Pure has minimal styles and encourages you to write your application styles on top of it."

This quote could mean one of two things. One is that the general style of pure is minimalistic, allowing you to create your own style while keeping the basic form of every element you could need. But, this could also mean that Pure is very barebones and doesn't really provide too much as a CSS framework.

Well, there is really only one way to find out what Pure is all about. So, without further ado, let's dive into Pure CSS.

### __Framework Details__

So, when taking a first look at Pure CSS, you can see that it has 6 distinct main sections. These sections are listed as:

* Base

* Grids

* Forms

* Buttons

* Tables

* Menus

Most of these sections are rather self-explanatory, however I should explain what the Base section is about. For the Base section, Pure goes on to explain how it is a framework that is build on top of Normalize, so it gives a quick little way to include Normalize in your project to get started. It then gives a little flavor text about Normalize and how it builds over it before moving on to elaborate on how to hide an element and what class you can use to make an image be mobile responsive. Both are helpful in their own cases, but that is about it for the entirety of this section.

Now, Pure does have a Tools section, but that section is a little misleading with the name. Instead of displaying its tools that can be used with the framework, it shows the "tools" you can use to install Pure for your project. While a little misleading, the section is useful to learn how you can install this framework on your project.

Pure does have a couple extra sections, such as Customize and Layout, but that is essentially it. So, as I had my worries about the amount of features with this framework, it seemed like those worries might indeed be correct. 

But, it's one thing to read the docs but also another to actually use it. Without further ado, allow me to walk you through how I used Pure CSS to create my simple landing page sample.

### __Samples__

As with the other frameworks I have tested out, I made this sample on Codepen. If you would like to view this sample then please click [here](https://codepen.io/Vanilla-Ford/pen/LYbLQRz).

#### *Installation*

To figure out how to install Pure, I shall be referencing the "Tools" section of Pure's documentation. If you would like to view this documentation, then please click [here](https://purecss.io/tools/).

The first, and recommended, way to install Pure for your project is to use npm. Simply use the command below in the proper directoy to install Pure in no time:

`$ npm install purecss --save`

Aside from npm, you can also use composer and grunt to install Pure CSS. I'll provide the command you can use to install Pure through composer but the documentation for installing Pure via Grunt simply says to integrate Grunt plugins into your existing Gruntfile.js. Anyway, here is the command to install Pure using composer:

`$ composer require pure-css/purecss`

Pure's documentation has some extra information regarding a couple other ways to install it to your project, but npm and composer are two of the main highlights in doing so.

Of course, there is also a free CDN link you can use on your HTML page. I shall provide a simple link element you can freely use on your project:

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/2.0.5/pure-min.css" integrity="sha384-LTIDeidl25h2dPxrB2Ekgc9c7sEC3CWGM6HeFmuDNUjX76Ert4Z4IY714dhZHPLd" crossorigin="anonymous">`

That's enough of the installation process now, so allow me to begin with my banner for my sample.

#### *Banner*

So, to begin with the banner, I should see if Pure has any classes I could use to build it. I took then to the docs of Pure and did my best to look through everything I could. However, to my surprise, Pure seemed to have quite literally nothing for me to use to build a hero banner. Well...that is quite disappointing. 

Regardless, a hero banner is still not that hard to make. So I took it on myself to create a div that contained an h1 and an h3. All three had my own classes that I applied some padding, margins, and color to. A fairly simple process.

Luckily, it seems that including Pure at least made my banner mobile-responsive already, so that is a plus at the very least.

Regardless, I should move on to my three cards to make up the rest of the content for my page.

#### *Three Cards*

Well, if Pure doesn't have its own elements to build a banner, I surely hope that the docs can provide me some grid elements to put my cards in. Luckily, Pure at least has a grid system that I can use.

To begin, I added a new div with the **pure-g** class. This div would serve as the main grid container for my other grid elements and my three cards. So, inside my **pure-g**, I added three new divs. All of the divs had the **pure-u-8-24** to every single one.

I will briefly explain how Pure's grid system works. Pure's grid system is a simple math problem. You can choose either its 5th-based unit system or its 24ths-based unit system. The first number in the class is the number of units for a certain element to use up while the other number represents the total amount of units in the grid. Pure provides some extra information in its grid [docs](https://purecss.io/grids/), but the only way I can explain it is that I used the 24 unit grid system and, since I needed three columns, I divided my grid by three to get the eight units for every container to hold. However, in all fairness, I could've also done *1-3* instead of *8-24* as well, since you can also use those base units, as stated in the grid documentation.

With the grid in place, it was now time for me to see if Pure provides their own way to make a card. But, to my surprise again, they did not... Well, I guess I needed to make my own cards. I made a simple *card* container, a *card-content* container, a *card-title*, and *card-text*. For the CSS, I just copied some other CSS I have used in other projects. Simply giving the card container a rounded look, soft shadow around the border, max-width, and a margin brought the main card look. Padding was applied to the card content. Then I applied a some basic text CSS, such as a font size and line height, to the header and text.

I made my first card then simply copied and pasted it in the other two grid sections. With the aid of Pure's grid system, I now had three cards that were mobile-responsive.

One last piece of the puzzle now needed to be made. That piece is the mobile-responsive navbar.

#### *Collapsible Navbar*

Now, to see if Pure had anything left for me, I took to the docs once more. Luckily, in the [layouts](https://purecss.io/layouts/) section of Pure's docs, Pure provided their own example for creating exactly the type of navbar that I wanted.

At first, I looked at the sample and noticed that it actually provided every ounce of the code, the html, css, and js, and thought that I should probably try to build my own nav built off of this example, rather than copying the sample completely.

I noticed that the navbar also uses Pure's grid system. This must be how you can align navbar elements however you would like in your navbar. Pure also has its own menu elements to help make the navbar, which do make this process a lot easier. Elements such as **pure-menu**, **pure-menu-horizontal**, **pure-menu-list**, **pure-menu-item**, and **pure-menu-link** are the full makings needed to make a basic navbar menu. This is all perfectly fine on its own and makes a menu just fine but how do I make it responsive to a button?

Sadly, this part of the navbar turned out to be a major issue... Pure doesn't have its own JS and doesn't have its own set of classes to make this a very easy task. I tried over and over to slowly type up my own version of the code they provided to have very little success. The code got to a point that Codepen itself wasn't updating itself anymore, forcing me to reset the page I was editing in.

I followed the sample over and over again, carefully seeing if I made any errors at all. Double checking my css, the js, and the classes in the html over and over again. This struggle took multiple hours for me to figure out. In the end, I copied and pasted all the different parts of their sample to find yet another major problem.

Previously, the problem was that the button itself wasn't showing up and that the navbar menu wouldn't react with the button when I eventually got it to show up. It just looked awkward and wasn't working correctly. However, after copying and pasting their sample, I found that there was still an issue. This issue was that the button now appeared fine and dropped the navbar menu fine, but the navbar menu itself no longer existed. Or, at least it didn't at a full screen.

The navbar menu is there and it shows when you click or tap on the hamburger icon on a mobile sized screen, but it never appears in any other case. Sadly, this is a problem that still currently persists on the sample and I had to leave it to others to see if they could find a solution.

So, for now, the best navbar I can have for this sample is one that does drop a menu on a mobile-sized screen, but only has a brand name when at a full screen.

### __Conclusions__

Pure is a very unique framework. It provides the very basics of html classes and a grid system, but that is just about it. I personally can't find too many positives to Pure. The one thing I can say is that Pure does live up to its own name. The framework really is mostly "Pure" CSS.

I was personally disappointed by this framework. It is extremely barebones and really doesn't do enough for me to consider it as an actual framework. Pure CSS is a very basic framework with even more basic documentation. When making my sample, I found that I was making my own CSS by my own hand more than the framework actually putting in much work. All Pure did for me was provide a basic nav menu and a grid system. 

This one framework doesn't feel like one at all to me. This sample felt like a basic project and by far took the most time out of every framework so far. While I can appreciate Pure providing some basic mobile-responsiveness and a useful grid system, I don't appreciate having to do nearly all the CSS myself.

I wish I could provide some extra thoughts about Pure, but I am simply disappointed with it. The only way I can give an accurate viewpoint of my thoughts is to give Pure a proper rating. So, here is my rating below:

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 2 | 2 | 4 | 1 | 3 |

> ### **Final Rating** 2.5/5