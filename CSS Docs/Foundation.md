# Foundation

[View Foundation Here](https://get.foundation/)

## Document History

| Date | Description |
| - | - |
| 2/22/2021 | Initial Creation of Document |
| 2/22/2021 | Finalized Creation of Doc with Rating |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Foundation is a framework that I have personally never heard of before. But, I will admit that I was rather surprised to see its site as I got introduced to this CSS framework. It had some polish on the landing page and seemed to show off how proud the developers were of they're project. To keep it short, Foundation is a css framework that is mobile-first, customizable, but, most of all, professional. The front page of [get.foundation](https://get.foundation/) states that everything in Foundation is semantic, meaning that you can have the cleanest markup without sacrificing the utility and speed of Foundation. From what I can see, Foundation praises itself for being responsive while retaining its speed. But that is what is seen on the surface, so let's crack this framework open and see what it is REALLY all about.

### __Framework Details__

ZURB is a company that is all about design and the user experience. So, it comes as no surprise that they came to make Foundation the way they did. Foundation is mobile-first, taking a lot of the hassle away from the developer when building they're web pages utilizing the Foundation framework. With Foundation's hefty Javascript files, you can have access to a mobile responsive navbar with only one single line of code in your JS file. However, for this JS to work, you have to understand that your project must be running from JQuery first.

Other than JS required problems, every other mobile aspect of CSS is covered by Foundation. Font sizes shrink with the size of the screen as well as dimensions of HTML elements, taking away a very large chunk of CSS in the process.

Oh, one other thing that should be noted is that Foundation is split up into two different kind of frameworks. The big one, as well as the one I shall be talking about/using, is Foundation for Sites. The other one is called Foundation for Emails. While I never got to look at Foundation for Emails, I am acknowledging that it exists for the soul purpose of providing aid to:

> craft responsive HTML emails that can be read and anywhere and on any device.

For this document, I will be going over Foundation for Sites. If you want to look at this specific framework then please click [here](https://get.foundation/sites.html).

Immediately, I can see that Foundation for Sites is currently on its sixth iteration, which means that this framework has a good amount of history behind it. With a total of 6 different versions, its no wonder how Foundation is as big as it is. Oh, actually, Foundation seems to come in with a total weight of 60KB of CSS and 84KB of JS. So, if size is an issue for you, then don't worry when it comes to Foundation!

Other than providing a multitude of mobile-friendly components as well as a good amount of JS to back it up, Foundation does allow you to create your own website completely using its customizable Sass libraries. So, no need to worry about your final vision being taken away, you can simply take what Foundation brings and make it to whatever you like!

With that said, I must move on to my sample that utilized Foundation for Sites 6 to create a simple landing page.

### __Samples__

I created my Foundation sample on Codepen, so you are more than free to click [here](https://codepen.io/Vanilla-Ford/pen/wvodbJL) to view it if you would like to.

In this sample, I sought out to create a hero banner, three cards, and a responsive navbar that would shrink to a clickable hamburger menu when on a mobile-sized screen. As with any other framework though, you must know how to install Foundation for your project in order to utilize its many components and tools.

#### *Installation*

Now, Foundation does have an entire page and even a video to find out how to install it. If you would like to skip the reading of this section, then please click [here](https://get.foundation/sites/docs/installation.html) to view Foundation's page and the video they provide on how to install Foundation. If you're still in this section, then allow me to begin on the installation of Foundation.

The first option to install Foundation is with a variety of Package Managers. To save on some time, as well as space, I will list down a list of commands you can use in the appropriate package installer to get Foundation installed on your project.

* npm - `$ npm install foundation-sites`
* pnpm - `$ pnpm install foundation-sites`
* yarn - `$ yarn add foundation-sites`
* bower - `$ bower install foundation-sites`
* rubygems - `$ gem install foundation-sites`
* meteor - `$ meteor add zurb:foundation-sites`
* composer - `$ php composer.phar requires foundation/foundation`
* nuget - `$ Install-Package foundation-sites`

Now, if you don't like having to use a specfic client to install Foundation then you have an option to use the Node-powered Foundation CLI to get your Foundation project started. To install the Foundation CLI just use this command to do so:

`$ npm install --global foundation-cli`

After you install the Foundation CLI then use it with this command to create your own Foundation project:

`$ foundation new`

When using the command, select "Foundation for Sites" then pick either the Basic or ZURB template to get your project started.

Outside of using a package installer, you also have the option to add both the CSS and JS through a link or a script tag inside your HTML.

For **CSS**:

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.0/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">`

For **JS**:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/js/foundation.min.js" integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o=" crossorigin="anonymous"></script>`

* **Note:** For my sample, I also needed to install modernizr and jquery packages to get the JS to load and work properly. You may look at my Codepen sample to get these other links if you need to.

With all the installation out of the way, I can finally move on to create my Foundation sample.

#### *Banner*

As per usual, I had to start with the biggest part of the sample. Or, at least the biggest visually, but by far the smallest in HTML code. This would be the Hero Banner. All of the elements for my banner needed be contained with in a single div. This same div only needed one major class as well as two modifier classes. The major class is the **callout**, which is what would create the Hero Banner of my sample. The two modifier classes I used for this **callout** were **primary** and **large**. **Primary** is used to apply a blue color to the banner while **large** is simply used to make it large.

Inside of this **callout** div, I then simply needed to add my h1 header as well as my subtext. I didn't even need to add any classes to my h1, as Foundation provided a default styling to the header that I rather enjoyed. However, I wanted to see what modifier classes they had as a way to explore other ways of making a header. Luckily, they have their own header classes, so I used their **h5** class on a p tag to create my subtext.

And, just like that, my hero banner was made. With a wopping four classes and 4 major lines of code, I had a large and blue banner smack dab at the top of the page with some large and imposing text to make it stand out even more.

#### *Three Cards*

My main landing page can't just have a banner. Even if it is large and imposing, I need some content to back it up. So, the obvious next step was to create 3 cards to provide some extra info and a button that would link to what could be other parts of my imaginary website.

My first step was to see if Foundation had any kind of grid system to make displaying these three cards an easy process. Luckily, Foundation does indeed provide a grid system. So, I began with a single div that had the **grid-x** and **grid-padding-x** classes applied to it. **Grid-x** simply created a grid section horizontally across the page. Since I only need 3 cards to go evenly across the screen, this was all I needed. To create some gutters between the cards, I used the **grid-padding-x** class to apply them to my grid.

Now, I have a grid, but there isn't anything in it. To fix this, I added in 3 new divs inside of my grid. To make these divs fit evenly inside of the grid each one needed two classes, those being **cell** and **small-4**. **Cell** is the class that defines a certain, well, cell inside the grid. **Small-4** is meant to define the width of the cell inside the grid. The 4 part of the class is a the total number of cells inside the row of the grid. Each row is a total of 12 cells, so simple math equates to every cell being a total of 4 cells.

With each cell made, I can now add the cards inside of each individual cell. In the first cell, I added another div with the **card** class. Inside the **card** div, I simply needed my **card-section** that would hold my card header, subtext, and button. A h4 was added as well as a p HTML element and an a tag element. The only element that needed a class was the a tag, which was the **button** class. Copy and paste this entire **card** div inside the other **cell** divs and my cards were made. The final result was my three cards separated evenly and even adjusted with the width of the page.

#### *Collapsible Navbar*

For the last part of my landing page, I now needed a responsive navbar that would collapse via a hamburger menu into a simple hamburger icon when shrinking the size of the page. To begin, I needed to start with the div that would hold my navbar menu. I, of course, needed to save the actual responsive button part of the menu for last just so the navbar menu itself would initialize first.

So, I added a new div at the top of the page. This div needed a single class, that class being **top-bar**, as well as an id. In my case, I gave the div an id of *navbarMenu*. Keep the id of this div in mind, as it would be the id you will plug into other attributes for the actual dropdown button itself.

Now to work on the actual navbar menu itself. I added another div inside the **top-bar** that included a class of **top-bar-left**. This class would keep the navbar menu on the left side of the screen. Inside this div, I then added my unordered list with a couple class, those being **dropdown**, **menu**, **vertical**, and **medium-horizontal**. One final attribute I needed to add to this ul tag was the *data-dropdown-menu*. This attribute would mark this ul as the element to be used for the dropdown action of my reactive navbar. Finally, I added my four list items inside the unordered list, all had an a tag element on the inside of the list item element that would hold the text of each navbar menu item.

With my actual navbar menu created, I then needed to work on the brand and button that would show up when shrinking down the page. I added a new div empty div at the top of the html code. This div would hold nothing except for one button and a single div. The div would be my Brand Name while the button would be the hamburger icon button to drop my navbar menu when the screen is shrunk down enough. The div needed the **title-bar** class, while the button needed the **menu-icon** class and the Brand Name div needed the **title-bar-title** class.

Now, contrary to other responsive nav menus from other frameworks, this responsive nav only needed a grand total of four attributes. Two for the **title-bar** div and two for the button. For the **title-bar**, I added these two attributes:

* data-responsive-toggle = "navbarMenu"
* data-hide-for = "medium"

The button needed these two attributes:

* type = "button"
* data-toggle = "navbarMenu"

With my attributes and two divs main divs created, all I need was to add three JS packages to my project. I added the newest modernizr and jquery packages before adding Foundation's own JS files.

Put it all together, and I finally had my own responsive navbar. The title bar would only appear when the screen size was a mobile size and that same title bar would hold a hamburger icon that would drop the navbar menu when clicked/tapped on and close when done again.

### __Conclusions__

Now, I must say that I was surprised with how useful Foundation itself was as a CSS framework. The grid system is very simple and easy to understand, and the amount of HTML code for the responsive nav menu was by far the smallest amount I've ever typed up. Foundation has a very nice default style that makes everything look professional and clean. The modifier classes are also extremely useful and make adding space between elements a breeze. I never really ran into a single moment where the HTML didn't make sense and I was lost on what classes to use for what I needed in an element. However, I will say that Foundation definitely doesn't make Javascript very easy in the end and it doesn't exactly have ALL the perfect defaults.

As stated, I have next to no problems at all with the classes and modifiers that Foundation provides. Each one mingles well together and is very intuitive for making CSS as easy as it can ever be. But this feeling completely changes when taking a look at the Javascript side of Foundation. The one downfall of the JS it provides is that it requires a backend to be ran off of JQuery in the first place. This means that, if you want the JS to back up the more involved responsive elements, then you'll have to build your entire project around JQuery first before you can even think about including Foundation's entire JS side of its framework. It's a real shame, because the JS is very easy to include past that point, and is even modifieable to match any need that you have. Only one line is needed to get every default in the JS, but it is pointless if you are either not comfortable with JQuery or don't have a JQuery project altogether.

To extend it even further, I needed even more than JQuery in my Codepen sample. I struggled for a whole two hours trying to figure out what I needed before coming to the solution of including modernizr as well. This holds back Foundation so much from being an amazing framework, as it makes it rather limited to who is willing to use it as it can really be applied to only one kind of project if you need the JS with it. But, if you don't need the JS, then you're in good hands. Foundation does provide the perfect amount of CSS to make your prototype a professional project in no time and is even customizable to boot, which makes up for the lack of rather desaturated default coloring it does provide.

One final minor complaint is that the docs for Foundation can be a little hard to navigate through. Every page has some video that goes with it, but not every page has all the necessary information to make the elements your working with actually work. This was mainly for the responsive navbar, as I didn't know until I had built the HTML that I needed JQuery with the Foundation JS to make it work.

With all of that said, I will give my final rating of Foundation as a whole.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 4 | 5 | 5 | 4 | 4 |

> ### **Final Rating** 4.2/5