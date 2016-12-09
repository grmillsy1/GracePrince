
  var myVar;

  function myFunction() {
      myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

// $('#video-selector').click(function(){
//    window.location.href= '/index';
// })

$(function() {
  $('a.button').on('click', function(){
    $('.wrap, a.button').toggleClass('active');
    return false;
  });
  $(document).click(function(){
    $('.wrap, a.button').removeClass('active');
  })
})

$(function() {
  $('a.button2').on('click', function(){
    $('.wrap2, a.button2').toggleClass('active');
    return false;
  });
  $(document).click(function() {
    $('.wrap2, a.button2').removeClass('active');
  })
})


// http://jsfiddle.net/Q4PUw/2/
