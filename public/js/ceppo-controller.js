

if ($( window ).width() >= 1024) {
    $(function() {
      var controller = new ScrollMagic.Controller();
      controller.enabled(true)

    var ninthScene = new ScrollMagic.Scene({
      triggerElement: '#second-line',
      triggerHook: 0,
      duration: 1130,
      offset: 160
    })
      .setPin("#second-line", {pushFollowers: false})
      // .addIndicators()
      .addTo(controller);
    var twoCeppoTween = TweenMax.to('#ceppo-2', 3, {
      transform: 'translate3d(650px, 0, 0)'
    })
    var twoCeppoSceneTween = new ScrollMagic.Scene({
      triggerElement: '#second-line',
      triggerHook: 0,
      duration: 900,
      offset: 250
    })
      .setTween(twoCeppoTween)
      // .addIndicators()
      .addTo(controller);
    var tenthScene = new ScrollMagic.Scene({
      triggerElement: '#third-line',
      triggerHook: 0,
      duration: 850,
      offset: 160
    })
      .setPin("#third-line", {pushFollowers: false})
    //  .addIndicators()
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
    //  .addIndicators()
      .addTo(controller);

    var eleventhScene = new ScrollMagic.Scene({
      triggerElement: '#fith-line',
      triggerHook: 0,
      offset: 160,
      duration: 2000
    })
      .setPin("#fith-line", {pushFollowers: true})
    //  .addIndicators()
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
    //  .addIndicators()
      .addTo(controller);

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
    //    .addIndicators()
        .addTo(controller);

    var twelthScene = new ScrollMagic.Scene({
      triggerElement: '#sept-2nd-line',
      triggerHook: 0,
      offset: 160,
      duration: 500
    })
      .setPin("#sept-2nd-line", {pushFollowers: false})
    //  .addIndicators()
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
    //  .addIndicators()
      .addTo(controller);

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
    //  .addIndicators()
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
