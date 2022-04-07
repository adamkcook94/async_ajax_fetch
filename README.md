Modern Javascript Udemy Course - Section 7

<!-- I've found this section confusing so I've decided to take detailed notes and take my
time for this section. This section is going to cover Asynchronous Javascript, AJAX, and
Fetch APIs.  -->

1. Asynchronous Javascript

Sync Code

<!-- Synchronous Code is step-by-step code or blocking code.

E.g.

posts = loadPosts();
    ... waits until posts are fetched from server.

doTheNextThing();
    ... this can only be carried out once loadPosts has completed fetching posts.

This obviously slows things down.
-->

Async Code

<!-- Asynchronous code is when these tasks can be carried out simeultaneously.

Lecture 57. (1:55-2:36)
E.g.

loadPosts(function() {
    ... waits until posts are fetched
});

doTheNextThing();
    ... doesn't have to wait for posts to load - carries out this task.

An example of handling asynchronous code is passing through a 'Callback Function'
which is what we have done here.

This callback will run and fetch the post and allow us to do something with the post
but 'doTheNextThing()' will not have to wait for posts to be fetched to run.

Program isn't blocked like it would be with synchronous code and will keep going.

Even if it takes a long time to fetch the posts this won't stop doTheNextThing() from running.

This makes for a faster application.

-->

Browser/Server APIs

<!-- Most async code you work with will be part of an API or library.

- AJAX, XHR object (next lesson)
- jQuery Ajax, Fetch API

etc.

These are all Async technologies - so you have to handle the response in a certain way.

** Bit confused with this - something I can return to. **
-->

Handling Async Code

<!-- There are ways to work with Async code:

- Callbacks
- Promises
- Async/Await - can be structured in a way that looks like Sync code.

-->

2. What is AJAX ?

<!--

AJAX

- Stands for Asynchronous Javascript & XML.

- Set of web technologies

- Sends and receives data from the browser and server.

- Sends & receives data asynchronously.

- Done behind the scenes so you don't have to reload the browser.

- XML has been replaced by JSON. Most APIs now return JSON data instead of XML.

-->

Pathway (Diagram Lecture 58. 1:05)

<!--

Pathway without AJAX

- Browser sends request > Server sends response

- Usually you'd click a link which would send a request to the server and we would get a
response back which includes the WHOLE web page (headers, data etc), which will reload
the page.

AJAX Pathway

- Browser sends JS Call > AJAX Engine sends XmlHttpRequest > Server sends XML/JSON data back

to AJAX > AJAX Engine sends HTML Response to browser.

- Therefore AJAX allows us to make requests asynchronously.

- This happens in the background, removing the need for a browser to reload or refresh.

- For example updating a section of text can be done with AJAX which is much faster and removes
the need to reload the web page.

- This makes the browser more interactive too.

-->

XML Http Request or XHR Object

<!--

- Core technology in AJAX.

- An API in the form of an object.

- Provided by the browsers JS environment. (All browsers have this API.)

- Methods transfer data between browser and server.

So this is what AJAX uses to send data to the server to return a JSON format, which can
be converted into a HTML response in the browser.

-->

Libraries & Other Methods

<!--

These are similar libraries that provide a similar service to AJAX

- Fetch API (Part of Vanilla JS & browser, newer than AJAX)
    - Will be covering Fetch later

- Axios

- Superagent

- jQuery

- Node HTTP

-->

3. XHR Object Methods & Working with Text

<!--

See app.js for xhr object properties/methods and extracting a text file.

-->

4. Working With AJAX & JSON

<!-- The first part of this lesson is similar to 'app.js' because I am outputting
a single object.
-->

Implementing numerous JSON Objects

<!--

(Lecture 60. 10:00 Start)

- The difference in getPokemons() is that we are using a forEach loop to loop through
our array.

- We are also using the let keyword in order to assign multiple objects to the output
variable.

- I was a little bit confused about the singular 'pokemon' parameter, but because we
are looping through the pokemons variable, we can assign anything within the parentheses.

I.e. pokemons.forEach(function(yolo){
    yolo.id
    yolo.name
    yolo.type
});

- The '+=' means we are appending.

 -->

5. Data From An External API - Chuck Norris Jokes

<!-- This is workspace is getting a bit clogged, so will create a different repo for this
section.

The repo is called 'chucknorris_jokes'.

Completed the application independently. -->

6. REST APIs & HTTP Requests

What Is An API?

<!--

- Application Programming Interface

- All kinds of APIs, we-re dealing with web APIs but there are APIs in your PC, smartphone,
fridges, etc.

- Essentially a contract provided from one software to another.

- Consists of a structured request and response. One software requests data/function and the API
sends it back.

- The Chuck Norris Joke Generator was an example of this. We requested jokes and received them back
in the form of JSON.

-->

REST APIs

<!--

- Representational State Transfer

- A set of architectural constraints for designing applications.

- Relies on a stateless, client-server communication protocol almost always in the form of HTTP.

- REST was made to treat objects on the server side as resources that can be created, updated, read
or destroyed.

I.E. A blog post, a user etc. Usually stored in a database.

- Can create these resources with a 'POST' request.

- Can delete with 'DELETE' request.

- When a client request is made via a RESTful API, it transfers a state of the resource to the
requester or endpoint.

- This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation),
HTML, XLT, Python, PHP, or plain text.

- Since it uses HTTP requests and standard JSON it can be used with any programming language.

- APIs are the messenger, whilst REST lets us use HTTP requests to format that message.

- REST APIs take in multiple forms of HTTP requests such as 'GET', 'POST', 'DELETE, etc.

-->

HTTP Requests

<!--

- GET: Retrieve data from a specfied source.

- POST: Submit data to be processed to a specified resource.

- PUT: Update a specified resource.

- DELETE: Delete a specified resource.

- HEAD: Same as get but doesn't return a body, just returns the header.

- OPTIONS: Returns supported HTTP methods of that specific server or API.

- PATCH: Updates partial resources.

-->

API Endpoints

<!--

- With an API, you are going to have endpoints, which are URLs which allow you to do certain things.

I.E:

GET https://someurl.com/api/users (Get all users)

GET https://someurl.com/api/users/1 (Get specific user)

POST https://someurl.com/api/users (Add user)

PUT https://someurl.com/api/users/1 (Update user)

DELETE https://someurl.com/api/users/1 (Delete user)

These examples are all similar which is okay because the request methods are different (GET/POST/PUT/DELETE).

- With POST, PUT & DELETE you will need to send data along with the request because it needs to know the
data to add/update/delete and the data it needs to do these things.

-->

7. Callback Functions

<!-- Callback Functions are functions within a function's parameter, allowing us to asynchronously code.

E.g. (watch Callback Functions again for example.)

 -->
