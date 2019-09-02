

$( document ).ready(function() {
    console.log( "ready!" );
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * Math.floor(max));
    //   }
      var number
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
var one
var two
 var three
var four
var score
var updatedScore = 0
    function getNumbers(){
        number = getRandomInt(10, 50);
     one = getRandomInt(1, 10);
     two = getRandomInt(1, 10);
     three = getRandomInt(1, 10);
     four = getRandomInt(1, 10);
     score = 0;
     $('#number').text(number)
     $('#one').val(one);
    $('#two').val(two);
    $('#three').val(three);
    $('#four').val(four);

    }
    getNumbers();
    

    // var score = document.getElementById(score);
    var wins = document.getElementById(wins);
    var losses = document.getElementById(losses);
    $('#number').text(number);
    $('.rocks').click(function(){
        
        var crystal = parseInt($(this).val(), 10);
        updatedScore = score += crystal;
        $('#score').text(updatedScore);
        if(updatedScore>number){
            var updatedLosses = losses += 1;
            score =0;
            $('#score').text(score)
            $('#losses').text(updatedLosses);
            getNumbers();
            // $('#score').text('0');
        }else if(updatedScore===number){
            var updatedWins = wins += 1;
            $('#wins').text(updatedWins)
            getNumbers();
            score =0;
            $('#score').text(score)

        }
    })
});
