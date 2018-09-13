
var myHeading = document.querySelector("h1");
myHeading.onclick = function(){
    if(myHeading.textContent === "陈思很帅")
    {
        myHeading.textContent = "Hello World";

    }else{
        myHeading.textContent = "陈思很帅";

    }
}
var myImage = document.querySelector("img");
myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/dog1.jpg"){
        myImage.setAttribute("src","images/dog2.jpg");
    }else{
        myImage.setAttribute("src","images/dog1.jpg");
    }
}
var myButton = document.querySelector("button");
function setUserName(){
    var myName = prompt("Please Enter Your Name");
    localStorage.setItem("name",myName);
    myHeading.textContent = "你很酷," + myName;
}
if(!localStorage.getItem("name")){
    setUserName();
} else{
    var storeName = localStorage.getItem("name");
    myHeading.textContent = "你很酷," + storeName;
}
myButton.onclick = function(){
    setUserName();
}