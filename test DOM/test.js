/*
 var element1 = document.getElementById("test1");

 element1.innerHTML = "change by id";

 var element2 = document.getElementsByClassName("test");
 element2[0].innerHTML = "change by class";

 var element3 = document.getElementsByTagName("p");
 for (var i = 0; i < element3.length; i++) {
   element3[i].innerHTML = "change by tag name" + (i + 1);
 }

var element4 = document.querySelectorAll("div.test");

element4[0].innerHTML = "change by query selector";

*/

//====================================================================

/*
var element1 = document.getElementById("test1");
element1.innerHTML = document.title;

var myDiv = document.getElementById("test1");
myDiv.innerHTML = document.images[0].src

document.write('<br>' + document.images[0].l);


myDiv.innerText = document.forms[0].x1.type;
myDiv.innerText = document.forms[0].x1.value;

*/

//====================================================================


/*
var myDiv = document.getElementById("test1");
myDiv.innerText = document.body.innerText;

if(document.body.innerText.indexOf("Try") >  -1) {

    console.log("original text found");
}

myDiv.innerText = document.anchors.length;

//link  بيودي علي لينك
//anchor مش بيودي علي لينك

*/

//====================================================================


/*
var myDiv = document.querySelector("div")

myDiv.textContent
 
myDiv.id = "myDivID";

myDiv.className = "myDivClass";
myDiv.title


myDiv.setAttribute("id", "myNewID");

*/

//====================================================================


/*
var myImg = document.querySelector("img")

if(myImg.hasAttribute("src")) 
{
    if(myImg.getAttribute("src") === "") 
    {
        myImg.removeAttribute("src");
        console.log("src attribute is empty and removed");
    }
    else
    {
        console.log("src attribute exists : " + myImg.getAttribute("src"));
    }
}

*/

//====================================================================


/*

var myButton = document.querySelector('button'),
    myDiv = document.getElementById("ourtext");

myButton.onclick = function() {

    'use strict';
    
    //if(myDiv.classList.contains("hidden"))
    //{
    //    myDiv.classList.remove("hidden");
    //}
    //else
    //{
    //    myDiv.classList.add("hidden");
    //}
    

    myDiv.classList.toggle("hidden");
        
};

*/

//====================================================================


/*

console.log(myDiv.childNodes);
console.log(myDiv.lastChild);
console.log(myDiv.firstChild);
console.log(myDiv.firstElementChild);
console.log(myDiv.lastElementChild);
console.log(myDiv.childElementCount);

*/

//====================================================================


/*

var myDiv = document.getElementById("main")
,   myP = document.createElement("p")
    myText = document.createTextNode("This is my new paragraph");

myP.appendChild(myText);

myDiv.insertBefore(myP, myDiv.childNodes[4]);

console.log(myDiv.childNodes[4].className);
console.log(myDiv.childNodes[6].firstChild.tagName);
console.log(myDiv.childNodes[6].firstChild.nodeName);
console.log(myDiv.childNodes[6].nodeType);
console.log(myDiv.childNodes[6].firstChild.nodeValue);
console.log(myDiv.childNodes[6].firstChild.textContent)
console.log(myDiv.childNodes[6].firstChild.data)

*/

//====================================================================


/*

var myDiv = document.getElementById("main")
,   myNewDiv = document.getElementById("new")
,   myCopy = myDiv.firstElementChild.cloneNode(true);


myNewDiv.appendChild(myCopy);

console.log(myDiv.firstElementChild)
console.log(myDiv.firstElementChild.textContent)

*/

//====================================================================


/*

var myDiv = document.getElementById("main")
,   myP = document.createElement("p")

,   myText = document.createTextNode("This is my new paragraph");
myP.appendChild(myText);


console.log(myDiv.appendChild(myP));

console.log(myDiv.childNodes[3].nextSibling.textContent);

*/

//====================================================================


/*

var myInput = document.getElementById("myInput");

window.onload = function() {

    myInput.focus();
}
myInput.blur();

*/

//====================================================================



/*

var myDiv = document.getElementById("main")
,   myButton = document.getElementById("hideButton");

myButton.onclick = function() {

    this.parentElement.style.display = "none";
}

window.onload = function() {

    this.setTimeout(function() {

        myButton.click();   
        }, 2000);
}

*/

//====================================================================

/*


var myMainButton = document.getElementById('main'),
myPower = document.getElementById('power')
myDiv = document.getElementById("main");

function MakePower () {

'use strict';

document.getElementById('monster2').style.display = 'none';
}

myMainButton.onclick = function () {

'use strict';

document.getElementById('monster1').style.display = 'none';

}

myPower.onclick = function () {

'use strict';

myMainButton.addEventListener('click', MakePower);
}

console.log(myDiv.contains(document.getElementById('monster1')));

console.log( "Height : " + myMainButton.clientHeight + 'px');
console.log( "Width  : " + myMainButton.clientWidth + 'px');


*/


//====================================================================


