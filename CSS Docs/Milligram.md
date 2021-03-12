# Milligram

[View Milligram Here](https://milligram.io/)

## Document History

| Date | Description |
| - | - |
| 3/4/2021 | Initial Creation of Document |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Milligram is a minimalist CSS framework, much like Pure. Now, a minimalist framework sets itself out to be a framework that doesn't provide an overzealous amount of components or classes in an attempt to save on space and production time. While both of those features of a minimalist framework are fine, it can also lead to a framework that doesn't really provide too much for the developer to use for their own website and simply doesn't feel enough like an actual CSS framework. Either way, I can't find out enough about Milligram with just the knowledge that it is a minimalist framework, so let's dive into the details of Milligram and what it has to offer.

### __Framework Details__

Being a minimalist CSS framework, it comes to no surprise that Milligram has a 2kb gzipped download size. This framework is strictly meant, and I quote, to be a framework that:

> "provides a minimal setup of styles for a fast and clean starting point."

Milligram is specifically designed to provide better performance and higher productivity. Essentially, this framework wants to provide a solid starting point for you to begin designing your website to your own wildest dreams.

This is about all I can provide in terms of details about Milligram. Such is the nature of being a minimalist framework.

With that said, I'll simply move on to the sample I made using Milligram on Codepen.

### __Samples__

As with all of my CSS framework documentation, you are more than free to click this [link](https://codepen.io/Vanilla-Ford/pen/poNZwEr) to view my sample.

#### *Installation*

To begin, I need to know exactly how I can install Milligram to be used for my sample.

When taking a look at the [getting started](https://milligram.io/#getting-started) section of Milligram's documentation, I can immediately see how I can install Milligram using NPM, Bower, and Yarn. I'll provide the commands that Milligram shows on their documentation that you can freely use however you need or like to:

NPM Installation:

> `npm install milligram`

Bower Installation:

> `bower install milligram`

Yarn Installation:

> `yarn add milligram`

If a package manager isn't your style then you are still more than free to use a CDN link, which I shall provide below:

> `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css">`

That's enough about the installation for Milligram though, so I think it is time for me to make my hero banner.

#### *Banner*

Now, when working with other minimalist frameworks I found that they generally don't provide their own hero banner. For Milligram, I wasn't surprised to see that I once again had to make my own banner.

So, I simply copied another banner I made in another project and modified the css while applying at least some things that Milligram provides. Sadly, I also found out that Milligram does not provide its own CSS reset by default, so I had to take away the margin in the body of the page to make my components flow properly.

All I needed for my banner was some padding, a background color, and some white text. The banner content itself was an h1 for the title and an h5 for the banner text. Luckily, Milligram at least provides default font sizes for headers, so I didn't need to mess with the font sizes myself. I simply added some margins to the head and changed the font weight of my banner text.

Thus, my banner is now complete. The next step is to make my three cards to provide some extra content to the main body of the page.

#### *Three Cards*

Much like the banner, Milligram also didn't provide much for me to use to create a card. Luckily, Milligram at least has a simple grid system to help orient the cards correctly across the page.

To begin, I added a new div with the **row** class attached to it. This main div will be my single "row" that I need to hold my three "columns" that would each have a single card. I then added three new divs inside my **row**, each with the **column** class attached to them. To test this grid, I threw in some sample text in each of the columns and shrunk the size of the page. My grid was in place and functioned wonderfully.

For my cards, I simply copied over some of my own cards that I made in another project and modified the css to the standards I needed for these cards. This involved adding a margin to the card container itself, then padding to the card content, and adjusting the line height and margins to the title and text of each card. I made my card title an h3 element and left my text as a simple paragraph element.

The one new thing that Milligram did provide for me was their button. I simply add a new a tag element with the class **button** attached to it. This gave me a nice purple button at the bottom of my card.

Once I made my card look how I wanted it to, I simply copied and adjusted the content of the cards twice. With just some of my own elbow grease, I now had three cards under my banner. This isn't enough though, as a navbar is always a key component to have in your webpage.

#### *Collapsible Navbar*

Now, this is where I was truly surprised by Milligram, and not in a good way. While other minimalist frameworks at least provide some navbar elements for you to use, Milligram gave me almost nothing to make this navbar. In the end, I only used Milligram's *list* element, a mix of samples I have viewed online, and Fontawesome to create my navbar. In the end, my total amount of CSS virtually doubled when creating this navbar.

To begin, I added a new nav element to the top of the html. Inside this nav, I added a single a tag element that would function as my brand name. Under that brand name, I added a standard unordered list with my four menu elements. I made my actual navbar, the nav, use flex for its display before adding some padding. My brand name needed some margins, a different font size, and a bold font weight. I also adjusted the hover function to keep the same color text for the brand when hovering, which was a nice purple.

The unordered list in this nav will be my horizontal navbar menu that will display on a standard size computer screen. My list itself needed a margin adjustment while the list items each needed an inline display. The actual link elements inside of every list item needed a font size adjustment and a left margin. Finally, a new hover funtion for my horizontal nav elements simply needed an underline and to change to blue text.

This standard nav menu is fine, but I wanted to see about making it mobile responsive. This is another standard of my samples, so I couldn't leave my nav the way it was.

Taking inspiration from other frameworks I've worked with, I decided to take the approach of having a separate nav menu that would serve as my mobile dropdown nav menu. Luckily, Milligram at least provided a special list for me to use that made it a simple list with no decorations or anything attached.

Under my nav element, I added a new **dl** element and copied my list items over into this element. The only changes I needed to make to this list was give the **dl** element its own class and an id. All that I needed to do with my class for the **dl** was to make its display none. The id I gave this menu was simply *navMenu*.

I made sure to save adding the display none to this menu last just so I could make sure it looked fine to me. After making the list disappear, I needed to add my hamburger icon button that would trigger the display of this menu on mobile screens. For this icon, I took to Fontawesome and got their *bars* icon. I added a new span above the brand name inside the actual nav and pasted my icon inside this element. This span then had its own class added and an id of *navToggle*.

To fix the display of this icon, I adjusted the position, color, font size, margin, cursor, and the display of it. The positioning of this element would be the very right end of the navbar while the margins were used to center the icon. I changed the color to match the purple that the rest of the page used and gave it a *pointer* cursor. Finally, I added a display of none after fixing the icon to exactly how I wanted to.

Now, with my elements all set and ready, I needed to create a couple media queries and add a small amount of js to make this collapsible navbar function properly.

To begin, I created a new class in my css called **active**. The only thing this class has is a display of *block*. This class was not attached to any element yet, but it does need to exist. Next, I added a new media query checking for when the width of the screen shrunk to 1000 pixels. This media query changed my hamburger icon's display to block and my horizontal nav menu's display to none. I added a second media query that would be checking for when the screen goes above 1000 pixels. This media query changed my mobile nav menu's display to none.

Now, all the html and css is in place, so I needed to add my javascript to make my navbar come to life.

#### *JS*

For my JS, I started by getting both my mobile navbar and button by their IDs and setting them to their own variables. After doing so, I added a new click event listener to my hamburger icon button. This click event simply toggles the **active** class I made earlier for the mobile navbar.

I shrunk the size of the screen and clicked the button to see it all in action. And, just like that, I had a collapsible navbar that functions on mobile and computer sized screens.

### Conclusions

There isn't much I can say about Milligram honestly. The only way I can convey my thoughts of this framework is to compare it to Pure. Because, honestly, I felt that Pure does a little more than Milligram does, which surprises me.

First of all, Pure provides its own CSS reset by working off of Normalize in the first place. While it doesn't had too much to offer on its own, I can appreciate having that reset so I can freely create my elements without the extra hassle of messing with default element values. Milligram, however, requires you to import your own CSS reset or do the reset yourself. Due to this, I had to struggle with my sample by constantly reworking every margins, padding, and more of the page and elements on the page. To me, it isn't that hard to include your own CSS reset, since it really is just copy and paste. It would just be nice if Milligram provided it within the framework instead of forcing you to get the reset yourself. In the end, that isn't really too much, but would at least be a nice gesture.

Secondly, Pure at least provides elements for a navbar while Milligram doesn't. I can simply ask why? A navbar is an essential element that basically goes on every web page/website. It only makes sense to provide a quick and easy way to make a navbar instead of wasting an hour plus making it myself. I honestly spent more time making the navbar over making it mobile responsive, which says a lot for me.

My main complain about Pure is that it doesn't feel like it is helping me that much. Milligram has that same complaint but also feels like it does even less than Pure does. A small element here and there, like a button, is okay, but I simply am flabergasted that it can't even provide a navbar for a developer to use in their project.

I also can't really tell if Milligram is making my entire page mobile responsive either. While the grid is simple and does respond with the size of the page, it doesn't feel like it provided any help with my other elements. This means I can't directly say that Milligram is aiding me in terms of mobile responsivenss, so I can't accurately judge it in that aspect.

In the end, my sample at least works fine, but I felt like I was making my own scratch project that followed a color scheme of only purple and white. Milligram doesn't provide its own color palette either, but that is something I have come to expect out of a minimalist framework.

The best and most accurate way I can sum up my thoughts is to rate Milligram. Without further ado, here is how I rate Milligram as a CSS framework.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 1 | 1 | 3 | 1 | 2 |

> ### **Final Rating** 1.8/5