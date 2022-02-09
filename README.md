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
