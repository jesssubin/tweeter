/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
 

  const data = [
    {
      "user": {
        "name": "Einstein",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@Lightbulb"
      },
      "content": {
        "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function (tweetData) {
    const $tweet = $(`<article class="tweet-container">
          <div class="user-info">
            <div class="unhidden">
            <img class="usericon" src="${tweetData.user.avatars}"/>
            <p class="username">${tweetData.user.name}</p>
            </div>
            <p class="userid">${tweetData.user.handle}</p>
          </div>
          <div class="tweet-txt">
            <p class="tweet-content">${tweetData.content.text}</p>
            <p class="bottom-border"></p>
          </div>
          <footer class="footer" >
            <p class="date-update"> 10 days ago</p>
            <div class="icons">
            <i class="fa fa-flag fa-xs"></i>
            <i class="fa fa-retweet fa-xs"></i>
            <i class="fa fa-heart fa-xs"></i>
            </div>
          </footer>
        </article> `);
    return $tweet;
  }

  const renderTweets = function (tweets) {
    let $element; 
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      $element = createTweetElement(tweet); 
      // takes return value and appends it to the tweets container
      $('#tweets-section').append($element);
    }
  
  }

  renderTweets(data); 

});