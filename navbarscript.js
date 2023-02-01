// ==UserScript==
// @name         navbarscript
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
         var navigationHome = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(1)');
         var homeParent = navigationHome.parentElement;
         homeParent.removeChild(navigationHome);

         //var navigationTweet = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-1p6iasa.r-e7q0ms');
         //var tweetParent = navigationTweet.parentElement;
         //tweetParent.removeChild(navigationTweet);

         var navigationMore = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > div');
         var moreParent = navigationMore.parentElement;
         moreParent.removeChild(navigationMore);

         var navigationProfile = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(4)');
         var profileParent = navigationProfile.parentElement;
         profileParent.removeChild(navigationProfile);

         var navigationMessages = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(3)');
         var messagesParent = navigationMessages.parentElement;
         messagesParent.removeChild(navigationMessages);

        var notification = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(2) > div > div.css-1dbjc4n');
        var notificationText = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-15zivkp.r-1bymd8e.r-13qz1uu > nav > a:nth-child(2) > div > div.css-901oao.css-1hf3ou5.r-18jsvk2.r-37j5jr.r-adyw6z.r-b88u0q.r-135wba7.r-1joea0r.r-88pszg.r-bcqeeo.r-qvutc0 > span');
         notification.innerHTML = '<svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="13" height="17" rx="2" stroke="black" stroke-width="2"/><path d="M6 6H22M18 1L23 6L18 11" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>';
         notificationText.innerHTML = "Swipe Mode";
         }

         setTimeout(run, 500);
})();