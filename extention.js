// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/questions/39110253/make-bootstrap-modal-work-with-another-website-using-greasemonkey-tampermonkey
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require     https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
// @resource    buttonCSS https://raw.githubusercontent.com/necolas/css3-github-buttons/master/gh-buttons.css
// @resource    bootstrapCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
// @resource    githubButtonIconSet https://raw.githubusercontent.com/necolas/css3-github-buttons/master/gh-icons.png
// @match       https://twitter.com/*
// ==/UserScript==

(function() {
    'use strict';

    var run = function(){
        var mainContent = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div');
        if (mainContent == null){
            mainContent = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div');
        }
        var contentParent = mainContent.parentElement;
        contentParent.removeChild(mainContent);

        var navigationHome = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(1)');
        var homeParent = navigationHome.parentElement;
        homeParent.removeChild(navigationHome);

        var navigationTweet = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-1p6iasa.r-e7q0ms');
        var tweetParent = navigationTweet.parentElement;
        tweetParent.removeChild(navigationTweet);

        var navigationMore = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > div');
        var moreParent = navigationMore.parentElement;
        moreParent.removeChild(navigationMore);

        var navigationProfile = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(4)');
        var profileParent = navigationProfile.parentElement;
        profileParent.removeChild(navigationProfile);

        var navigationMessages = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(3)');
        var messagesParent = navigationMessages.parentElement;
        messagesParent.removeChild(navigationMessages);

        var newElement = document.createElement('button');
        newElement.innerText = 'test';
        contentParent.appendChild(newElement);
        document.addEventListener('keydown', (event) =>{
            if (event.code == 'ArrowRight'){
                newElement.innerText = 'Kliknięto prawą strzałkę';
            }
        });
    }

    setTimeout(run, 5000);
})();
