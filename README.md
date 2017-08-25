# ePLDT Front-End Development Guidelines

## Table of Contents
1. [Introduction](#introduction)
2. [General](#general)
3. [HTML5 and Markup](#html5-and-markup)
4. [Accessibility](#accessibility)
5. [Performance](#performance)
6. [Cookies](#cookies)
7. [Optimizing Images](#optimizing-images)
8. [Maintainability and Structure](#maintainability-and-structure)
9. [Shame SCSS](#shame-css)
10. [SCSS and CSS](#scss-and-css)
11. [Namespaces](#namespaces)
  1. [Layout Namespaces](#layout-namespaces-l)
  2. [Component Namespaces](#component-namespaces-c)
  3. [Module Namespaces](#module-namespaces-m)
  4. [Helper Namespaces](#helper-namespaces-h)
  5. [Theme Namespaces](#theme-namespaces-t)
  6. [State Namespaces](#state-namespaces-s)
  7. [Javascript Namespaces](#javascript-namespaces-j)
  8. [QA Namespaces](#qa-namespaces-q)
12. [Javascript](#javascript)
13. [jQuery](#jquery)
14. [Resources](#resources)
  1. [Workspace](#workspace)
  2. [Frameworks and Plugins](#frameworks-and-plugins)
  3. [Optimization](#optimization)
  4. [References](#references)
15. [Sources](#sources)


## Introduction

This document contains standards and guidelines for websites and applications built for and by the Applications Development Team of ePLDT, and any project-based personnel. It’s purpose is for code consistency, scalability and establishing our branded best practices. By maintaining consistency in coding styles and conventions, we can produce better applications, reduce code maintenance and reduce risk of breakage.

The contents of this document generally rest on the three major pillars of front-end development:

* Separation of presentation content and behavior
* Markup should be well-structured, semantically correct and generally valid
* Javascript should progressively enhance the experience

## General

* We encourage code readability over file-size. Apply adequate white-spacing and provide relevant comments.

* We no longer support Internet Explorer 8 and Internet Explorer 9, unless client specifically requires it.

* We use server-side or build process such as grunt or Gulp to automatically minify and optimize client-side files.

* Front-end developers and UI designers should test all HTML markup against the official W3C validator before passing on to QA. We don’t guarantee 100% W3C compliance.

* Javascript files must pass [JSLint](https://github.com/douglascrockford/JSLint).

* Stylesheets must pass [SCSS Lint](https://github.com/brigade/scss-lint).

* Use four-space 'soft tabs' to indent code.

* No uppercase and space in file and folder names. Use hyphens instead.

* Name file and folders using the block-element-modifier (BEM) convention.

* Use logical and descriptive naming conventions.

* Use whitespace to help with readability. When compiling files for production, minify all static client-side files, such as CSS and JavaScript.

* Choose plugins and frameworks that support the browsers in scope. Make sure they are not deprecated.

* Code and design for accessibility, security, page speed, progressive enhancement and maintainability in mind.

* Weed out unused styles.

## HTML5 and Mark-up

HTML markup defines the structure and outline of a document and content. It’s purpose is not to define the look and feel of the content on a page beyond basic concepts such as headings, paragraphs and lists. The presentation and style attributes of the HTML should be contained in style sheets.

* Ideally, for proper document structure, the HTML5 DOCTYPE should be used. It’s supported in all modern browsers. It also throws IE6 and IE7 into standards mode. [Source](https://johnresig.com/blog/html5-doctype/)

* Write valid semantic markup. Create headings hierarchically from `<h2>` onwards, paragraphs should always be in `<p>` tags and so on and so forth. Writing semantic HTML will result in pages that will be cleaner, lighter and easily parsed by search engines.

* Use **microformats**. Microformats are a way of making contact information machine-readable. Define the type of content contained within elements using hCard classes (not vCard). These are then extracted or highlighted by browsers.

        <span class="tel">
            <span class="type">home</span>:
            <span class="value">+1.415.555.1212</span>
        </span>

If you were to navigate to a page that uses this, you would notice that a program like Skype will easily detect what numbers on the page are phone numbers. Mobile Safari does something similar on iOS devices.

Learn more about [microformats](http://microformats.org/wiki/hcard).

*    All markup should be delivered as UTF8.

        <metacharset="UTF-8">

* Add the viewport meta tag to ensure proper rendering on mobile devices.

        <!--Ensure touch zooming -->
        <metaname=“viewport" content=“ width=device-width, initial-scale=1">

* Always prevent IE compatibility mode.

        <!-- IE10 does not support plugins, such as Flash, in Metro mode.
        Prompt users to switch to "Desktop Mode" in IE10 Metro -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1,requiresActiveX=true">

        <!-- Disable link highlighting upon tap in IE10 -->
        <meta name="msapplication-tap-highlight" content="no" />

        <!-- Kill IE6's pop-up-on-mouseover toolbar for images that can interfere with certain
        designs and be pretty distracting in general -->
        <metahttp-equiv="imagetoolbar"content="false">

* All styles must be separated from content (no inline styles).

    ##### BAD
        <p style="color:blue;">Some text</p>

    ##### GOOD
    **Head**
        `<link rel="stylesheet" type="text/css" href="my-style.css"/>`

    **Body**
        `<p class="blue">Some text</p>`

* Avoid using behavioral markup in HTML (no inline JavaScript).

    ##### BAD
        `<input type="text" name="date" onchange="validateDate()" />`

    ##### GOOD
    ** HTML**
        `<input type="text" name="date" id="date-js"/>`

    ** Javascript**
        `document.getElementById('date-js').onchange=validateDate;`

* All element tags must be in lowercase.

* Minimise unnecessary DOM depth in your page (Minimising browser reflow and helping code readability).

    ##### BAD
        <!-- BAD-->
        <article>
            <div>
                <div>
                    <div>
                        <h1>My Title</h1>
                        <p><span>My paragraph</span></p>
                    </div>
                </div>
            </div>
        </article>

		<!-- BETTER-->
		<article>
			<h1>My Title</h1>
			<p>Lorem ipsum</p>
		</article>

* Avoid scaling images in HTML.

* Keep `favicon.ico` under 1KB and make it cacheable. Set `Expires` header with what you feel comfortable (since you cannot rename it if you decide to change it). You can probably safely set the `Expires` header a few months in the future. You can check the last modified date of your current `favicon.ico` to make an informed decision.

* Keep all JavaScript includes at the bottom of the HTML as much as possible – just before the closing `</body>` tag (there is some exception such as `html5shive.js` which need to be in the header in order to do its job).

* All element tags closed.

* All `img` element must have an alt attribute and it must be filled in.

* Double quotes around attributes.
* `href` must be the first attribute in a link element and should never be empty (add a # when you don't know the path).

* Use actual `<p>` elements for paragraph delimiters as opposed to multiple
 tags
* Use `<label>` elements to label each field and associate the for attribute to the `<input>` field.

* Use tables for tabular data only. The only exception is when composing HTML emails, in which a table is almost the only thing supported by soul crushing email clients.

## Accessibility (WAI-ARIA)

* Use WAI-ARIA landmark roles to help screen reader users understand and navigate a page.

* Use WAI-ARIA form attribute top help screen reader users to use forms.

* Use live regions to inform screen reader users of dynamic text changes.

* Follow the WAI-ARIA 1.0 Authoring practices when implementing JavaScript widgets such as sliders, tooltips and tab panels.

* Use jQuery and jQuery UI widgets. jQuery and jQuery UI are constructed to look and behave as close to identical as possible on different browsers. jQuery UI is designed to be WAI WCAG 2.0 and WAI ARIA compliant, so using the framework removes any uncertainty about plugins or scripts running on your site.

* Keep the HTML5 feature accessibility support in mind. www.html5accessibility.com


## Performance
* Hardware-accelerated CSS. Leverage CSS transitions and transforms for optimal quality. David Walsh has an excellent article on [triggering hardware acceleration](https://davidwalsh.name/translate3d).

* Use `requestAnimationFrame()` to optimize animations into a single reflow/repaint cycle and synchronize JS-based animations with CSS and SVG animations. This reduces CPU, GPU and memory usage, and maximizes battery life for most laptops. See also: [requestAnimationFrame for Smart Animations](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

* Place stylesheets at the top. Moving stylesheets to the `HEAD` allows the page to load progressively, and thus  makes pages appear faster.

* Minify Javascript and CSS.

* Avoid wasteful redirects. Redirects slow down the user experience. One of the most wasteful redirects happens frequently and web developers are generally not aware of it. It occurs when a trailing slash (`/`) is missing from a URL that should otherwise have one. For example, going to `http://astrology.yahoo.com/astrology` results in a **301 response** containing a redirect to `http://astrology.yahoo.com/astrology/` (notice the added trailing slash). This is fixed in Apache by using `Alias` or `mod_rewrite`, or the `DirectorySlash` directive if you're using Apache handlers.

* Remove duplicate scripts.

* Flush the buffer early. In PHP, you have the buffer `flush()`. It allows you to send your partially ready HTML response to the browser so that the browser can start fetching components while your backend is busy with the rest of the HTML page. The benefit is mainly seen on busy backends or light frontends.

* A good place to consider flushing is right after the `HEAD` because the HTML for the head is usually easier to produce and it allows you to include any CSS and JavaScript files for the browser to start fetching in parallel while the backend is still processing.

*  Use `GET` for AJAX requests. When using `XMLHttpRequest`, it’s interesting to note that `POST` without actually posting any data behaves like `GET`. The former is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use `GET`, which only takes one TCP packet to send (unless you have a lot of cookies). The maximum URL length in IE is 2K, so if you send more than 2K data you might not be able to use `GET`. And it’s more semantic.

* Post-load components as required by user experience. Take a closer look at the page and ask: _“What’s absolutely required in order to load the page initially?”_ Prioritize those and load the rest of the content and components afterwards.

    Javascript is an ideal candidate for splitting before and after the `onload` event. For example if you have JavaScript code and libraries that do drag and drop and animations, those can wait, because dragging elements on the page comes after the initial rendering. Other places to look for candidates for post-loading include hidden content (content that appears after a user action) and images below the fold.

    Tools to help you out in your effort: YUI Image Loader allows you to delay images below the fold and the YUI Get utility is an easy way to include JS and CSS on the fly. For an example in the wild take a look at Yahoo! Home Page with Firebug's Net Panel turned on.

* Preload components. By preloading components you can take advantage of the time the browser is idle and request components (like images, styles and scripts) you'll need in the future. This way when the user visits the next page, you could have most of the components already in the cache and your page will load much faster for the user.

    There are actually several types of preloading:

    **Unconditional preload** &mdash; as soon as `onload` fires, you go ahead and fetch some extra components. Check `google.com` for an example of how a sprite image is requested onload. This sprite image is not needed on the google.com homepage, but it is needed on the consecutive search result page.

    **Conditional preload** &mdash; based on a user action you make an educated guess where the user is headed next and preload accordingly. On `search.yahoo.com` you can see how some extra components are requested after you start typing in the input box.

    **Anticipated preload** &mdash; preload in advance before launching a redesign. It often happens after a redesign that you hear: "_The new site is cool, but it's slower than before_". Part of the problem could be that the users were visiting your old site with a full cache, but the new one is always an empty cache experience. You can mitigate this side effect by preloading some components before you even launched the redesign. Your old site can use the time the browser is idle and request images and scripts that will be used by the new site

* Reduce the number of DOM elements. A high number of DOM elements can be a symptom that there’s something that needs to be improved with the page markup. A good benchmark would be 700 elements for a dynamically structured landing page. The number of DOM elements is easy to test, just type in Firebug's console:

    `document.getElementsByTagName('*').length`

* Minimize the use of iframes.

## Cookies

* Eliminate unnecessary cookies.

* Keep cookie sizes as low as possible to minimize the impact on the user response time.

* Be mindful of setting cookies at the appropriate domain level so other sub-domains are not affected.

* Set an `Expires` date appropriately. An earlier `Expires` date or none removes the cookie sooner, improving the user response time.

* Choose `<link>` over `@import`.

* When repeating single DOM node injections, make use of `documentFragment` when possible. This improves memory efficiency and minimize browser reflow. See Javascript.

## Optimizing images

* After a designer is done with creating the images for your web page, there are still some things you can try before you FTP those images to your web server.

* You can check the GIFs and see if they are using a palette size corresponding to the number of colors in the image. Using imagemagick it's easy to check using

    `identify -verbose image.gif`

    When you see an image using 4 colors and a 256 color "slots" in the palette, there is room for improvement.

* Try converting GIFs to PNGs and see if there is a saving. More often than not, there is. Developers often hesitate to use PNGs due to the limited support in browsers, but this is now a thing of the past. The only real problem is alpha-transparency in true color PNGs, but then again, GIFs are not true color and don't support variable transparency either. So anything a GIF can do, a palette PNG (PNG8) can do too (except for animations). This simple imagemagick command results in totally safe-to-use PNGs:

    `convert image.gif image.png`

* Use relative sizes for images to prevent them from accidentally overflowing the container.

* Use the picture element when you want to specify different images depending on device characteristics (art direction).

* Use the `srcset` and the x descriptor/attribute in the `img` element to specify choose among different densities of an image. For browsers that don’t support srcset, the browser uses the default image file specified by the src attribute as fallback. This is why it’s important to always include a 1x image that can be displayed on any device, regardless of capabilities.

* Run `pngcrush` (or any other PNG optimizer tool) on all your PNGs. Example:

    `pngcrush image.png -rem alla -reduce -brute result.png`

* Run jpegtran on all your JPEGs. This tool does lossless JPEG operations such as rotation and can also be used to optimize and remove comments and other useless information (such as EXIF information) from your images.

    `jpegtran -copy none -optimize -perfect src.jpg dest.jpg`

* Avoid empty image `src`. The browser still makes another request to the server. Here’s how each type of browser handles this:

    * IE makes a request to the directory in which the page is loaded.
    * Safari and Chrome make a request to the actual page itself.
    * Firefox 3 and earlier versions behave the same as Safari and Chrome. As of version 3.5, browser no longer sends a request.
    * Opera does not do anything when an empty image src is encountered.

    ##### Why is this behavior bad?
    
    1. Cripples your servers by sending a large amount of unexpected traffic, especially for pages that get millions of page views per day.
    2. Wastes server computing cycles generating a page that will never be viewed.
    3. Possibly corrupts user data. If you are tracking state in the request, either by cookies or in another way, you have the possibility of destroying data. Even though the image request does not return an image, all of the headers are read and accepted by the browser, including all cookies. While the rest of the response is thrown away, the damage may already be done.
    
        The root cause of this behavior is the way that URI resolution is performed in browsers. This behavior is defined in RFC 3986 - Uniform Resource Identifiers. When an empty string is encountered as a URI, it is considered a relative URI and is resolved according to the algorithm defined in section 5.2.
        
        This specific example, an empty string, is listed in section 5.4. Firefox, Safari, and Chrome are all resolving an empty string correctly per the specification, while Internet Explorer is resolving it incorrectly, apparently in line with an earlier version of the specification, RFC 2396 - Uniform Resource Identifiers (this was obsoleted by RFC 3986).
        
        So technically, the browsers are doing what they are supposed to do to resolve relative URIs. The problem is that in this context, the empty string is clearly unintentional.
        
        HTML5 adds to the description of the  tag's `src` attribute to instruct browsers not to make an additional request in section 4.8.2:
        
        > The `src` attribute must be present, and must contain a valid URL referencing a non-interactive, optionally animated, image resource that is neither paged nor scripted. If the base URI of the element is the same as the document's address, then the src attribute's value must not be the empty string.
       

## Maintainability and Structure

* Use SMACSS (Scalable and Modular Architecture for CSS) to write your stylesheets. Learn more about SMACSS [here](https://smacss.com/).

* Using SASS/SCSS as our preprocessor, we divide up our stylesheets into the following general structure.


    ![General front-end folder struct](https://lh3.googleusercontent.com/-VOWW5OzH9h4/WZ-r7MH6h7I/AAAAAAAAAQo/VtlEN8fKrwsEDJ7eDEmBbwdqs2SmC7K-ACE0YBhgL/s0/public_html.png "public_html.png")



## Shame SCSS

We all know that sometimes we do need to use quick fixes to release out on time, but that code often makes us feel ashamed.

The idea of `shame.scss` or `shame.css` is that you have a new and separate stylesheet for all your hacky code. It's a file that we can do better on when we get the time to revisit or code review it. Because let's face it, there will be bugs, breakages and quirks that need quick-fixing. A hack is something where—as you’re writing it—you’re thinking there has to be a cleaner way to do this. Over the years, we've all developed an intuition for hacky things. This file will house those.


[Harry Roberts](http://www.csswizardry.com/) lists down the benefits of using a `shame.css` file as follows:

1. You make them stick out like a sore thumb.
2. You keep your ‘main’ codebase clean.
3. You make developers aware that their hacks are made very visible.
4. You make them easier to isolate and fix.
5. $ git blame shame.css.

By keeping it in a separate file that gets called last when we compile our SCSS, we ensure that the ‘hacks’ and fixes are rendered. Here are our rules and criteria:

1. If it’s a hack, it goes in shame.scss.
2. Document all hacks fully:
    * What part of the codebase does it relate to?
    * Why was this needed?
    * How does this fix it?
3. How might you fix it properly, given more time?
4. Do not blame the developer; if they explained why they had to do it then their reasons are probably (hopefully) valid.
5. Revisit and clean shame.scss up when you have some down time.
6. Even better, get a tech-debt story in which you can dedicate actual sprint time to it.

To make full use of this solution, we recommend all developers to document what the problem was, how the hack fixes it and how they might fix it for real in the future. Use the ff. format:

    /*
    * @ellesa
    * Nav specificity fix
    *
    * Someone used an ID in the header code (`#header a {}`) which trumps the
     * nav selectors (`.site-nav a {}`). Use !important to override it until I
     * have time to refactor the header stuff.
    * Notes:
    */
    .site-nav a {
        color; #BADA55 !important;
    }



### SCSS and CSS

* Selectors must be in lowercase.

* Avoid referencing IDs. Best practice since Web 2.0 days.

* Use box-sizing: border-box; on all elements to avoid dealing with box model issues.

* Do not use !important declaration within the main stylesheets. Place your `!important `declarations and overrides in the project's **shame.SCSS** file.

* Add a space after the colon.

* Use short declaration form when possible.

	    body {
	        background-color: #fff url(...) repeat-x fixed right top;
	        border: 1px solid #369;
	        font: bold 14px/1.2em georgia, "times new roman", serif;
	        margin: 10px 5px 0;
	    }

* Order properties alphabetically. See previous example.

* Define all media queries in one location, but keep all module-specific CSS contained within its corresponding SCSS file.

* Reduce specificity. Avoid nesting more than 2-3 levels deep. Here’s a [specificity calculator](https://specificity.keegan.st/) to help you find problematic selectors in your CSS.

* Specify the font size only for the lowest possible child elements, in order to minimize its cascading impact on relative units.  [Example]

* Only use `em` within media query definitions, never pixels.

* Ensure consistent whitespace by using `rem` for margin and `em` for padding.

* Don’t assign a unit type to a property value of zero. It’s not important to know whether an element should be `0px` or `0 elephants` from the left, just that it’s flush left.

* Nest selectors only when necessary.

## Namespaces

> Our standard naming conventions may be compromised when using other
> frameworks that rely on a different convention.

Mostly everything in our CSS is namespaced so that our CSS is as transparent and self-documenting as possible.  It's important to note that we're using these namespaces as a means of "soft encapsulation." We can see just how much information we can communicate to developers with just a couple of letters.

In no particular order, here are the individual namespaces we hope to use in all our web projects and a brief description to get you acquainted with what we’re hoping to achieve at scale.

#### Layout Namespaces: `l-`
Layout modules include grid items, containers, wrappers, rows and any classes that pertain to the structure of the page. These elements are universal in nature. Take caution in binding onto and modifying them as the effects could be felt site-wide.

#### Component Namespaces: `c-`
Components are finite, discrete, implementation-specific bits of UI such as buttons, slider controls, date pickers, etc.

#### Module Namespaces: `m-`
Modules are bits of UI that serve a specific purpose, aid the user in performing tasks and are designed to exist as a standalone component. These include calendars, accordions, carousels, and navigation.

#### Helper Namespaces: `h-`

Helpers are single responsibility rules which have a very specific and targeted task. It's quite common for these rules to carrry `!important` so as to guarantee that they beat other less specific ones. The `helper.scss` file is imported into `main.scss` right before `shame.scss`.

#### Theme Namespaces: `t-`

Theme namespaces are very high-level, and provide a context or scope for other rules.

#### State Namespaces: `is-` and `has-`

Based on [SMACSS](https://smacss.com/book/type-module), stateful (i.e. boolean) namespaces tell us about the short-lived or temporary states of the UI that need styling accordingly. These classes work by always chaining with other classes as the heightened specificity ensures that the state always takes precedence over the base styling.

Never write a bare state class.

#### Javascript Namespaces: `js-`

JavaScript namespaces are pretty common now, and most people tend to use them. The idea is that—in order to properly separate our concerns—we should never have styling and behaviour bound to the same hooks. To bind both technologies onto the same hook means we can’t have one without the other: our UI becomes all-or-nothing, which makes it very opinionated and inflexible.

It also means that we can work a lot more safely. It means that CSS developers can work and refactor freely without the worry that they will break some JS, and vice versa. It separates our concerns and leaves each team with its own hooks for its own purposes.

#### QA Namespaces: `qa-`

> You the front-end developer will typically not be applying these hooks.

This is unusual, but a potentially very useful namespace for our QA team, especially when running automated UI tests with tools like [Selenium](http://www.seleniumhq.org/).

With this, we can ensure that any UI refactoring doesn't affect the QA team's hooks.

## Javascript

* Use camel case to name variables. Boolean variables should start with ‘is’.

* Use single quotes around attributes.

* Use strict coding style `"use strict”;`

* Configuration variables (like animation durations, etc.) should be at the top of the file.

* Use single `var` pattern when possible.

        var a = 'Data';
        var b;
        var c= 'Extradata';    

        /* BETTER */
        var a = 'Data', b, c = 'Extradata';


* Don't change variable types after initial declaration.

	    // Don’t do this
	    var myString = ‘This is a string’;
	    myString = 50;

* Use short form when possible.

	    var lunch = new Array();
	    lunch[0] = 'Red';
	    lunch[1] = 'White';
	    lunch[2] = 'Blue'

		// SHORT FORM
		var lunch = ['Red', 'White', 'Blue'];

        ---------------

	    x = x + y;
	    x = x - y;
	    x = x * y;
	    x = x / y;
	    x = x % y;

		// SHORT FORM
		x += y;
		x -= y;
		x *= y;
		x /= y;
		x %= y;

* Minimize global variables. Generally, one is a good number for your application in namespace.

* Improve loop performance:
    * Cache length in a variable. Looping is arguably the most important part of JavaScript performance to get right. Shave a millisecond or two off inside of a loop, potentially gain seconds overall. One such way is to cache the length of an array so it doesn't have to be calculated every time the loop is iterated through.

		    // OK
		    var names = ['George', 'Ringo', ' Paul', ' John', ...];
		    for(var i = 0; i < names.length; i++){
			    doSomethingWith(names[i]);
		    }

		    // BETTER
		     var names = ['George', 'Ringo', ' Paul', ' John', ...];
		    for(var i =0, j = names.length; i < j; i++){
		    doSomethingWith(names[i]);
		    }

    * Use `break;` and `continue;`

* When repeating single DOM node injections, make use of `documentFragment` when possible. This improves memory efficiency and minimize browser reflow. See [Performance]().

* Always use double quotes with strings.

* Use same line braces.

* Always use `===` comparisons.

* When parsing a string to an integer using `.parseInt()`, always specify the second `radix` parameter, which determines to what base the string should be converted to.

* Avoid comparing to `true` or `false`.

* Avoid polluting the global namespace. Namespace your globals to your own specific app name or reassign your namespace.

* Don't send too many function parameters. Instead, construct an object before-hand or pass the object inline. [Example]

* Remap `this` to `_self`. [Get details from http://taitems.github.io/Front-End-Development-Guidelines/#javascriptSection]

* Minimize repaints and reflows. See [Performance]().


### jQuery

* Familiarize yourself with the `.end()` and traverse the DOM like a mad dog. It is critical for when you begin stepping up and down the DOM tree from your original selector. [Example]

* Optimize your selectors and cache their results.

    Do a costly DOM query every time you want to change something, or store a reference to the element? Pretty clear choice.

	    // BEFORE
	    $(".quote a").bind("click", doStuff); // DOM query eww

	    // NOW
	    $(".quote a").addClass("quoteLink"); // DOM query eww

	    // LATER
	    $(".quote a").fadeIn("slow"); // DOM query eww

    Ignoring chaining, this is better:

		// BEFORE
		var $quoteLinks = $(".quote a");  // the only DOM query
		$quoteLinks.bind("click", doStuff);

		// NOW
		$quoteLinks.addClass("quoteLink");

		// LATER
		$quoteLinks.fadeIn("slow");

* Use short form to declare the jQuery document ready event.

		$(document).ready(function(){...});

		//SHORT FORM
		$(function(){...});

		//BETTER (short form + handling conflicts with other libraries such as Prototype)
		(function($){
			$(function(){...});
		})(jQuery);

* All variables that are used to store or cache jQuery objects should have a name prefixed with a `$`.

* Always cache your jQuery selector returned objects in variables for reuse.

		var$myDiv=$('#myDiv');
		$myDiv.on('click',function(){...});

* Avoid using the element type in your selector and don’t’ use "universal selectors".

		// SLOW
		var $products = $('div.products');

		// FASTER
		var $products = $('.products');

		-------------
		// SLOW
		$('.container>*');

		// FASTER
		$('.container').children();

		-------------
		// SLOW
		$('.containerp');

		// FASTER
		$('.container').find('p');

* Use string concatenation and append outside of loops (improving memory efficiency and minimising browser reflow)

		// SLOW
		var $myList = $('#list');
		for(var i =0; i < 10000; i++){
			$myList.append('<li>' + i + '</li>');
		}

		//FASTER
		var $myList = $('#list'),
		list = ‘’;
		for(var i = 0; i < 10000; i++){
			list += '<li>' + i + '</li>';
		}
		$myList.html(list);

		// EVEN FASTER
		var $myList = $('#list'),
		array = [];
		for(var i = 0; i < 10000; i++){
			array[i] = '<li>' + i + '</li>';
		}
		$myList.html(array.join(''));

		// THE FASTEST
		// Use of Document Fragment

* Don’t act on absent elements

		// BAD (jQuery will run 3 functions before it realizes there's nothing in the selection
		var $mySelection = $('#nosuchthing');
		$mySelection.slideUp();

		//GOOD
		var $mySelection = $('#nosuchthing');
		if($mySelection.length){
			$mySelection.slideUp();
		}

* Avoid using anonymous functions as they're difficult to debug, maintain, test, or reuse.

		// OK
		$('#myLink').on('click',function(){ ... });

		// BETTER
		var myLinkClickHandler = function(){ ... }
		$('#myLink').on('click',myLinkClickHandler);

		-------------

		// OK
		$(function(){
			$('#magic').on('click', function() {
				$('#yayeffects').slideUp(function () {
					// ... });
				});

			$('#happiness').load(url + ' #unicorns', function () {
					// ...
				});
		});

		//BETTER
		var PI = {
			onReady: function () {
				$('#magic').click(PI.candyMtn);
				$('#happiness').load( PI.url + ' #unicorns', PI.unicornCb );
		    },
		    candyMtn: function () {
				$('#yayeffects').slideUp(PI.slideCb);
			},
		    slideCb: function () { ... },
		    unicornCb: function () { ... },
		    url: function () { ... }
		};

		$(PI.onReady);

* Avoid mixing CSS with jQuery

		// BAD
		$('#mydiv').css({'color':'red','font-weight':'bold'});

		// BETTER
		/* CSS */
		.error {
			color: red;
			font-weight: bold;
		}
		// JS
		$('#mydiv').addClass('error');

* Avoid using `.getJson()` or `.get()`, instead use the `$.ajax()` form.

* Avoid using HTTP requests on HTTPS sites. Prefer schemaless URLs (leave the protocol `http`/`https` out of your URL).

* Avoid putting request parameters in the URL, use data object setting instead.

		// LESS READABLE
		$.ajax({
			url: 'something.html?param1=test1&param2=test2', ...
		});

		// MORE READABLE
		$.ajax({
			url: 'something.html',
			data: {param1: test1, param2: test2}
		});

---
## Resources

##### Workspace
*  \** *IDE* \** **Atom** &mdash; https://atom.io/
* **Codekit** &mdash; https://codekitapp.com/
* **DevDocs** &mdash; http://devdocs.io/

##### Frameworks & Plugins
* **Foundation** &mdash; http://foundation.zurb.com/
* **Animate.CSS** &mdash; https://daneden.github.io/animate.css/

##### Optimization

* **Imagemagick** &mdash; http://www.imagemagick.org/
* **Pngcrush** &mdash; http://pmt.sourceforge.net/pngcrush/
* **JSLint** &mdash; https://github.com/douglascrockford/JSLint
* **CSS Lint** &mdash; https://github.com/brigade/scss-lint

##### References
* **HTML5 Accessibility** &mdash; http://www.html5accessibility.com/
* **Complete List of AJAX Events** &mdash; http://api.jquery.com/Ajax_Events/

---
## Sources

**Roberts, Harry**. (2017, May 20). *CSS Guidelines: High-level advice and guidelines for writing sane, manageable, scalable CSS*. Retrieved from https://cssguidelin.es/

**Frain, Ben**. (2014, February 25). *CSS performance revisited: selectors, bloat and expensive styles*. Retrieved from https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/

**Walsh, David**. (2012, March 12). *Force Hardware Acceleration in WebKit with translate3d*. Retrieved from https://davidwalsh.name/translate3d

**Irish, Paul**. (2011, February 11). *requestAnimationFrame for Smart Animating*. Retrieved from https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

**Çelik, Tantek & Suda, Brian**. (2015, December 11). *Microformats: h-card*. Retrieved from http://microformats.org/wiki/hcard

**Zakas, Nicholas**. (2009, November 30). *Empty image src can destroy your site*. Retrieved from http://www.nczonline.net/blog/2009/11/30/empty-image-src-can-destroy-your-site/

**Osmani, Addy**. (2017). *Learning JavaScript Design Patterns*. Retrieved from https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmodule
