// TweenLite.defaultEase = Power3.easeInOut;
//
// //responsive timeline animation.
// //values recorded once, nothing changes on resize
// var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
// tl.from(".red", 1, {xPercent:-100, force3D:true})
//   .to(".red", 1, {xPercent:100}, "+=3");
// tl.play(5); //start at 5-seconds in just because it looks better initially (totally subjective).
//
// var $device = $(".device");
// //jQueryUI Slider to simulate change in screen size
// $("#slider").slider({
//   range: false,
//   min: 50,
//   max: 95,
//   step: 0.02,
//   value:70,
//   slide: function ( event, ui ) {
//     $device.css("width", ui.value + "%");
//   }
// });
TweenMax.to(".logo", 8, {left:600});
