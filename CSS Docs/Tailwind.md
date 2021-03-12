# Tailwind CSS

[View Tailwind Here](https://tailwindcss.com/)

## Document History

| Date | Description |
| - | - |
| 2/23/2021 | Initial Creation of Document |
| 2/24/2021 | Finalized creation of document with new views found from the documentation of the framework |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Tailwind is both a new and a unique framework that I definitely didn't expect to work the way it does. With the few extra CSS frameworks under my belt, I had some expectations going into this framework. Those expectations, for the most part, were dashed with the different take Tailwind has towards being a CSS framework. It still provides its own utilities, tools, customizability, and even a dark mode, but it lacked some of the features that I have come to expect out of a CSS framework.Regardless, it does get CSS right, just in its own way.

### __Framework Details__

So, Tailwind markets itself as a utility-first framework that is, and I quote:

> "packed with classes like **flex, pt-4, text-center** and **rotate-90** that can be composed to build any design, directly in your markup."

Now, when Tailwind says that it is packed with classes, it doesn't lie. Looking at the docs, Tailwind is quite literally PACKED with an enormous amount of classes. You have classes for a grid, classes for padding, classes for margins, centering, typography, color, and more and simply more! In short, if it is a part of CSS then Tailwind has a class for it. And with this sheer amount of classes, you can really fit together many pieces to one giant jigsaw puzzle to come to your masterpiece.

Tailwind itself is a very low-level framework. It's marketing of providing only utility classes makes this trait shine through. Every class name is simple and easy to understand and can be applied to literally any HTML element you can think of. It only matters of how you use these classes to fully customize your markup to your own liking.

When launching to production, Tailwind automatically removes all unused CSS, which shrinks the final product to the smallest it can possibly be. This is an extremely useful system, as it allows your website to keep a lot of its perfected and professional look without sacrificing all the speed that is lost from having so many unused classes that are contained in the framework itself. Tailwind says itself that:

> "...most Tailwind projects ship with less than **10kb** of CSS to the client."

To sprinkle in something sweet, Tailwind is mobile-responsive as well, which is something to expect out of a CSS framework at this point. Tailwind seeks to take away every complex media query out of your CSS as a whole. All you need to do to get this feature is to simply throw a screen size variable in front of any utility class. In my sample, I will be providing some examples of this screen size use.

Tailwind has many features that are geared towards its utility-classes. So many that I could be typing this document all day about these features. If you want to learn more about these features, then I advise you to click [here](https://tailwindcss.com/) or the link at the top of the doc to view Tailwind for yourself. 

In the meantime, I will go over my process of building a simple landing page using Tailwind CSS.

### __Samples__

If you would like to view my sample project of using Tailwind, then feel more than free to click [here](https://codepen.io/Vanilla-Ford/pen/qBqjxaX?editors=1100) to see the sample on Codepen.

As is my tradition for these samples, I set out to make a simple landing page that consisted of a hero banner, three cards formatted by a grid system, and a collapsible navbar that can be dropped down via a hamburger icon when shrunk down to a mobile screen. With the precendent set, allow me to first walk you through the ways you can install Tailwind in your project.

#### *Installation*

Now, Tailwind acknowledges that a developer might be using some other frameworks in the stack of their website. So, to help most users of Tailwind, they provided many guides for how you can install Tailwind to some of the most popular framework available. I recommend you click on this [link](https://tailwindcss.com/docs/installation#integration-guides) and view the appropraite framework you are working with.

Outside of other frameworks, Tailwind highly recommends that you install it to your project as a PostCSS plugin. I shall walk you through this process to save having to read the documentation more.

Firstly, you can use npm to install Tailwind to your project. If you would like to use npm, then simply use this command in the proper project directory for your project:

`$ npm install -D tailwindcss@latest autoprefixer@latest`

Now, some people might run into an error with your project running an older version of PostCSS. An example error that you will most likely see is this one here:

> `Error: PostCSS plugin tailwindcss requires PostCSS 8.`

Worry not! Tailwind also provides some helpful info to get around this issue. I advise you to click this [link](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build) to ge some help for this issue.

Outside of npm, you can also install Tailwind as a PostCSS plugin through the use of this exact code:

> // postcss.config.js
> module.exports = {
> &nbsp;&nbsp;plugins: {
> &nbsp;&nbsp;&nbsp;&nbsp;tailwindcss: {},
> &nbsp;&nbsp;&nbsp;&nbsp;autoprefixer: {},
> &nbsp;&nbsp;}
> }

If you are not comfortable with using either of these methods, then don't fret! You can also include Tailwind's default css layout through the use of a CDN.

* **Note:** If you do decide to use the CDN, you must keep in mind that you will NOT be able to customize Tailwind's default theme, use any directives, enable additional variants, install third-party plugins, and tree-shake unused styles. It is advised that you install Tailwind as a PostCSS plugin to get the most out of Tailwind CSS.

**CDN** Reference:

`<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css" rel="stylesheet">`

Now, I've gone over the basics of installing Tailwind. If you want to explore more of the installation, then I advise you to view Tailwind's [installation docs](https://tailwindcss.com/docs/installation).

With that out of the way, lets move on to how I used Tailwind to make my the hero banner of my sample.

#### *Banner*

As per usual, the easiest part to build utilizing any framework is the banner. So, it is of no surprise that I ended up using 6 lines of code. No different from any other framework really.

To begin, I added a main container div to my html. This div contained two simple classes. **Py-8** is the class I used to add padding on the y axis of the container and **bg-blue-400** to add a light blue background to the div. I then added another div inside this main div that would contain both the banner header and the subtext of the header. This div had the classes of **container**, **px-3**, and **mx-auto**. **Container** is used to set the width of the element to a breakpoint. These breakpoints can be the likes of sm, md, lg, xl, and 2xl. The default for container sets the width to 100%, which is what I want for this container. **Px-3** is used to set the padding for this container on the x axis while **mx-auto** sets the margins on the x axis of this container to auto.

Finally, I added an h2 and my p tag elements to the inside of the **container** div. The h2 element had the classes of **text-5xl**, **font-bold**, **mb-2**, and **text-white**. Both of the text classes are affecting the text size and color, while **font-bold** should be explaining itself. **Mb-2**, on the other hand, is giving the element a bottom margin to give it space between the header and the subtext. I gave the p tag the **text-xl**, **mb-4**, and **text-white**. At this point, I shouldn't have to explain what these classes are doing.

But, with all the classes and elements added, I now had a nice light blue banner at the top of the page!

#### *Three Cards*

Of course, you can't have a proper landing page without some cards. So, this was the perfect chance to try out Tailwind's own grid system and see how I can use their utility classes to build a card. Without further ado, let's get started.

To begin, I started with one div that would serve as my main grid element to hold my one grid row and three grid columns. This main div had the classes **grid**, **grid-flow-col**, **gap-4**, **px-4**, and **py-4**. The **grid** class sets up this div as a regular grid element, but the **grid-flow-col** is what sets up this grid as strictly having columns. The **gap** class is simply creating the gutters between every element I would be adding inside this grid.

With the grid in place, I can then make my first card. To begin, I added a new div inside of the grid. This div was attached by the **max-w-sm**, **rounded**, **overflow-hidden**, and **shadow-lg**. **Max-w-sm** is simply giving this card a set maximum width. **Rounded** is rounding the corners and **shadow-lg** is giving the element a soft shadow around the border. This first div is simply the main container for the card. Inside this div I will need another to contain all the content for my card.

So, I added another div inside my **rounded** container with only the **px-6** and **py-4** classes added to it. Inside this div, I simply added my two p elements and a single button element. I added **text-2xl** and **mb-2** to the top p element while I added **text-gray-700**, **text-base**, and **mb-3** to the second p element. For the button, I added the **bg-blue-500**, **hover:bg-blue-700**, **text-white**, **font-bold**, **py-2**, **px-4**, and **rounded** classes to it.

Many classes went into it, but I now had my first card fully made and looking good! To finalize it, I simply copy and pasted the full **rounded** div two more times to finally have my three cards in total.

#### *Collapsible Navbar*

To finish off my Tailwind sample, I now needed to create a collapsible navbar that would react with the width of this page. Now, I want to state that the number of lines for this navbar was actually less than some other samples I have made, but the sheer amount of extra elements, classes, and attributes I needed to make this happen was ***absurd***. So, do forgive me for needing to leave just a slight amount of information for building this navbar out for the sake of saving some time.

To begin, I added a new header at the top of my HTML. This entire header will contain every other element that would be going into my navbar. The classes I added to the header were **flex**, **flex-wrap**, **items-center**, **px-2**, and **py-2**. I decided to start with the brand name and the navbar menu itself, just so it could all be initialized and existing on the page before creating the dropdown menu.

For the brand name, all I needed was another div that would hold a single a tag element that would contain the Brand Name. The div had the **flex-1**, **flex**, **justify-between**, and **items-center** classes added to it, while the a tag had a single class of **text-lg**. And that's it, my brand name is now added to the top of the page.

Next up is the actual navbar menu itself. I added another div underneath the brand name, this time with the **hidden**, **lg:flex**, **lg:items-center**, **lg-w-auto**, and **w-full**. Most importantly, I gave this div an id in which it ended up being called *menu*. Inside this div, I added a simple nav element with no classes and an unordered list, or ul, with four list items inside the list. The unordered list had the **lg:flex**, **items-center**, **justify-between**, **text-base**, **text-gray-700**, **pt-4**, and **lg:pt-0** classes added to it. For every list item, I then needed to add the **px-3**, **block**, **border-b-2**, **border-transparent**, and **hover:text-indigo-400** classes. With that, I now had full navbar menu that is showing up on the other side of the navbar away from the brand name.

With the navbar now fully made, all I needed to do was add the simple hamburger menu icon and a little bit of css to make it function with the navbar menu itself. What is interesting though, is that I was able to accomplish this with a label and an invisible checkbox input. So, I went between the navbar menu and the brand name and added my label element with the **cursor-pointer**, **lg:hidden**, and **block** classes to it. The only other thing I needed to add to this label was a *for* that was equal to **menu-toggle**. The only thing that you need to know of the contents of this label was a very large svg that Tailwind happily provided in their docs.

Right after the label, I added the checkbox input. Only a class of **hidden** was added to it as well as a type of **checkbox** and and id of **menu-toggle**. And that is it for the checkbox really. It never appears, but does exist with the label that was added previously before to make the label clickable. But now, finally, I needed to add a little bit of CSS to bring this all together. And, for this, I will simply give you a code block of the entire CSS needed for this to work:

> #menu-toggle:checked + #menu {
> &nbsp;&nbsp;display: block;
> }

And, with that, I now have myself a working and responsive navbar that collapses into a hamburger menu on a mobile sized screen. Thus, my sample has been finally created and finalized! However, how does Tailwind stack up as a CSS framework when comparing to others I have seen?

### __Conclusions__

To start, Tailwind is a very unique framework. It's utility-first focused classes is definitely a completely different view I have seen compared to other CSS frameworks. And, while having so many classes to be used for a specific reason, such as padding or margins, is nice, it is rather annoying to have to use so many classes all at once to make a single element look good. Compared to other frameworks, which require one or two classes to get your HTML to where you want, Tailwind provides many "helper" classes and **only** those helper classes are available.

Tailwind has a theory that, and I quote:

> **"Best practices" don't actually work**

This theory is why there are all of these utility-first classes throughout the entirety of its docs. And, that is perfectly fine. In fact, I find some of these classes very helpful, such as the padding and margin classes. But, there are SO many classes that are thrown into the mix. On average, I was applying a good four to even seven classes *per element*. This bloated the entire HTML code and honestly exhausted me in the process of building every part of every element in the page. What every other CSS framework I have worked with thus far has had is a set of classes to create a dedicated card, or a set of classes to make a hero banner. However, this time around, I was left to the tools Tailwind provided.

An argument could be made that Tailwind would have samples to back up the sheer amount of classes that come with it. And, yes, they show some samples for some individual parts of their framework, but that is simply it. They have a components section that has many examples, but a good 95 percent of the samples are locked behind a 200 dollar paywall. Now, for a large company that needs a framework, this really isn't an issue. However, for a casual build that is a simple landing page, I had to jump through multiple hoops trying to find a simple example of how to create certain elements using the gigantic amount of utility based classes.

I will state it now that I do not personally give myself the credit for the navbar. The way I went via a checkbox and a label to make the button happen was through a video I found online. This video was also using an older version of Tailwind, so that could be why the navbar felt super bloated with too many classes to back it up. But, I digress, the simple notion that a simple sample of a banner or a set of cards is locked behind a paywall is rather annoying to deal with and personally doesn't feel too fair in my eyes. A company needs to make money, yes, but a premium should be for some extra features or some early build releases, not a simple sample of how to make a banner.

I have to give Tailwind some praise though, and I do have some for it. That praise is that Tailwind does have a simple and easy-to-use grid system that made aligning those cards a breeze. And, while I say that the framework is super bloated with classes, I will still say that the classes have their own uses and are still important. But, in the end, I would just like a little bit of extra help when trying to make a card, rather than having to apply 8 different classes to make a simple card. In the end, Tailwind's philosophy of using only utility-first classes can make using it a chore and exhausting to use.

With the final thoughts said, I shall give my final rating of Tailwind CSS from my experience of using it to make my sample.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 3 | 4 | 5 | 4 | 3 |

> ### **Final Rating** 3.7/5