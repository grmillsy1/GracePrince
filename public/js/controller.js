// first function is to get the background colour to change at a trigger point.

$(function() {
  var controller = new ScrollMagic.Controller();

  var firstCeppoTween = TweenMax.to('#lin-2nd-line', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var firstScene = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    offset: 400,
    duration: 200
  })
    .setTween(firstCeppoTween)
    // .addIndicators()
    .addTo(controller);

  var secondCeppoTween = TweenMax.to('#lin-3rd-line', 1, {
    transform: 'translate3d(0, -500px, 0)'
  })
  var secondScene = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    offset: 400,
    duration: 200
  })
  .setTween(secondCeppoTween)
  // .addIndicators()
  .addTo(controller);

  var fourBCeppoTween = TweenMax.to('#lin-4b', 1, {
    transform: 'translate3d(0, 500px, 0)'
  })
  var thirdScene = new ScrollMagic.Scene({
    triggerElement: '#lin-4th-line',
    offset: 500,
    duration: 600
  })
    .setTween(fourBCeppoTween)
    // .addIndicators()
    .addTo(controller);

  var sixBCeppoTween = TweenMax.to('#lin-6b', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var fourthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-6th-line',
    offset: 400,
    duration: 300
  })
    .setTween(sixBCeppoTween)
    // .addIndicators()
    .addTo(controller);

  var sevenCeppoTween = TweenMax.to('#lin-7', 1, {
    transform: 'translate3d(800px, 400px, 0)'
  })
  var fithScene = new ScrollMagic.Scene({
    triggerElement: '#lin-7th-line',
    offset:200,
    duration: 300
  })
    .setTween(sevenCeppoTween)
    // .addIndicators()
    .addTo(controller);

  var sixthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    triggerHook: 0,
    duration: 300
  })
    .setPin("#lin-9th-line", {pushFollowers: true})
    .addTo(controller);
});
