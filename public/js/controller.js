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
  $('.wrap, a').toggleClass('active');

  return false;
});


// http://jsfiddle.net/Q4PUw/2/
