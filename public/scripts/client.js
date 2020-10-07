/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $('#tweet-form').submit(submitHandler);

  loadTweets(); 
});

//prevents cross-site scripting 
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}; 

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
            <p class="tweet-content">${escape(tweetData.content.text)}</p>
            <p class="bottom-border"></p>
          </div>
          <footer class="footer" >
            <p class="date-update">${moment(tweetData.created_at).fromNow()}</p>
            <div class="icons">
            <i class="fa fa-flag fa-xs"></i>
            <i class="fa fa-retweet fa-xs"></i>
            <i class="fa fa-heart fa-xs"></i>
            </div>
          </footer>
        </article> `);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    let $element; 
    const $container = $('#tweets-section'); 
    $container.html(""); 
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      $element = createTweetElement(tweet); 
      // takes return value and appends it to the tweets container
      $container.prepend($element);
    }
  };

    const submitHandler = function (event) {
      event.preventDefault();
      const $form = $(this); 
      const text = $("#tweet-text").val(); 
      console.log("text: ", text); 
      if(!text || text.length > 140 || !text.length) {
        alert("Invalid Tweet"); 
        return; 
      }
      console.log('Button clicked, performing ajax call...');
      console.log($(this).serialize()); 
      $.ajax('/tweets', { method: 'POST', data: $form.serialize()})
        .then(function (data) {
          $("#tweet-text").val(""); 
          loadTweets(); 
        });
    };
  
  const loadTweets = function () {
      $.ajax('/tweets', { method: 'GET' })
        .then(function (data) {
          renderTweets(data); 
        });
    };
  
    
    

