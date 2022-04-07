document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create XHR object - Instantiating the xhr object just like any other object.
    const xhr = new XMLHttpRequest;
    // The xhr object has properties & methods associated with it. Such as:

    // Open - specify type of request we want (GET) & the URL/file name we want to get (data.txt).
    // true is there so we can make it asynschronous
    xhr.open('GET', 'data.txt', true)
    // So here we want to 'GET' the data within the 'data.txt' file.

    // onProgress - can be used for a spinner as it shows processing request (readyState 3)
    // If you want something to display whilst the server is loading:
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }

    // Onload allows us to do what we want with the data we receive.
    xhr.onload = function() {
        if(this.status === 200) {
        // Check the status to make sure everything went OK.
            console.log(this.responseText);
        // responseText is another property that we can access as part of the xhr object.
        // responseText will be the data.
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        // When we click on the output div, we insert our responseText (data file).
        } else {
            console.log('Not working... yet.')
        }
    }

    // Another xhr property which shows error
    xhr.onerror = function() {
        console.log('Request error');
    }

    xhr.send();

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// Lecture 3 (5:35 - 6:10) summarises what's happening pre-readyStates.

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// can use this/xhr.readystate to check where it is in the request process.
};

// Remember that the 'this' keyword refers to the object it's placed inside.
// So 'this.status' is taking a property from xhr and using it.
// So 'this.status' is the same as xhr.status.
