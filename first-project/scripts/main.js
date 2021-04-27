let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myParagraph = document.querySelector('p');
let myAnchor = document.querySelector('a');

// Switching the page objective by clicking the image
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/airline-image.png') {
        myImage.setAttribute('src', 'images/ba-image.png');
        myHeading.textContent = 'British Airways';
        myParagraph.textContent = "British Airways is the flag carrier of the United Kingdom. \n The airline was established March 31, 1974.";
        let myAnchorSrc = myAnchor.getAttribute('href');
        myAnchor.setAttribute('href', 'https://www.britishairways.com');
    }
    else {
        myImage.setAttribute('src', 'images/airline-image.png');
        myHeading.textContent = 'LOT - Polish Airlines';
        myParagraph.textContent = 'WIP';
    }
}

// Changing user name and displaying "Hello {name}!" but first taking a prompt of the input of the name and changing the paragraph
let myButton = document.querySelector('button');
function setUsername() {
    let myName = prompt('Please enter your name'); // Showing a prompt and taking input from the user
    if(!myName) { // Prevent the user from submitting empty values
        setUsername();
    }
    localStorage.setItem('name', myName);
    myParagraph.textContent = 'Hello, ' + myName + '!';
}
//// Initialization code
if (!localStorage.getItem('name')) { // Checking if the name is stored in the localstorage already, if not, take input
    setUsername();
}
else { // Else, show the stored name
    let storedName = localStorage.getItem('name');
    myParagraph.textContent = 'Hello, ' + storedName + '!';
}
//// Attaching the function to the button
myButton.onclick = function() { // Onclick of the button, run the function
    setUsername();
}
