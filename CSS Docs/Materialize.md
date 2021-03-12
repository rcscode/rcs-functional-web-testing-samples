# Materialize

[View Materialize Here](https://materializecss.com/)

## Document History

| Date | Description |
| - | - |
| 3/1/2021 | Initial Creation of Document |

## Document Author

* Austin Blandford - ablandford2399@gmail.com / ABlandford@student.neumont.edu

### __Introduction__

On September 9, 2018, Materialize 1.0.0 was released to our modern world. With Material Design being designed and created by Google and four students working at the helm, Materialize was made based on Material Design at an attempt to suffice as a well designed and well working css framework that claims to speed up development, is user experience focused, and is easy to work with. 

Materialize is so confident of its abilities that the website all about Materialize has a [showcase](https://materializecss.com/showcase.html) of websites that use its own framework. When taking a look at these other websites, I couldn't be at least a little bit impressed by how well designed some of them looked. It is always one thing to see an end product of what a framework can do though, so let's see what this Materialize is really all about.

### __Framework Details__

On the forefront, you can see that Materialize does provide every bit of its own theme from the moment you install it on your project. However, Materialize does state that you can easily drop in your own styles by changing up the Sass that comes with it. If that isn't your cup of tea then don't fret because you can easily drop in one of Materialize's themes, only for a decently small price. In short, Materialize has a lot of forms of customizability for you to take advantage of and create your very own website however you would like.

Materialize doesn't just give you multiple forms of customizing your site. In fact, it also supplies a modest amount of its own css, components, helper classes, grids, transitions, and more. Materialize certainly does bring a more options to the table that I expected and I haven't even talked about their JS yet.

On top of multiple components and classes for your html, Materialize also provides quite a bit of its own javascript to back up their own html. When looking over their docs, it seems you can run their javascript with basic javascript or with jQuery, allowing you the option to pick and choose what form of JS you are working with in your own project.

To put the cherry on top of this wonderful cake, Materialize is also mobile-responsive. With components and their JS built to make your website able to fit easily onto a mobile-screen, Materialize simply has all the makings of a well-designed and formatted framework.

With all that said, allow me to take a deeper dive into Materialize to see what it is really made of.

### __Samples__

To fully explore Materialize, I needed to make my own sample using the framework. If you want to view this sample, then please follow [this link](https://codepen.io/Vanilla-Ford/pen/vYyjXmR) to do so.

#### *Installation*

The first step for any framework is to able to install it. Luckily, Materialize has a great variety of ways that you can install it to your project. You are more than free to view their [docs](https://materializecss.com/getting-started.html) if you would like, but I'll explain some of the ways you can install Materialize here as well.

One common and easy way to get a framework involved in your project is through the use of a CDN. Materialize provides its own links you can copy and paste into your project for both its CSS and JS. I'll provide both links below:

#### *Stylesheet Link:*

> `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`

#### *Javascript Link:*

> `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`

If installing Materialize through a CDN link isn't to your liking, then you are more than free to install it through either NPM or Bower, as provided by the Materialize [documentation](https://materializecss.com/getting-started.html).

For NPM installation, simply input this command in your proper directory:

> `$ npm install materialize-css@next`

For Bower installation, use this command:

> `$ bower install materialize`

There is a chance that none of these methods are not your cup of tea. Luckily, there are some third party options provided for you to install Materialize. These third parties include Ruby Gem, Meteor, and Ember.

Ruby installation:

> `$ gem 'materialize-sass'`

Meteor installation:

> `$ meteor add materialize:materialize`

Ember installation:

> `# install via npm`
> `$ npm install ember-cli-materialize --save-dev`
> `# make ember-cli fetch internal dependencies`
> `$ ember g ember-cli-materialize`

With the installation now out of the way, then I can move on to making my Banner for my Materialize based sample.

#### *Banner*

Naturally, I took to the documentation that Materialize provides. I carefully looked over the components and css that Materialize provided, but sadly wasn't able to find any options for creating a default banner. So, I had to take to a banner I created in another project and simply edited my own css to fit the banner with the rest of this project.

Not all was lost at least, because Materialize at least provided a background color and text color for me with the **blue** and **lighten-1** classes to make my banner have a nice blue background and a simple **white-text** class to make my text nice and white.

#### *Three Cards*

A banner by itself is fine, but what is a landing page without some neatly placed cards? The next step for me is to look into Materialize's [grid](https://materializecss.com/grid.html) system and place three cards within three separate columns.

One thing to note about Materialize's grid is that it includes a singular **container** class element that you can use for your main body. This container class is set to ~70% of the window width by default, meaning that it is a great class to help center your content in the middle of the page if you so need to. I didn't need this class for my project, but I figure that this class could be very useful for others.

For Materialize's actual grid system, I needed to start with my one **row** class div that would hold three **col** class divs. However, three simple **col** divs would not be enough. To summarize, Materialize has a grid system that is based on a 12 column size. This means that you will have to be a little math savvy to match the column widths to how you want them to. Since I needed three equal width cards, I applied the **s4** class with the three **col** class divs. I put in some sample text to get a visual on these columns and was met with success. All that was left was to make my cards.

Luckily, Materialize provides its own [card](https://materializecss.com/cards.html) component that you can use to easily make your own custom cards. To begin, I needed to add a new **card** class div inside my first column. Inside of this **card**, I would then need my **card-content** div that would contain my **card-title** span and a paragraph element to hold my flavor text.

Most of my first card was complete, but I felt the need to include a button at the bottom of it. Materialize thankfully includes its own set of [buttons](https://materializecss.com/buttons.html) that I could freely choose from. I decided to go with the most basic button Materialize provides. At the bottom of my **card**, I simply included an a tag element with a class of **btn**. Thus my button was made, which completes my first card.

Copy, paste, and modify that first card into the other two columns and my three cards were now made.

#### *Collapsible Navbar*

A banner and three cards is nice enough for a landing page but a proper navbar is crucial for any page to function properly in the first place. So, I took a look at the [navbars](https://materializecss.com/navbar.html) that Materialize provides. Thankfully, Materialize includes a mobile-responsive collapsible navbar that would fit perfectly into my project.

Compared to other frameworks I have used, Materialize seems to have a more unique way of handling their collapsible navbar. Instead of just taking the same menu and reformatting it, Materialize has two menus that contain the same links. One of these nav menus is a standard navbar menu while the other is a hidden sidebar nav menu that gets brought out when the hamburger icon appears on a mobile sized screen.

To begin, I went to the top of my html and dropped in a new nav element with only a **white** class to change the background of it from a pink default to a regular white instead. I then added a new div inside my nav with a class of **nav-wrapper**. This div will be the one that holds the brand name, hamburger icon, and regular navbar menu. I added my new a tag element with the **brand-logo** and **black-text** classes attached. This a tag element is my Brand Name that will appear in the navbar.

I would usually be inclined to make the hamburger icon menu next, but I would rather save it for last just so I have my proper navbar menus initialized in the html first. Under my brand name, I added a new unordered list with the **right** and **hide-on-med-and-down** classes. The **right** class makes this list float on the right end of the navbar while the **hide-on-med-and-down** class makes this list hide itself when the screen shrinks to a medium size. Inside of my list, I simply added my four navbar menu list items. Each with a single a tag element and with the **black-text** class added. My main navbar menu is now created, but now I need to make it again for a sidenav menu, the one that will be affected by the button I will make for a mobile screen.

Underneath the nav element entirely, I added the same unordered list with a few small changes. This time, my nav list items did not need the **black-text** class and the only class required for my unordered list was the **sidenav** class. My unordered list also needed an id, so I gave it an id called *mobileNav*.

Lastly, for the html at least, I needed to add my hamburger icon that will appear when the screen shrinks to a mobile size. Right underneath my Brand Name element, I added a new a tag element that would contain an icon element. The new a tag needed a *data-target* which I set to the id of my **sidenav**, that being *mobileNav*. The a tag also needed two classes those being **sidenav-trigger** and **black-text**. For the icon, I simply need one class, some specific text inside the contents of the icon, and a new stylesheet link. The class for my icon was **material-icons**, the text was *menu*, and the link is what is shown below:

> `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

All of those elements put together has now left me with a black hamburger icon that shows up when I shrink the page size enough. However, it doesn't currently work, so how do I make it do so?

It turns out that making the collapsible navbar function was actually not that hard to do. I simply needed to include the latest jQuery package and Materialize's own js link then copy and paste the code that they provide in their documentation for running through jQuery. With all of that said and done, I now had my navbar menu that would collapse on a small screen but still be accessible by a hamburger icon as a sidenav menu.

### __Conclusions__

All in all, Materialize actually surprised me. The documentation looks simple and small on the surface, as does the framework, but Materialize itself does quite a bit more than meets the eye. Having access to some rather decent default css is a pleasure alone but still having the ability of customizing every bit of the html with Materialize's very wide color palette, entire Sass library, and a handful of themes definitely gives Materialize a thematic edge over most other frameworks I've seen.

The grid system is very basic too, with a helpful container class included that can make centering your entire page a breeze. And the sheer amount of js you can include in your project is also very useful. Combine it all with a very good amount of css, components, and even a handful of helper classes and Materialize simply has a lot to bring to the table, which is very impressive considering the framework was made by a team of four students. However, as impressive as Materialize is, I did find a few things that the framework does lack.

While Materialize does have a handful of helper classes, that is still it. Just a handful of helper classes didn't feel like enough to me. It's nice to have a helper class to truncate some text, vertically align an element, or hide an element, but I felt the need for some more. Perhaps some classes that could provide some padding or margins to an element would be helpful. The same thing can be said about the typography that the framework brings. While having some default headers, blockquotes, and flow text is nice, I couldn't help but to feel the need for some font sizes to choose from as well as more font colors. In my sample, I found that I only had the choices of black or white text. I tried to look for gray, but got nothing.

In the end, Materialize is a very fine framework. It provides a high amount of customizability, a good amount of javascript that is easy to implement, and some great components to include in your project. My one complaint is that the framework could have some extra little helper classes to make working with typography and larger elements easier than they already are and to make the customizability even better! Materialize gets a lot right and it seems to still be in its infancy. So, my hope is that Materialize will eventually get to a proper 1.1, 1.2, or even a 2.0 release that can make this framework reach its full potential!

To finalize my thoughts, have my rating of Materialize.

|  | Ease of Use | Tools | Features | Mobile Responsiveness | Theme Variety | Documentation |
| - | - | - | - | - | - | - |
| Rating | 5 | 4 | 4 | 4 | 5 | 4 |

> ### **Final Rating** 4.3/5