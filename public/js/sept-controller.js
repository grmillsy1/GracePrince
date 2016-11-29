$(function() {
  var controller = new ScrollMagic.Controller();

  var twelthScene = new ScrollMagic.Scene({
    triggerElement: '#sept-2nd-line',
    triggerHook: 0,
    offset: 160,
    duration: 650
  })
    .setPin("#sept-2nd-line", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);

  var thirteenthScene = new ScrollMagic.Scene({
    triggerElement: '#sept-4th-line',
    triggerHook: 0,
    offset: 160,
    duration: 1000
  })
    .setPin("#sept-4th-line", {pushFollowers: true})
    .addIndicators()
    .addTo(controller);

    var fourACeppoTween = TweenMax.to('#scolpire-4a', 1, {
      transform: 'translate3d(-550px, 0, 0)'
    })
    var fourACeppoSceneTween = new ScrollMagic.Scene({
      triggerElement: '#sept-4th-line',
      triggerHook: 0,
      offset: 160,
      duration: 1000
    })
      .setTween(fourACeppoTween)
      .addIndicators()
      .addTo(controller);

    var fourBCeppoTween = TweenMax.to('#scolpire-4b', 1, {
      transform: 'translate3d(0, -550px, 0)'
    })
    var fourBCeppoSceneTween = new ScrollMagic.Scene({
      triggerElement: '#sept-4th-line',
      triggerHook: 0,
      offset: 160,
      duration: 1000
    })
      .setTween(fourBCeppoTween)
      .addIndicators()
      .addTo(controller);

  var fiveACeppoTween = TweenMax.to('#scolpire-5a', 1, {
    transform: 'translate3d(0, 100px, 0)'
  })
  var fiveACeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#sept-5th-line',
    triggerHook: 0,
    duration: 150
  })
    .setTween(fiveACeppoTween)
    .addIndicators()
    .addTo(controller);

  var fourteenthScene = new ScrollMagic.Scene({
    triggerElement: '#sept-7th-line',
    triggerHook: 0,
    offset: 230,
    duration: 1000
  })
    .setPin("#sept-7th-line", {pushFollowers: true})
    .addIndicators()
    .addTo(controller);
  var sevenCeppoTween = TweenMax.to('#scolpire-7', 1, {
    transform: 'translate3d(-900px, 0, 0)'
  })
  var sevenCeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#sept-7th-line',
    triggerHook: 0,
    offset: 230,
    duration: 1000
  })
    .setTween(sevenCeppoTween)
    .addIndicators()
    .addTo(controller);

    var fifthteenthScene = new ScrollMagic.Scene({
      triggerElement: '#sept-8th-line',
      triggerHook: 0,
      offset: 200,
      duration: 1000
    })
      .setPin("#sept-8th-line", {pushFollowers: true})
      .addIndicators()
      .addTo(controller);
    var eightCeppoTween = TweenMax.to('#scolpire-8', 1, {
      transform: 'translate3d(-900px, 0, 0)'
    })
    var eightCeppoSceneTween = new ScrollMagic.Scene({
      triggerElement: '#sept-8th-line',
      triggerHook: 0,
      offset: 200,
      duration: 1000
    })
      .setTween(eightCeppoTween)
      .addIndicators()
      .addTo(controller);


  var sixteenthScene = new ScrollMagic.Scene({
    triggerElement: '#sept-8a-line',
    triggerHook: 0,
    offset: -30,
    duration: 550
  })
    .setPin("#sept-8a-line", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);

  var seventeenthScene = new ScrollMagic.Scene({
    triggerElement: '#sept-10th-line',
    triggerHook: 0,
    offset: 150,
    duration: 1000
  })
    .setPin("#sept-10th-line", {pushFollowers: true})
    .addIndicators()
    .addTo(controller);

  var tenCeppoTween = TweenMax.to('#scolpire-10', 1, {
    transform: 'translate3d(1150px, 0, 0)'
  })
  var tenCeppoSceneTween = new ScrollMagic.Scene({
    triggerElement: '#sept-10th-line',
    triggerHook: 0,
    offset: 150,
    duration: 1000
  })
    .setTween(tenCeppoTween)
    .addIndicators()
    .addTo(controller);

});
