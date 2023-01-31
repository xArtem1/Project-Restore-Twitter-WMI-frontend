// ==UserScript==
// @name         contentscript
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

// @match       https://twitter.com/notifications
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("IMPORTED_CSS"));
    GM_addStyle(GM_getResourceText("IMPORTED_CSS_LIB"));

    var run = function(){
        var mainContent = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div');
        if (mainContent == null){
            mainContent = document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div');
        }
        var contentParent = mainContent.parentElement;
        contentParent.removeChild(mainContent);

        //here we get all bikolsubs
        var bikolsubs = null;
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "https://localhost:7213/api/bikolsubs");
        xhr2.onreadystatechange = () =>{
            if (xhr2.readyState === XMLHttpRequest.DONE) {
             if (xhr2.status === 200){
                 bikolsubs = JSON.parse(xhr2.responseText);
             }
          }
        };
        xhr2.send();
        //

       //here we call our API
        const xhr = new XMLHttpRequest();
        const method = "GET";
        const url = "https://localhost:7213/api/tweets";
        var tweets = null;

        xhr.open(method, url, true);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
             if (xhr.status === 200){
                 tweets = JSON.parse(xhr.responseText);
                 swipeMode();
             } else{
                 alert("Something went wrong");
             }
          }
        };
        xhr.send();
       //here we end proccess of fetching tweets

        var swipeMode = function(){
           

        var newElement = document.createElement('button');
        newElement.innerText = 'test';
        contentParent.appendChild(newElement);

        var test4 = `
        <div class="tweets">
        <div class="tweets_container">
            <div class="tweets_wrapper">
                <div class="tweets_swiper swiper">
                    <div class="tweets_swiper_wrapper swiper-wrapper">
                        <div class="tweets_item swiper-slide">
                            <div class="tweets_item_logo"></div>
                            <div class="tweets_item_main">
                                <div class="tweets_item_main_header">
                                    <span class="tweets_item_main_header_name">jim</span>
                                    <span class="tweets_item_main_header_username"></span>
                                    <span class="tweets_item_main_header_time">10s</span>
                                    <div class="tweets_item_main_header_actions">
                                        <div class="tweets_item_main_header_delete">Usuń</div>
                                        <div class="tweets_item_main_header_sale">Sprzedaj</div>
                                    </div>
                                </div>
                                <div class="tweets_item_main_text">
                                    <span></span>
                                </div>
                                <div class="tweets_item_main_footer">
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 12.5V15.5C10.8333 14.3333 16.5 10.9 16.5 6.5C16.5 3 14 1 10.5 1H7.5C4 1 1.5 3 1.5 7C1.5 11 5.83333 12.3333 8 12.5Z" stroke="#536471" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 12C9.33333 12 8.6 12 7 12C5 12 4 10.5 4 9C4 7.8 4 3.83333 4 1.5M4 1.5L1 3.5M4 1.5L7 3.5M10 1C10.8333 1 12.8 1 14 1C15.5 1 16.5 2.5 16.5 3.5C16.5 4.3 16.5 9.5 16.5 12M16.5 12L20 10M16.5 12L13 10" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 5.5C16 8.3 11 12.3333 8.5 14C6 11.8333 1 8 1 5C1 2.5 2.5 1 4.5 1C6.1 1 7.83333 2.66667 8.5 3.5C9.33333 2.66667 10.5 1 12.5 1C14 1 16 2.5 16 5.5Z" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 11C1.5 11.3333 1.5 12.2 1.5 13C1.5 14 2 15 3.5 15C5 15 11 15 12.5 15C14 15 14.5 14 14.5 13C14.5 12.2 14.5 11.3333 14.5 11M8 11.5V2M8 2L4 5.5M8 2L12 5.5" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tweets_item swiper-slide">
                            <div class="tweets_item_logo"></div>
                            <div class="tweets_item_main">
                                <div class="tweets_item_main_header">
                                    <span class="tweets_item_main_header_name"></span>
                                    <span class="tweets_item_main_header_username"></span>
                                    <span class="tweets_item_main_header_time">10s</span>
                                    <div class="tweets_item_main_header_actions">
                                        <div class="tweets_item_main_header_delete">Usuń</div>
                                        <div class="tweets_item_main_header_sale">Sprzedaj</div>
                                    </div>
                                </div>
                                <div class="tweets_item_main_text">
                                    <span>tekst</span>
                                </div>
                                <div class="tweets_item_main_footer">
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 12.5V15.5C10.8333 14.3333 16.5 10.9 16.5 6.5C16.5 3 14 1 10.5 1H7.5C4 1 1.5 3 1.5 7C1.5 11 5.83333 12.3333 8 12.5Z" stroke="#536471" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 12C9.33333 12 8.6 12 7 12C5 12 4 10.5 4 9C4 7.8 4 3.83333 4 1.5M4 1.5L1 3.5M4 1.5L7 3.5M10 1C10.8333 1 12.8 1 14 1C15.5 1 16.5 2.5 16.5 3.5C16.5 4.3 16.5 9.5 16.5 12M16.5 12L20 10M16.5 12L13 10" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 5.5C16 8.3 11 12.3333 8.5 14C6 11.8333 1 8 1 5C1 2.5 2.5 1 4.5 1C6.1 1 7.83333 2.66667 8.5 3.5C9.33333 2.66667 10.5 1 12.5 1C14 1 16 2.5 16 5.5Z" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                        <span>23</span>
                                    </div>
                                    <div class="tweets_item_main_footer_btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 11C1.5 11.3333 1.5 12.2 1.5 13C1.5 14 2 15 3.5 15C5 15 11 15 12.5 15C14 15 14.5 14 14.5 13C14.5 12.2 14.5 11.3333 14.5 11M8 11.5V2M8 2L4 5.5M8 2L12 5.5" stroke="#535D65" stroke-width="1.8" stroke-linecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tweets_nav">
                <div class="tweets_nav_left">
                    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 3.18859C22 0.682428 19.1091 -0.718959 17.1417 0.833456L2.09687 12.7046C0.539867 13.9331 0.582256 16.3074 2.18212 17.4797L17.2269 28.5028C19.2086 29.9548 22 28.5396 22 26.0829V3.18859Z" fill="black"/>
                    </svg>
                </div>
                <div class="tweets_nav_right">
                    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3.18859C0 0.682428 2.89087 -0.718959 4.85832 0.833456L19.9031 12.7046C21.4601 13.9331 21.4177 16.3074 19.8179 17.4797L4.77308 28.5028C2.79136 29.9548 0 28.5396 0 26.0829V3.18859Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
        `;

        contentParent.innerHTML = test4;
        var currentTweet = 0;
        var rightButton = document.querySelector(".tweets_nav_right");
        var leftButton = document.querySelector(".tweets_nav_left");
        var tweetContent = document.querySelector(".tweets_item_main_text");
        var userContent = document.querySelector(".tweets_item_main_header_username");
        var mainHeaderContent = document.querySelector(".tweets_item_main_header_name");
        var loadTweet = function(){
            tweetContent.innerText = tweets[currentTweet].text;
            mainHeaderContent.innerText = tweets[currentTweet].createdBy;
            userContent.innerText = "@" + tweets[currentTweet].createdByScreenName;
        }
        loadTweet();
        var nextTweet = function(){
            if (currentTweet < tweets.length){
                currentTweet = currentTweet + 1;
                loadTweet();
            }
        }
        var prevTweet = function(){
            if (currentTweet > 0){
                currentTweet = currentTweet - 1;
                loadTweet();
            }
        }
        rightButton.addEventListener("click", (event) =>{
             nextTweet();
        });
        leftButton.addEventListener("click", (event) =>{
             prevTweet();
        });

        var deleteButton = document.querySelector(".tweets_item_main_header_delete");
        deleteButton.addEventListener("click", (event) =>{
            var currentUser = userContent.innerText;
            const xhr3 = new XMLHttpRequest();
            var id = bikolsubs.find(e =>{
                return e.username == userContent.innerText;
            }).id;
            xhr3.open("DELETE", "https://localhost:7213/api/bikolsubs/" + id, true);
            xhr3.onreadystatechange = () => {
              if (xhr3.readyState === XMLHttpRequest.DONE) {
                 if (xhr3.status === 204){
                     alert("Succesfully deleted user")
                 } else{
                 alert(xhr3.status);
             }
          }
        };
        xhr3.send();
        });

        document.addEventListener('keydown', (event) =>{
            if(event.key == "ArrowRight"){
                nextTweet();
            } else if (event.key == "ArrowLeft"){
                prevTweet();
            }
        });
      }
    }

    setTimeout(run, 500);
})();