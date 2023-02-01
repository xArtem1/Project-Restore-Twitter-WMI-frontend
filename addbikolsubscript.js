// ==UserScript==
// @name         addbikolsubscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/questions/39110253/make-bootstrap-modal-work-with-another-website-using-greasemonkey-tampermonkey
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js
// @require     https://qdenya.com/luba/script1.js?2
// @require     https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
// @resource    buttonCSS https://raw.githubusercontent.com/necolas/css3-github-buttons/master/gh-buttons.css
// @resource    bootstrapCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
// @resource    githubButtonIconSet https://raw.githubusercontent.com/necolas/css3-github-buttons/master/gh-icons.png
// @resource   IMPORTED_CSS_LIB https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css
// @resource   IMPORTED_CSS https://qdenya.com/luba/style.css?8
// @grant      GM_getResourceText
// @grant      GM_addStyle

// @match       https://twitter.com/*
// ==/UserScript==

(function() {
    'use strict';
    var run = function(){
        var tweets = document.querySelectorAll(".css-1dbjc4n.r-1loqt21.r-18u37iz.r-1ny4l3l.r-1udh08x.r-1qhn6m8.r-i023vh.r-o7ynqc.r-6416eg");
        for (let i = 0; i < tweets.length; i++){
            addButton(tweets[i])
        }
        setTimeout(run, 1000);
    }

    var addButton = function(tweet){
        var topBar = tweet.querySelector(".css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep");
        var currentAddButton = tweet.querySelector(".add_button");
        if (currentAddButton == null){
            var newElement = document.createElement("div");
            newElement.className = "add_button";
            newElement.innerText = "+ Dodaj";
            topBar.appendChild(newElement);
        }
    };

    setTimeout(run, 4000);
})();
