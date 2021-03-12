# Tachyons

[View Tachyons Here](http://tachyons.io/)

## Document History

| Date | Description |
| - | - |
| 3/11/2021 | Initial Creation of Document |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Built for designing. Tachyons gives itself away immediately with that phrase on the first look of its front page. With Tachyons, you can supposedly:

> "Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible."

Tachyons certainly sings its own high praises. Its principles are also stated very clearly, saying that Tachyons principles are for it to be responsive, readable, modular, accessible, performant, and reusable. However, with its own praise in place, Tachyons actually saves a lot of its testimony at the bottom of its own front page. Instead, it just dives right into what it can offer to the user. I, for one, can appreciate this approach. It shows that a framework has confidence, but also some modesty. This earns some of my respect for Tachyons, but this is only the tip of the iceberg after all.

What all can Tachyons offer for me in this endeavor? Well, let's find out, shall we?

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

Tachyons has a complete open source library of components that you can freely use for your project. Each one shows a proper example with the exact code you would need to make that component. You copy it, paste it, and modify it to fill your every need! If you are worried about size though, then you don't need to worry at all. Tachyons' entire library comes in at a surprising 14kb when minified and gzipped. If that is still too big for you, then you can still strip out what you don't need to make that impressive size even smaller.

Now, it's important for a CSS framework to be well documented. I've experienced too many framework's that were solid, but made me struggle due to navigating through the framework just trying to learn how each component or element worked. Tachyons states directly on the front page that:

> "Each module is **carefully** documented. From stats about the size of the module, to how each css class will render on the screen."

Tachyons only gives away two parts of its documentation here, but I'm rather intrigued to judge the documentation for this framework to see just how *carefully* documented it actually is.

Most impressively, Tachyons has multiple ways you can use it. It isn't a simple one trick pony, no. If you don't like the existing class names, then you can try Tachyons more [verbose version](https://github.com/tachyons-css/tachyons-verbose). If you want to use Sass instead of Postcss, then Tachyons has another [repo](https://github.com/tachyons-css/tachyons-sass) just for that use as well. Impressively, Tachyons even has a [react-native boilerplate](https://github.com/tachyons-css/react-native-style-tachyons) that you can utilize as well. The versatility of Tachyons is among the highest I've seen in any framework. It doesn't cover all grounds, but it does its best to cover every single bit of it that it indeed can.

Beyond its flexibility with implementation, Tachyons itself is flexible with your own CSS. The cascade has nothing that can override a class's effects, but the majority of Tachyons selectors have a specificity of 10. Tachyons will never override your existing styles, so you have the ultimate freedom to just lay it on top of your existing css, or even another framework in general.

And, finally, also most importantly, Tachyons is built mobile-first. This is like some of the bigger frameworks, like Bootstrap or Bulma. Being built mobile-first puts a special focus in the framework makes it take away as much mobile reformatting as it can just for you. 

To put it simply, Tachyons seems to have everything you could ever want or need from a CSS framework. This framework overall comes off as very well designed and made to fit into your project with the best of ease.

However, there is one question that remains. How does Tachyons work? Well, it is my job to dive in further to the documentation of Tachyons to see everything that it can offer for me to use.

### __Samples__

As per the usual, I made my sample entirely on Codepen. So, if you'd like to follow along or view my sample, then please click [here](https://codepen.io/Vanilla-Ford/pen/PobXqwW).

#### *Installation*

Every framework has to start somewhere. That somewhere is the installation process! As enthusiastic as you may be, please do contain yourself. After all, installing a framework for your project is complex and crucial to the success of your project!

Joking aside, Tachyons does have a nice synopsis of the ways you can install it for use in your project. The first was is through a simple link element. I'll provide the element below in case you need to copy this element for your own project:

**CSS Link Element:**

> `<link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>`

Tachyons also has an option to install it through the use of npm. This information is provided with this nice little code snippet that you can easily plug into your own console:

> `$ npm install tachyons@4.12.0`

One final option that you do have to include Tachyons for your project is to just grab all the source files and build+develop locally. The git commands to do this will be put down below:

> `git clone git@github.com:tachyons-css/tachyons.git`
`cd tachyons`
`rm -rf .git && git init`
`npm install && npm start`

If you do want to take a look for yourself on installing Tachyons then please click this [link](http://tachyons.io/#getting-started) to get started with Tachyons yourself.

With the proper link to Tachyons in place, I can now begin making my own banner through the use of Tachyons.

#### *Banner*

Taking my first dive into Tachyons, I began to draw to a conclusion that I suspected when reading more about Tachyons. Much like Tailwind, Tachyons is also a utility-class framework. Usually, this would make my job of building components through the use of Tachyons a bit of a trivial one. However, much like I stated earlier, Tachyons has a series of pre-built [Components](http://tachyons.io/components/) for me to choose from. Even more so, Tachyons provides a set of [banners](http://tachyons.io/components/#banners) for me to choose from.

I wanted a simple Hero banner on my page to put down my special call-to-action. Any simple landing page usually requires this kind of element to grip the user's eye. So, I took to Tachyons' [basic](http://tachyons.io/components/banners/basic/index.html) banner, which provided the code to make the exact green banner that they showed. This banner wasn't perfect, but was the perfect base for me to modify using Tachyons' other utility classes.

So, I began by copying their basic banner and pasting it into my HTML. I first changed the *article* into a *div* element instead. Then I updated the classes of this div to only have the **ph3**, **ph5-ns**, **pv4**, **bg-blue**, **white**, and **sans-serif**. Both of the **ph** classes added horizontal padding to my banner, with the **-ns** class adding a media query for my **ph5** class. The **pv4** class added vertical padding to my banner. For the background of my banner, I added **bg-blue** to make the background color of my banner a nice default blue that Tachyons provides in its extensive color palette. **White** simply makes the color of my banner white, giving the text inside the element a pure white color. Finally, **sans-serif** simply changed the font family of this element to a sans-serif font.

For the content of my banner, I only needed an *h1* element for my title and an *h2* element for my banner text. I applied the **fw6**, **f1**, **lh-title**, **mt0**, and **mb0** classes. The **fw** class changed the font weight of my h1 title while the **f1** class changed the font size to Tachyons third largest font size. **Lh-title** simply applies a specific leading to my h1 title. The final two classes, **mt** and **mb** specifically, simply change the top and bottom margins of my title. In my case, I made the margins zero.

Beyond my banner title, I then needed to add the **normal**, **f4**, **lh-title**, **mt0**, and **mb3** classes to my h2 banner text element. **Normal** simply changes the font weight of my h2 element to normal while **f4** changes the font size to a modest one. **Lh-title**, **mt**, and **mb** do the same things to this element as to my banner title element.

Thus, my banner is now complete with the last class put in place. But a banner alone doesn't make a landing page. Up next for me to make would be my three cards that would be arranged by Tachyons' responsive grid system.

#### *Three Cards*

To begin, I needed to go to Tachyons' [basic grid](http://tachyons.io/docs/layout/grid/) section of their documentation. While Tachyons does have many different ways to utilize their mobile-responsive grid system, I was rather fond of the *"Three Columns - Collapse to Single"* example, which would make a perfect fit for my three cards on the page. So, I took the code they provided for this example and simply modified the contents inside the three columns to fit their [basic text card](http://tachyons.io/components/cards/basic-text-card/index.html) component.

I changed nothing in the actual grid code itself, so I will mainly go over the cards I made to fit inside my three columns of this grid. To begin, I copied over their basic text card component and added my own changes to stylize the card to my own liking. For the *article* element, I only got rid of the **ba** class and added the **shadow-5** and **sans-serif** classes. The **shadow-5** class simply adds one of the *shadow* elements that Tachyons provides to give the card a shadow that showed on the bottom and right edges of the card.

For the content of my card, I modified the h1 element by only changing the **bg-near-black** class to the **bg-blue** class. The text that is inside the *div* element was kept the same, but I did add one of Tachyons' [basic buttons](http://tachyons.io/components/buttons/basic/index.html). I started with their *dark-blue* button, but changed the background to the regular **bg-blue** and added the **br3** class to give the button a border radius.

After giving every part of the card the proper text I wanted, I then copied the card, pasted it into the other two columns, and modified the contents inside the card to make them all different.

With that, my three cards are now put into place and fit into one nice column when the page is shrunk down to a very small width size. But I needed on last element to complete my landing page. That one element is a mobile-responsive collapsible navbar.

#### *Collapsible Navbar*

Tachyons has had a good track record thus far of giving me every component I've needed for this page. So, I went into this part of my sample hoping that Tachyons could be the gift that keeps giving. Luckily, I easily found the many [nav](http://tachyons.io/components/#nav) components that Tachyons provides for free use. However, I couldn't exactly decide which of their navs to use. So, instead of choosing one, I simply combined elements from their [inline collapse nav](http://tachyons.io/components/nav/logo-links-inline-collapse/index.html) and the [title link list](http://tachyons.io/components/nav/title-link-list/index.html).

I simply took the code from the inline collapse nav and replaced the logo of that nav with the Site Name *a* tag element from the title link list. This nav I had now looked fine, but I needed to add a few things to make it collapsible and clickable. 

I first wanted to make the text of this navbar consistent with the text on the rest of the page, so I added the **sans-serif** class to both the Brand Name and the list of links that was contained in a separate *div* inside my *nav* element. Afer this little change, I needed to see if Tachyons gave me any way to make this nav collapsible on itself.

Now, the inline collapse nav does technically work as a collapsible nav, but it doesn't work the way I've done for all my samples. The way I wanted to make this collapsing work was through the use of a clickable hamburger icon that would show up on a mobile screen while hiding the full nav list. Sadly, Tachyons does not provide this kind of collapsible nav, so I had to improvise and make my own collapsible element instead. This wasn't an issue though, as I had plenty of examples of my own collapsing nav menu that could be implemented to this sample.

So, I imported Font Awesome and used their hamburger icon once again. This time, I put the *span* element below my brand name and added my own css to line up this element on the right end of the navbar. I then added a display of none to this icon so it wouldn't show by default. Next, I needed to figure out what width I needed to modify the displays of my icon and nav menu. To do this, I debugged my sample and shrunk the size of the page to see that the standard media query of the inline nav was set to 960 pixels.

After getting the pixels figured out, I then added a media query that would change the display of my hamburger icon to block and the display of my nav menu to none when the page reached a maximum width of 960 pixels. This made the nav that Tachyons provided disappear while showing my hamburger icon that Font Awesome provided. I went through the use of an ID for the main nav menu instead of a class to achieve this.

For my mobile nav menu, I simply copied over my unordered list I used in previous samples and modified the classes and ID to match this sample. While all of the CSS I added myself was in place, I was still able to use Tachyons' **sans-serif** class to change the font family of my mobile nav menu items. All I needed was a simple **active** class that contained a display of block and some JS to toggle this class on my unordered list element, and my collapsible nav was now complete.

This completes my entire sample, but how did Tachyons do? How do I rate this framework from the experience and expectations I've had with other frameworks?

### __Conclusions__

I want to start by making a very obvious comparison to Tailwind CSS with Tachyons. From a first glance, I couldn't tell that Tachyons was mainly a utility-first kind of framework. This gave me some issues at first, as every element has a lot of classes added to them, making it hard to keep track of what class was doing what to my element. Tailwind CSS did this same thing to me and it ended up making the html feel bloated with many different classes while also making it hard to figure out how to use these classes to make a proper component, like a card or a banner. However, while I still have the same complaints about the elements being bloated with too many classes, Tachyons has one thing going for it that makes it better than Tailwind as a whole.

Tachyons has great documentation to begin with, but it also has a very strong set of default components that are built for you to use freely. While Tailwind also has default components, they are also locked behind a 200 dollar paywall, making it very frustrating to find a proper example of a component being build with the framework. Tachyons doesn't have a paywall. Instead, every component that you could think of is included with the very docs of this framework. It turned what I thought would be a six hour long project into one that took only two hours instead. Being able to simply copy and paste a default component and just modify it with those utility classes is much more efficient than having to spend an extra hour looking up an example of what somebody else did to make ONE component.

Tachyons in general feels like it offers a lot more as a utility-first class framework. It is very lightweight and demands nearly nothing from you. Tachyons is incredibly easy to install, easy to use, and simply allows you all the creative freedom you could want with using a framework. While it does have the drawback you needing a ton of classes to make a single component, it does make up for it by giving you the option to plug this framework in with your own css or even to other frameworks. I've seen examples of people using Tachyons on top of Bootstrap with little to no obstacles in the way.

So, in summary, Tachyons is a utility-first framework that supplies plenty of default components and utility classes to be a very effective toolkit that you can use by itself, with your own CSS, or with other frameworks in general. To give a better visual of how I feel about this framework, I will leave it all to the numbers from my rating of Tachyons as a CSS framework.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 4 | 5 | 5 | 4 | 4 | 5 |

> ### **Final Rating** 4.5/5