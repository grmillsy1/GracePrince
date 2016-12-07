
if ($( window ).width() >= 1024) {
  $(function() {
    var controller = new ScrollMagic.Controller();
    controller.enabled(true)

  var firstScenePin = new ScrollMagic.Scene({
    triggerElement: '#lin-2nd-line',
    triggerHook: 0,
    offset: 150,
    duration: 1100
  })
    .setPin("#lin-2nd-line", {pushFollowers: false})
  //  .addIndicators()
    .addTo(controller);

    var firstLineaTween = TweenMax.to('#lin-2b', 1, {
      transform: 'translate3d(-900px, 0, 0)'
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

    var firstLineaTween2 = TweenMax.to('#lin-2a', 1, {
      transform: 'translate3d(1200px, 0, 0)'
    })
    var firstScene2 = new ScrollMagic.Scene({
      triggerElement: '#lin-2nd-line',
      triggerHook: 0,
      offset: 150,
      duration: 1000
    })
      .setTween(firstLineaTween2)
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

      $(window).on("resize", function(e) {
        if ($(window).width() < 1020 && controller.enabled()) {
          controller.enabled(false);
          console.log('resized')
        } else if (!controller.enabled()) {
          controller.enabled(true);
        }
        controller.update(true);
      });

  });
}
