
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
    .setTween(sixBLineaTween)
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

    // scenes 9 - ... are for Ceppo

  var ninthScene = new ScrollMagic.Scene({
    triggerElement: '#second-line',
    triggerHook: 0,
    duration: 1550,
    offset: 160
  })
    .setPin("#second-line", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);
  var twoCeppoTween = TweenMax.to('#ceppo-2', 3, {
    transform: 'translate3d(600px, 0, 0)'
  })
  var twoCeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#second-line',
    triggerHook: 0,
    duration: 900,
    offset: 250
  })
    .setTween(twoCeppoTween)
    .addIndicators()
    .addTo(controller);
  var tenthScene = new ScrollMagic.Scene({
    triggerElement: '#third-line',
    triggerHook: 0,
    duration: 850,
    offset: 160
  })
    .setPin("#third-line", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);

  var threeBCeppoTween = TweenMax.to('#ceppo-3b', 1, {
    transform: 'translate3d(0, -600px, 0)'
  })
  var threeACeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#third-line',
    triggerHook: 0,
    duration: 900,
    offset: 170
  })
    .setTween(threeBCeppoTween)
    .addIndicators()
    .addTo(controller)

  var eleventhScene = new ScrollMagic.Scene({
    triggerElement: '#fith-line',
    triggerHook: 0,
    offset: 160,
    duration: 2000
  })
    .setPin("#fith-line", {pushFollowers: true})
    .addIndicators()
    .addTo(controller);

  var fiveCeppoTween = TweenMax.to('#ceppo-5', 1, {
    transform: 'translate3d(740px, 0, 0)'
  })
  var fiveCeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#fith-line',
    triggerHook: 0,
    duration: 700,
    offset: 170
  })
    .setTween(fiveCeppoTween)
    .addIndicators()
    .addTo(controller)

    var fiveCeppoTween2 = TweenMax.to('#ceppo-5', 1, {
      transform: 'translate3d(1900px, 0, 0)'
    })
    var fiveCeppoSceneTween2 = new ScrollMagic.Scene({
      triggerElement: '#fith-line',
      triggerHook: 0,
      duration: 1600,
      offset: 1070
    })
      .setTween(fiveCeppoTween2)
      .addIndicators()
      .addTo(controller)

  var twelthScene = new ScrollMagic.Scene({
    triggerElement: '#seventh-line',
    triggerHook: 0,
    offset: 160,
    duration: 1500
  })
    .setPin("#seventh-line", {pushFollowers: true})
    .addIndicators()
    .addTo(controller);

  var sevenACeppoTween = TweenMax.to('#ceppo-7a', 1, {
    transform: 'translate3d(-700px, 0, 0)'
  })
  var sevenACeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#seventh-line',
    triggerHook: 0,
    duration: 1500,
    offset: 170
  })
    .setTween(sevenACeppoTween)
    .addIndicators()
    .addTo(controller)

  var sevenBCeppoTween = TweenMax.to('#ceppo-7b', 1, {
    transform: 'translate3d(700px, 0, 0)'
  })
  var sevenBCeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#seventh-line',
    triggerHook: 0,
    duration: 1500,
    offset: 170
  })
    .setTween(sevenBCeppoTween)
    .addIndicators()
    .addTo(controller)
});
