
$(function() {
  var controller = new ScrollMagic.Controller();
//Scenes 1-8 are for Linea

var firstScenePin = new ScrollMagic.Scene({
  triggerElement: '#lin-2nd-line',
  triggerHook: 0,
  offset: 200,
  duration: 300
})
  .setPin("#lin-2nd-line", {pushFollowers: true})
  // .addIndicators()
  .addTo(controller);

  var firstLineaTween = TweenMax.to('#lin-2nd-line', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var firstScene = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    offset: 450,
    duration: 200
  })
    .setTween(firstLineaTween)
    // .addIndicators()
    .addTo(controller);

  var secondLineaTween = TweenMax.to('#lin-3rd-line', 1, {
    transform: 'translate3d(0, -500px, 0)'
  })
  var secondScene = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    offset: 400,
    duration: 200
  })
    .setTween(secondLineaTween)
    // .addIndicators()
    .addTo(controller);

  var fourBLineaTween = TweenMax.to('#lin-4b', 1, {
    transform: 'translate3d(0, 500px, 0)'
  })
  var thirdScene = new ScrollMagic.Scene({
    triggerElement: '#lin-4th-line',
    offset: 500,
    duration: 600
  })
    .setTween(fourBLineaTween)
    // .addIndicators()
    .addTo(controller);

  var sixBLineaTween = TweenMax.to('#lin-6b', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var fourthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-6th-line',
    offset: 400,
    duration: 300
  })
    .setTween(sixBCLineaTween)
    // .addIndicators()
    .addTo(controller);


  var sevenLineaTween = TweenMax.to('#lin-7', 1, {
    transform: 'translate3d(800px, 400px, 0)'
  })
  var fithScene = new ScrollMagic.Scene({
    triggerElement: '#lin-7th-line',
    offset:200,
    duration: 300
  })
    .setTween(sevenLineaTween)
    // .addIndicators()
    .addTo(controller);

  var sixthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    duration: 300,
    offset: 400
  })
    .setPin("#lin-9th-line", {pushFollowers: true})
    // .addIndicators()
    .addTo(controller);

  var nineALineaTween = TweenMax.to('#lin-9a', 1, {
    transform: 'translate3d(800px, -400px, 0)'
  })
  var sixthSceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    duration: 300,
    offset: 400
  })
    .setTween(nineALineaTween)
    // .addIndicators()
    .addTo(controller);

  var nineBLineaTween = TweenMax.to('#lin-9b', 1, {
    transform: 'translate3d(-1200px, 400px, 0)'
  })
  var sixthSceneTweenB = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    duration: 300,
    offset: 400
  })
    .setTween(nineBLineaTween)
    // .addIndicators()
    .addTo(controller);

var seventhScene = new ScrollMagic.Scene({
  triggerElement: '#lin-11th-line',
  triggerHook: 0,
  offset: 250,
  duration: 300
})
  .setPin("#lin-11th-line", {pushFollowers: true})
  // .addIndicators()
  .addTo(controller);

  var elevenLineaTween = TweenMax.to('#lin-11', 1, {
    transform: 'translate3d(800px, 800px, 0)'
  })
  var seventhSceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-11th-line',
    duration: 300,
    triggerHook: 0,
    offset: 350
  })
    .setTween(elevenLineaTween)
    // .addIndicators()
    .addTo(controller);

var eigthScene = new ScrollMagic.Scene({
  triggerElement: '#lin-12th-line',
  triggerHook: 0,
  duration: 300
})
  .setPin("#lin-12th-line", {pushFollowers: true})
  // .addIndicators()
  .addTo(controller);

  var twelveALineaTween = TweenMax.to('#lin-12a', 1, {
    transform: 'translate3d(-800px, 0, 0)'
  })
  var twelveASceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-12th-line',
    duration: 300,
    triggerHook: 0,
    offset: 50
  })
    .setTween(twelveALineaTween)
    // .addIndicators()
    .addTo(controller);

  var twelveBLineaTween = TweenMax.to('#lin-12b', 1, {
    transform: 'translate3d(-1000px, 0, 0)'
  })
  var twelveBSceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-12th-line',
    duration: 300,
    triggerHook: 0,
    offset: 120
  })
    .setTween(twelveBLineaTween)
    // .addIndicators()
    .addTo(controller);
});
