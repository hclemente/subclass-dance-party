$(document).ready(function() {
  window.dancers = [];



  var splitDancers = function () {

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof CoolCat) {
        window.dancers[i].lineup(window.dancers[i].top, 25);
      } else if (window.dancers[i] instanceof DopeDogg) {
        window.dancers[i].lineup(window.dancers[i].top, 1700);
      } else {
        window.dancers[i].lineup(0, window.dancers[i].left);
      }
    }
  };

  $('.splitDancers').on('click', function(event) {
    splitDancers();
  });

  $('.lineUpButton').on('click', function(event) {
    // lines up dancers on a random line
    var top = $('body').height() / 2 * Math.random();
    // sets the head of the line
    var left = 25;
    // iterates overs dancers array and calls lineup method on each one
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup(top, left);
      left+= $('window').width / window.dancers.length;
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // adds dancer instance global dancer array
    window.dancers.push(dancer);
  });
});

