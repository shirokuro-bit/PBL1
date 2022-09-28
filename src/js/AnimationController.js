const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#test1",
  triggerHook: 'onEnter',
  offset: 200,
  duration: 1000,
  reverse: true,
}).setPin("#test1", {pushFollowers: false})
  .addIndicators({name: "ScrollMagicAnim1"})

const AnimationController = () => {
  scene.addTo(controller);
}
