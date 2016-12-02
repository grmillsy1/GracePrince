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


$('a.button').on('click', function(){
  $('.wrap, a.button').toggleClass('active');

  return false;
});

$('a.button2').on('click', function(){
  $('.wrap2, a.button2').toggleClass('active');

  return false;
});

$(window).on("resize", function(e) {
  if ($(window).width() < 1000 && controller.enabled()) {
    controller.enabled(false);
    console.log('resized')
  } else if (!controller.enabled()) {
    controller.enabled(true);
  }
  controller.update(true);
});



// http://jsfiddle.net/Q4PUw/2/
