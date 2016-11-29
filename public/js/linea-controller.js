
$(function() {
  var controller = new ScrollMagic.Controller();


var firstScenePin = new ScrollMagic.Scene({
  triggerElement: '#lin-2nd-line',
  triggerHook: 0,
  offset: 150,
  duration: 1000
})
  .setPin("#lin-2nd-line", {pushFollowers: false})
//  .addIndicators()
  .addTo(controller);

  var firstLineaTween = TweenMax.to('#lin-2nd-line', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var firstScene = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    triggerHook: 0,
    offset: 150,
    duration: 1000
  })
    .setTween(firstLineaTween)
  //  .addIndicators()
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

  var sixthlineScenePin = new ScrollMagic.Scene({
    triggerElement: '#lin-6th-line',
    triggerHook: 0,
    offset: 100,
    duration: 1000
  })
    .setPin("#lin-6th-line", {pushFollowers: true})
  //  .addIndicators()
    .addTo(controller);


  var sixBLineaTween = TweenMax.to('#lin-6b', 1, {
    transform: 'translate3d(-1200px, 0, 0)'
  })
  var fourthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-6th-line',
    triggerHook: 0,
    offset: 100,
    duration: 1000
  })
    .setTween(sixBLineaTween)
    // .addIndicators()
    .addTo(controller);

    var sevenlineaScenePin = new ScrollMagic.Scene({
      triggerElement: '#lin-7th-line',
      triggerHook: 0,
      offset: 300,
      duration: 1200
    })
      .setPin("#lin-7th-line", {pushFollowers: true})
    //  .addIndicators()
      .addTo(controller);

    var sevenLineaTween = TweenMax.to('#lin-7', 1, {
      transform: 'translate3d(1000px, 720px, 0)'
    })
    var fithScene = new ScrollMagic.Scene({
      triggerElement: '#lin-7th-line',
      triggerHook: 0,
      offset: 300,
      duration: 1000
    })
      .setTween(sevenLineaTween)
    //  .addIndicators()
      .addTo(controller);

  var sixthScene = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    triggerHook: 0,
    offset: 120,
    duration: 1000
  })
    .setPin("#lin-9th-line", {pushFollowers: true})
  //  .addIndicators()
    .addTo(controller);

  var nineALineaTween = TweenMax.to('#lin-9a', 1, {
    transform: 'translate3d(800px, -400px, 0)'
  })
  var sixthSceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    triggerHook: 0,
    offset: 120,
    duration: 1000
  })
    .setTween(nineALineaTween)
  //  .addIndicators()
    .addTo(controller);

  var nineBLineaTween = TweenMax.to('#lin-9b', 1, {
    transform: 'translate3d(-1200px, 400px, 0)'
  })
  var sixthSceneTweenB = new ScrollMagic.Scene({
    triggerElement: '#lin-9th-line',
    triggerHook: 0,
    offset: 120,
    duration: 1000
  })
    .setTween(nineBLineaTween)
    // .addIndicators()
    .addTo(controller);

var seventhScene = new ScrollMagic.Scene({
  triggerElement: '#lin-11th-line',
  triggerHook: 0,
  offset: 250,
  duration: 1000
})
  .setPin("#lin-11th-line", {pushFollowers: true})
  // .addIndicators()
  .addTo(controller);

  var elevenLineaTween = TweenMax.to('#lin-11', 1, {
    transform: 'translate3d(800px, 800px, 0)'
  })
  var seventhSceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-11th-line',
    duration: 1000,
    triggerHook: 0,
    offset: 350
  })
    .setTween(elevenLineaTween)
    // .addIndicators()
    .addTo(controller);

var eigthScene = new ScrollMagic.Scene({
  triggerElement: '#lin-12th-line',
  triggerHook: 0,
  duration: 1200
})
  .setPin("#lin-12th-line", {pushFollowers: true})
  // .addIndicators()
  .addTo(controller);

  var twelveALineaTween = TweenMax.to('#lin-12a', 1, {
    transform: 'translate3d(-1000px, 0, 0)'
  })
  var twelveASceneTween = new ScrollMagic.Scene({
    triggerElement: '#lin-12th-line',
    duration: 1000,
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
    duration: 1000,
    triggerHook: 0,
    offset: 400
  })
    .setTween(twelveBLineaTween)
    // .addIndicators()
    .addTo(controller);
});
