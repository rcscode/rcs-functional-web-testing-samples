# Semantic UI

[View Semantic UI Here](https://semantic-ui.com/)

## Document History

| Date | Description |
| - | - |
| 3/8/2021 | Initial creation of document |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

Semantic UI claims that it is a framework that:

> "...helps create beautiful, responsive layouts using human-friendly HTML."

The front page of this framework's website goes on to show their "Concise HTML" through an short example of how you can use their framework to create three buttons. You can also see a section that gives an example of their "Intuitive Javascript", where you can add and delete items from a dropdown list. It would be a little redundant for me to explain every little bit about what this framework claims of itself, but one thing is for sure. Semantic UI has confidence, and it reeks of from the starting page. But, why is this? Just what does Semantic UI have to offer?

### __Framework Details__

The "Concise HTML" that Semantic shows off is a set of classes that are built off of natural languages like noun/modifier relationships, word order, and plurality to make an attempt to link concepts intuitively. As an example, they show a div that holds three buttons. Every single element has the **ui** class, but each button has a simple **button** class. The div itself has **three** and **buttons** classes. Honestly, reading it in plain english can explain really well that this div is meant to be a container that holds *three buttons*. To me, that kind of language does make sense and is rather satisfying at the end of the day.

Semantic UI isn't just HTML and CSS though. In fact, Semantic claims to have "Intuitive Javascript" that uses simple phrases called behaviors that they use to trigger functionality. Semantic's example of this Javascript is 3 line piece of code that links to a dropdown menu. It simply uses the class of **dropdown** and sets the currently selected values of this dropdown to show up inside the initial dropdown element. You can even play with this element by clicking the dropdown, selecting elements in the dropdown, or even getting rid of elements that you have chose already. It looks simple enough and might help in a larger scale project that might utilize the aid of Semantic UI.

One major highlight of Semantic is the sheer amount of theming that comes with it. On the very front page of this framework's website, you can find a section with a simple online store set of buttons. But there is a dropdown menu right above this little section where you can test out some of the themes that Semantic seems to bring with it. It all changes right on the screen in real time with quite a few options to choose from. Semantic says that it comes equipped with an intuitive inheritance system and high level theming for ultimate design freedom. The way that Semantic puts it is like this:

> "Develop your UI once, then deploy with the same code everywhere."

While I never explored this feature of Semantic, you're more than free to click this [link](https://semantic-ui.com/usage/theming.html) to find some extra information about Semantic's theming feature.

Semantic UI really is impressive on the surface, but I have to use it in my own sample to see just how it does work.

### __Samples__

As with my other samples of CSS frameworks, I built my sample on Codepen. If you want to view this sample for yourself, then please click [here](https://codepen.io/Vanilla-Ford/pen/dyOgmZg?editors=1100).

Now, let's see how I can install Semantic UI for use in my sample.

#### *Installation*

To begin, I took a little dive into Semantic's [Getting Started](https://semantic-ui.com/introduction/getting-started.html) portion of the Semantic UI docs.

In this section of the docs, Semantic explains how the easiest way to install Semantic UI is to use Node.js. It begins to explain the ways you can install Node.js itself. If you need to install Node.js yourself, then check out their info on how to [install Node.js](https://semantic-ui.com/introduction/getting-started.html#install-nodejs) on your local machine.

Once you have Node.js in place, you then need to install gulp. Gulp provides command line tools that are used to build themed versions of the Semantic UI library with just the components you need. To install Gulp, simply run the command line below in your proper directory:

`$ npm install -g gulp`

After you have gulp installed for your project, you can then move on to install Semantic UI itself. They provide a [video](https://semantic-ui.com/introduction/getting-started.html#install-semantic-ui) that goes over how to do this, but they also provide a small snippet of code for this process. I'll put this install and run code down below:

> `npm install semantic-ui --save`
`cd semantic/`
`gulp build`

There is one final step in this installation process. That step is to link Semantic's CSS and JS files and also link to the latest jQuery inside your HTMl. These HTML code snippets will be provided below:

> `<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">`
`<script`
&nbsp;&nbsp;`src="https://code.jquery.com/jquery-3.1.1.min.js"`
&nbsp;&nbsp;`integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="`
&nbsp;&nbsp;`crossorigin="anonymous"></script>`
`<script src="semantic/dist/semantic.min.js"></script>`

If you would not like to use NPM to install Semantic, then the docs do provide some other libraries you can use to install Semantic. Simply click [here](https://semantic-ui.com/introduction/integrations.html) to view Semantic's "Integration" portion of their docs.

Libraries aren't for everybody or for every situation though. Luckily, Semantic does provide two CDN links you can copy and paste into your HTMl to use Semantic with it's own theming. I'll provide both CDN links below:

#### *Stylesheet Link*

> `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">`

#### *Javascript Link*

> `<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>`

If you do need the latest version of this framework, then please click [here](https://www.jsdelivr.com/package/npm/semantic-ui) to see the latest version of Semantic that jsdevlir provides.

With the installation process out of the way, I can now finally move on to create my banner element.

#### *The Banner*

I took a look further into Semantic UI's docs to see if I can find an element or component that I could use to make this banner. At first, I thought that I could use one of their [advertisement views](https://semantic-ui.com/views/advertisement.html) to achieve this. However, I then found that these elements only work as ads. Since I wasn't going to have any ads in my sample, this portion was useless to me.

Alas, I didn't find any other elements that could me out with this endeavor. Nothing in their docs seemed to be quite what I was looking for to build my banner. Luckily, they had at least one element that I was able to use to make an effective banner. This was their [container](https://semantic-ui.com/elements/container.html) element. The **container** didn't make a banner, but it would at least serve as a good base that would make my banner flexible with the width of the page.

I added a div with the **ui**, **fluid**, and **container** classes. **Ui** is a class that seems to go with most parent components and elements of this framework. I never really found out what it did, but it seems necessary to have it with this framework. The **container** class made this div an actual container, but the **fluid** class is what made this container more fluent and flexible with the page. Finally, I added one extra class, which was my own custom one, called **banner**.

I then added my h1 and h3 elements inside of this div and added my own custom classes to them. Creating my banner title and text while adding some padding and color to the div element itself. In a short amount of time, I had my own banner element in place that shrunk with the size of the page. However, it has one quirk I couldn't iron out, where it gets margins whenever I shrink the size of the page manually. Luckily, these margins don't show up when I change the screen size to default mobile sized ones.

With my banner in place, I can now move on to add three cards inside of Semantic's own grid system to the main body of the page.

#### *Three Cards*

To begin, I know I need a flexible grid system that can take away the work of needing to arrange the gutters and margins of these cards, as well as the flexibility of them. Luckily, Semantic does provide their own [grid](https://semantic-ui.com/collections/grid.html) collection that I can use to hold these cards.

Following Semantic's own examples, I added a new div with the **ui** and **grid** classes attached to it. Inside of my **grid**, I needed a single row that had three columns to hold my cards. So, I then added a new div inside my **grid**. This div needed the **three**, **column**, and **row** classes attached to it. **Three** to mark how many columns I wanted, **column** to specify the element I wanted a number of inside the element, and **row** to specify what this div itself was.

While my actual grid existed, I still needed to add my three columns inside of it that would hold my three individual cards. So, inside my **row**, I added three new divs. Each div only needed the **column** class to specifiy that the div was indeed a single column inside my **row**. To test my grid, I put some sample text inside my three columns. This test was a success. I now had three columns that could hold their own bits of content inside of them.

The final piece to this puzzle was to make three cards to fit inside my columns. Luckily, Semantic also supplies thier own [card](https://semantic-ui.com/views/card.html) view that I can use for my cards.

While Semantic does have a section describing how to make one section with multiple cards, I found that it wouldn't work out too well with their grid system. So I stuck with making one card and then copying it into the other two columns to get a good look at how their grid system works as well. Inside my first **column**, I added a new div with the **ui** and **card** classes attached to it. This div would be the card itself, holding the shadow and border of the card. Inside this first card, I added a new div with the **content** class attached to it. This final div would be the one that would hold my card title, text, and button.

I added an h2 element with the **header** class attached to it. This **header** would hold the title of my card. Below my header, I added a new paragraph element that had the **description** class attached to it. My **description** now holds my card text. Finally, I needed a button inside my card. So, below my **description**, I added a button with the **ui** and **button** classes to create my button.

To finish up this section, I copied my first card and modified the contents of it twice over in the other two columns of my grid. Now, there is only one last element that I need to add to this page. That element is my mobile collapsing navbar.

#### *Collapsible Navbar*

I'm afraid to say this, but Semantic doesn't seem to provide an effective way to make the navbar I want happen. I tried to use their [menu](https://semantic-ui.com/collections/menu.html) to make this navbar happen, but I couldn't find anything that Semantic could offer to make it happen with the menu elements that it had. This could be due to the limitations of my sample working in Codepen, the docs that Semantic provides don't have enough information about their Javascript to give me an idea of how to use their framework for this purpose, or they simply didn't have anything to build a very effective mobile-responsive navbar.

In the end, I had to copy the navbar I built from my [Milligram sample](https://codepen.io/Vanilla-Ford/pen/poNZwEr) and modify it with my own custom CSS to fit with my Semantic UI sample.

### __Conclusions__

So, after spending some time with Semantic, I have to say that I have...mixed thoughts about the framework. On one hand, it provides a lot of useful features with its variety of themes, html, and javascript to back it up for a larger project. On the other hand, it seems to be too much to handle on a smaller scale and doesn't exactly provide every element that other frameworks seem to do.

I definitely see the many uses that Semantic UI can provide for a very large scale project. If you have a project with 10 or more pages, then Semantic can make it very easy to create a simple and consistent UI without the hassle of having to import the same UI over and over to every single page and have to modify every individual element as well. The Javascript that is also provided with this framework does seem really useful and can help buff up the elements that Semantic UI provides. But I can't get over the lack of help that I was able to get with the navbar. That isn't the only complaint though.

While Semantic does provide their own classes to use for creating a card, I didn't exactly like the end result of these cards. They came out much smaller and more generic looking than I would have expected. I honestly felt the need to get rid of the default styling all together and make my own cards instead. The actual grid system doesn't have any margins by default either. My grid aligns the elements to the left side. Semantic does provide ways to get around this, but the centered class I added made one card hover directly below the other two instead. So, the options I had seemed to be ones that I would just have to deal with.

These little things are some complaints from me, but there is one major issue that I had with this framework. That is the reasoning behind I had to create my own navbar by default. When I added their menu elements to my code, I did still need to add my own css and js to try and make these elements. However, this involved needing to add margins and changing the display of these elements. To my surprise, I couldn't change these elements at all. In fact, I wasn't able to add any margins to any element that Semantic provided. It seemed that I was just locked into whatever Semantic gave me and I could only update items that didn't have a single Semantic class added to them. This was particularly frustrating for me, as I couldn't do anything to make the menus they gave me mobile responsive. And since I'm on a bit of a time crunch for these sample and docs, I had to resort to bringing in an entirely original navbar that I made myself, which also includes elements to make my navbar mobile responsive in the first place.

I can't put all these faults on Semantic alone though. Of course, my sample was being built on Codepen, which has some limitations itself and its own hiccups. In the end, Semantic UI feels like it is better saved for a large scale project that can take more advantage of its Javascript and themes.

To accurately give my final thoughts about this framework, all I can do is rate it based on my own scale of its features.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 4 | 4 | 3 | 5 | 3 |

> ### **Final Rating** 3.7/5