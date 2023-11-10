gsap.from("#page1 #box1", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
gsap.from("#page2 #box2", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box2",
    scroller: "body",
    markers:true,
    start:"top 50%",
    end:"top 30%",
    scrub:3,  //0 to 5 gives smoothness 
  },
});


