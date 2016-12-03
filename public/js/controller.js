
  var myVar;

  function myFunction() {
      myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

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





// http://jsfiddle.net/Q4PUw/2/
