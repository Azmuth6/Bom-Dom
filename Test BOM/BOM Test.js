/*

var ask = window.confirm("Do you want to proceed?");

if (ask) {
    alert("You chose to proceed.");
} else {
    alert("You chose to cancel.");
}

var userInput = prompt("Please enter your name:", "ex");

if (userInput !== null && userInput !== "ex" ) {
    alert("Hello, " + userInput + "!");
}
else {
    alert("No name entered.");
}

*/

//=======================================================================

var button = document.getElementById("Click");

/*

function WriteMessage()
{
    window.console.log("Hello after 3 seconds!");
}

var MyTime = setTimeout(WriteMessage, 3000);

button.onclick = function() {
    clearTimeout(MyTime);
    window.console.log("Timer stopped.");
}

*/

/*

var MyDiv = document.getElementById("show"),
MyTime;

function CountDown()
{
   if(MyDiv.textContent <= 0)
   {
        MyDiv.textContent = "Time's up!";
        clearInterval(MyTime);
   }
    else
    {
        MyDiv.textContent = MyDiv.textContent - 1;
    }

}

var MyTime = setInterval(CountDown, 1000);

button.onclick = function() {
    clearInterval(MyTime);
    window.console.log("Timer stopped.");
}

*/

var OpenButton = document.getElementById("Open");

OpenButton.onclick = function() {
    window.open("https://www.google.com", "_blank",
         "width=400,height=400,Top=200,Left=200,menubar=no,status=yes" , "false");
}



//=======================================================================

/*

document.getElementById('scroll').onclick = function () {

'use strict';

window.scrollTo(500, 250);

window.console. log('Window Scrolled Left ' + window. scrollX);

window.console. log('Window Scrolled Top ' + window. scrollY);

}

*/


//=======================================================================

//window.stop(); بيوقف تحميل الصفحة

//window.close(); بيقفل الصفحة الحالية

//window.focus(); بيخلي الصفحة الحالية في المقدمة


//========================================================================

//widow.innerWidth; بيجيب عرض نافذة المتصفح
//window.outerWidth; بيجيب عرض الشاشة كاملة

//window.innerHeight; بيجيب ارتفاع نافذة المتصفح
//window.outerHeight; بيجيب ارتفاع الشاشة كاملة

//========================================================================

// pageXOffset, pageYOffset

//window.pageXOffset; بيجيب المسافة اللي تم تمريرها أفقياً
//window.pageYOffset; بيجيب المسافة اللي تم تمريرها عمودياً


//========================================================================

/*
location.href; بيجيب عنوان الصفحة الحالية
-Absolute URL: https://www.example.com/page.html
-page Within the Current Website: /about.html
-Hash id within the page: #section1
-Protocol: FTP, HTTP, HTTPS

*/



//========================================================================


//HOST , HASH

//location.host; بيجيب اسم المضيف (الموقع) الحالي
//location.hash; بيجيب الجزء اللي بعد # في العنوان الحالي


//========================================================================

// Protocol, Search, Pathname

//location.protocol; بيجيب البروتوكول المستخدم (مثل http: أو https:)
//location.search; بيجيب الجزء اللي بعد ? في العنوان الحالي (عادةً يستخدم لتمرير البيانات)
//location.pathname; بيجيب المسار الكامل للصفحة الحالية (مثل /folder/page.html)

// URL = protocol + "//" + host + pathname + search + hash


//========================================================================

//Reload, Replace, Assign

//location.reload(); بيعيد تحميل الصفحة الحالية من الكاش الي في الموقع  و هو افتراضي  False
//location.replace(True); بيعيد تحميل الصفحة الحالية من السيرفر

//location.assign("https://www.example.com"); بيحول المستخدم إلى عنوان URL جديد

//location.replace("https://www.example.com"); بيحول المستخدم إلى عنوان URL جديد بدون حفظ الصفحة الحالية في تاريخ المتصفح (لا يمكن العودة إليها باستخدام زر الرجوع)


//========================================================================



//Back, Forward, Go

//history.back(); بيعود إلى الصفحة السابقة في تاريخ المتصفح
//history.forward(); بيذهب إلى الصفحة التالية في تاريخ المتصفح (إذا كان هناك صفحة تالية)
//history.go(-1); بيعود إلى الصفحة السابقة (يمكن استخدام أعداد أخرى للانتقال إلى صفحات أخرى في التاريخ، مثل history.go(2) للذهاب إلى الصفحة التالية)


//========================================================================

window. console.log(navigator.appCodeName);
window. console.log(navigator.appName);
window. console.log(navigator.appVersion);
window. console. log(navigator.platform);
window. console.log(navigator.cookieEnabled);
window. console.log(navigator.language);
window.console. log(navigator.onLine);
window. console. log(navigator.product);

//========================================================================

console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

//========================================================================

//document.cookie; بيجيب الكوكيز المخزنة في المتصفح للصفحة الحالية

//document.cookie = "key=value; expires=Date; path="; بيستخدم لإنشاء أو تحديث كوكيز في المتصفح، حيث key هو اسم الكوكيز، value هو قيمته، expires لتحديد تاريخ انتهاء الصلاحية، و path لتحديد المسار الذي يكون فيه الكوكيز متاحًا.

//for deleting a cookie, you can set the expires attribute to a past date, like this:
//document.cookie = "key=value; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//========================================================================