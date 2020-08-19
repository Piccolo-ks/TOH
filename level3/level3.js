'use strict';

$(function(){

  // $('[data-block]').draggable();
//

// ['data-stack=3'].insertAdjacentHTML('afterEnd', '<button onclick="resetButton()" id="reset" type="button">Reset</button>');

  $('[data-block]').draggable({
    revert: 'invalid'
  });
  $('[data-stack]').droppable({
    drop: function(event, ui){
      let $last = ($(this).children().last()).data('block');
      let $dragging = $(ui.draggable).data('block');
      if($dragging > $last){
        $(ui.draggable).draggable('option', 'revert', true);
      }else{
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
      }
      checkWin();
      //checks winning condition after each drop
  }
  });

  function checkWin(){
    console.log($('[data-stack=3] div').length)
    if($('[data-stack=3] div').length === 6){
      $('#announce-game-won').after('<button><a href="level2/level2.html">LEVEL 3</a></button>');
      // alert('User Wins!');
    }
    }
    $('[data-stack=3]').after('<input type="button" id="resetButton" value="Reset"/>'
  );

    $('#resetButton').click(function(){
        location.reload();
      })

    })
