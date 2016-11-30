  // document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
  //
  // var mediaPlayer;
  //
  // function initialiseMediaPlayer() {
  //    mediaPlayer = document.getElementById('video-selector');
  //    mediaPlayer.controls = false;
  // }

$('#video-selector').click(function(){
   window.location.href= '/index';
})
//
// $('.expand-one').click(function(){
//     $('.content-one').slideToggle('slow');
// });

// $(function() {
//     $('.toggler').click(function() {
//         $(this).find('div').slideToggle();
//     });
// });

$('a.button').on('click', function(){
  $('.wrap, a.button').toggleClass('active');

  return false;
});

$('a.button2').on('click', function(){
  $('.wrap2, a.button2').toggleClass('active');

  return false;
});



// http://jsfiddle.net/Q4PUw/2/
