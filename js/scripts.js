$(document).ready(function() {
  // $("#flavors").submit(function() {
  var flavors = ["vanilla", "chocolate", "strawberry", "rocky-road"];

    flavors.forEach(function(flavor) {
      $("." + flavor).text("I like " + flavor);

    });

  });
// });