/*

        Client Height:
        Viewable Area
        Include Padding
        No Border
        No Scroll
        No Margin

        
        Scroll Height:
        All Area Include Invisible Area
        Include Padding
        No Border
        No Margin
        
        Offset Height:
        Viewable Area
        Include Padding
        Include Border
        Include Scroll
        No Margin
*/


/*

var myMainDiv = document.getElementById('main');

console.log( "Scroll Height: " + myMainDiv.scrollHeight);
console.log( "Scroll Width : " + myMainDiv.scrollWidth);
console.log( "Client Height: " + myMainDiv.clientHeight);
console.log( "Client Width : " + myMainDiv.clientWidth);
console.log( "Offset Height: " + myMainDiv.offsetHeight);
console.log( "Offset Width : " + myMainDiv.offsetWidth);

*/



//====================================================================



var myMainDiv = document.getElementById('main');

console.log( "Scroll Top: " + myMainDiv.scrollTop);
console.log( "Scroll Left: " + myMainDiv.scrollLeft);


console.log( "Top Border Width: " + myMainDiv.clientTop);
console.log( "Left Border Width: " + myMainDiv.clientLeft);


//====================================================================

var myMainDiv = document.getElementById('main');

myMainDiv.style.backgroundColor = "green";

//====================================================================
console.log(document.inputEncoding);
console.log(document.lastModified);
console.log(document.URL);


//====================================================================

/*

// Create The Main Element
var myElement = document.createElement('div');

// Append To Body
document.body.appendChild(myElement);

// Create Text Node
var myText = document. createTextNode('This Div Created With Javascript');

// Create Start Comment
var myStartComment = document.createComment('Start Text Created With Javascript');

// Create End Comment
var myEndComment = document.createComment('End Text Created With Javascript');

// Add The Comment To My Element
myElement.appendChild(myStartComment);

// Add The Text To My Element
myElement.appendChild(myText);

// Add The Comment To My Element
myElement.appendChild(myEndComment);

*/

//====================================================================

var myElement2 = document.getElementById('new'),

// Create The Attribute
myAttr = document. createAttribute('class'),

// Create Another Attribute
mySecondAttr = document.createAttribute('title');
// Change Attribute Value
myAttr.value = 'custom';

// Change Attribute Value
mySecondAttr.value = 'Zero';

// Add This Attribute To Element
myElement2.setAttributeNode(myAttr);

// Add Second Attribute To Element
myElement2.setAttributeNode(mySecondAttr);

//====================================================================



/*

var myElement3 = document.getElementById('new'),
    MyNewButton = document.getElementById('newButton');

MyNewButton.onclick = function() {

    'use strict';
    myElement3.style.backgroundColor = "green";

}

function Change() {

    'use strict';
    myElement3.style.backgroundColor = "Blue";

}

MyNewButton.onclick = Change;

*/


//====================================================================

window.onload = function() {

    'use strict';
     console.log("window is loaded");

}

window.onresize = function() {

    'use strict';
     console.log("window is resized");
}

window.onscroll = function() {

    'use strict';
     console.log("window is scrolled");
}

//====================================================================  


var myElement4 = document.getElementById('main2'),
    myInput = document.getElementById('input1'),
    myNotice = document.getElementById('notice');

    myInput.onfocus = function() {

        'use strict';
        myNotice.textContent = "Enter strong password";
    }
    myInput.onblur = function() {

        'use strict';
        myNotice.textContent = "";
        console.log("input value is : " + this.value);
    }

    myElement4.onsubmit = function(e) {

        'use strict';
        e.preventDefault();
        console.log("form is submitted");
    }


//====================================================================

var myElement5 = document.getElementById('main5'),
    myNotice2 = document.getElementById('notice2');

    myElement5.onclick = function(e) {

        'use strict';
        myNotice2.textContent = "You clicked on the main5 element";
    }

    myElement5.ondblclick = function(e) {

        'use strict';
        myNotice2.textContent = "You double clicked on the main5 element";
    }

    myElement5.oncontextmenu = function(e) {

        'use strict';
        e.preventDefault();
        myNotice2.textContent = "You right clicked on the main5 element";
    }

    myElement5.onmouseenter = function(e) {

        'use strict';
        myNotice2.textContent = "You entered the main5 element";
    }

    myElement5.onmouseleave = function(e) {

        'use strict';
        myNotice2.textContent = "You moved the mouse out of the main5 element";
    }

//====================================================================

var myElement6 = document.getElementById('main6'),
    myInput3 = document.getElementById('inputMain6'),
    myNotice3 = document.getElementById('notice3');

    myInput3.onkeydown = function(e) {

        'use strict';
        myNotice3.textContent = "You down the " + e.key + " key";
        console.log("You down the " + e.key + " key");
    }

    // onkey [up - onkey down]  بيودي علي الكيبورد

    myInput3.onkeyup = function(e) {

        'use strict';
        myNotice3.textContent = "You released the " + e.key + " key";
            console.log("You released the " + e.key + " key");
    }

    myInput3.onkeypress = function(e) {

        'use strict';
        myNotice3.textContent = "You pressed the " + e.key + " key";
            console.log("You pressed the " + e.key + " key");
    }



//====================================================================