$(document).ready(function(){
  function getQuote()
  {
    var quotes = ['"Faith: not wanting to know what is true."', '"Remember that no man loses any other life than this which he now lives, nor lives any other than this which he now loses."', '"The longest-lived and the shortest-lived man, when they come to die, lose one and the same thing."','"The more the universe seems comprehensible, the more it seems pointless."', '"Live as long as you please, you will strike nothing off the time you will have to spend dead"'];
    var authors = [" - Friedrich Nietzsche", " - Marcus Aurelius", " - Marcus Aurelius", " - Steven Weinberg", " - Michel de Montaigne" ];
    
    var randomQuote = Math.floor(Math.random()*quotes.length);
    
    var randomQuoteString = quotes[randomQuote];
    var randomAuthor = authors[randomQuote];
    
    $(".quote").text(randomQuoteString);
    $(".author").text(randomAuthor);
    
  };
  
  $(".newQuote").on("click", getQuote);
  
  $("#tweet").on("click", function(){
    
    var tQuote = $(".quote").html();
    var tAuthor = $(".author").html();
    var tweetString = tQuote + tAuthor;
    //alert(tweetString); //test that the string is correct
    
   
    window.open("http://twitter.com/home/?status=" + tweetString);
    
  });
  
  //instead of using additional function
});