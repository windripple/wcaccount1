// An example Parse.js Backbone application based on the todo app by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses Parse to persist
// the todo items and provide user authentication and sessions.

$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("pGiNczoovDgDr8hOUMdG2D6dLzYxK3nFNIvuvFR7",
                   "yI13wkVZtoBLlazdaJ5wDEjQXusVfD6Pwj5KnkGf");


  var AppState = Parse.Object.extend("userdata", {
    defaults: {
      filter: "all"
    }
  });

  var query = new Parse.Query(AppState);
  query.get("roweqjhojc@inmsf.co.jp", {
      success: function (res) {
          alert(res);
      },
      error: function (object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and message.
      }
  });


});
