/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var slideIndex =0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("fadeout");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";  
    }
    slideIndex++;
    if (slideIndex>slides.length) {
        slideIndex=1;  
    }
    slides[slideIndex-1].style.display="block";
     setTimeout(showSlides,3000);
    
    
}

var next =["JMSN - It is (Album)/1-02 Power.mp3", "JMSN - It is (Album)/1-11 Be a Man.mp3"];
var elm = 0;
var Player = document.getElementById("musicArea");
Player.onended=function(){
    if(++elm<next.length)
    {
        Player.src=next[elm];
        Player.Play();
    }
};

function check()/*function to check userid & password*/
{
    var username = document.getElementById("username").value.toString();
    var password = document.getElementById("password").value.toString();

 /*the following code checkes whether the entered userid and password are matching*/
        if(username === "myuser" && password === "mypassword")
         {
           window.location = "home.html"; /*opens the target page while Id & password matches*/
         }
        else
        {
          alert("Error Password or Username");/*displays error message*/
         }
;}

var sessionTimeout = 1; //hours
var loginDuration = new Date();
loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
document.cookie = "CrewCentreSession=Valid; "+loginDuration.toGMTString()+"; path=/";


// Put this at the top of index page
if (document.cookie.indexOf("CrewCentreSession=Valid") === -1) {
  self.location.href = "/index.html";
}