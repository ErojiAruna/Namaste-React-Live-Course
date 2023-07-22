
# Theory Assignment : `Chapter - 01 Inception`

### 1. What is Emmet?

"Emment is a plug in for many popular text editors which greatly improves HTML & CSS workflow"

Most useful Emmet abbreviations are:

`HTML`

1. `!,html:5` => generates html5 boilerplate
2. `div.primary` => Creates div element with class
3. `section>h1` => Nested elements
4. `li*5` => Creates Multiple elements
5. `h1+p+a` => Sibling elements
6. `link:css` => Link to CSS
7. `lorem10` => Filler text with 10 lines

`CSS`

1. `m0` => margin: 0
2. `p2r` => padding: 2rem
3. `w100p` => width: 100%
4. `ma50r` => max-width: 50rem
##
### 2. Difference between a Library and Framework?

Both libraries and frameworks are reusable code written by someone else.Their purpose is to help you to help you solve common problems in easier ways.

Difference between a framework and library lies in term called inversion of control. When you use a library, you are in charge of the application flow. You choose when and where to call library. When you use a framework, the framework is in charge of the flow. It provides you with a few places to plug in your code, but it calls the code you plugged in as needed.

`Frameworks:`
frameworks created by dedicated teams, and ship with everything you needed to build large-scale applications.
These teams provide official style guides that follow best practices.

`Libraries:`
libraries focus only on how to use it, which means that the team doesn't support libraries for global state management, like HTTP, routing, forms, etc...

And that is a choice, it gives the user the ability of picking libraries that he wants. That means using libraries, giving us full control of our application, you only add what you want, which makes the application smoother.

##
### 3. What is CDN? Why do we use it?
CDN stands for Content Delivery Network.
CDN was invented to shorten the physical distance between the website user and the website’s hosting server.
CDN is a bunch of servers placed in different locations all over the world. To minimize the physical distance between your website and your user you can choose to deliver it through CDN which would cache a copy of your content on each of their servers.

#### We use CDN for:

1. Faster performance and lower latency
2. SEO Improvement:  Google and other search engines love fast and efficient websites. Speed is the most important Google SEO ranking factor. Better the speed, higher a website can appear in search. So, therefore, more leads and sales it can acquire.
3. Scalability: Protects your website from traffic spikes which can make your website stop responding. Your end-users would not be affected at all.
4. Security: Any website can come across DDoS attacks or similar. CDN can solve this problem pretty easily.

##
### 4. Why is React known as React?
React is a JavaScript library created by Facebook for building user interfaces.It is called React because it was designed to respond quickly to user interactions. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is used to interactive It is used for creating interactive UIs, and for managing data and state in applications. React is designed to be fast, scalable, and simple. It uses a virtual DOM to render components, and it uses a component-based architecture to create reusable code. React is also designed to be extensible, allowing developers to create custom components and libraries. React is used by many companies, including Facebook, Instagram, Netflix, and Airbnb.

##
### 5. What is crossorigin in script tag?
The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

##
### 6. What is diference between React and ReactDOM?
React is a JavaScript library for building User Interfaces.

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.

React has nothing to do with a browser or web for that matter.
React-DOM binds the idea of React to a web browser.

Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like `render()` or `findDOMNode()` we’re using React-DOM.

##
### 7. What is difference between react.development.js and react.production.js files via CDN?
`react.production.js` - production code of react library that is minified and production ready. `react.development.js` - More readable and developer friendly react library code that can be used to debug.

##
### 8. What is async and defer?
‘async’ and ‘defer’ are boolean attributes which we use along with script tags to load external javascript libraries efficiently into our web page.

#### How to use `async` attributes?

`<script async src="myscript.js"></script>`
With async (asynchronous) attribute, the HTML parsing continues until the browser fetches the script file over the network so parsing and script fetching happens in parallel (as shown in the figure below). Once the scripts are available in the browser, HTML parsing is paused and scripts are executed. Once the execution is complete, HTML parsing continues.

#### How to use `defer` attributes?

`<script defer src="myscript.js"></script>`
The word ‘defer’ in English means to ‘hold back’. So with defer attribute mentioned in the script tag, the script files are downloaded in parallel while the HTML parsing continues. But the execution is deferred until the HTML parsing is done. In simple words, the downloaded scripts are executed only when the browser finishes its HTML parsing.




