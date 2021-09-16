const animation = () => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1" } });

  tl.from("#phone-web-design", {
    xPercent: -30,
    opacity: 0,
    repeat: -1,
    repeatDelay: 13,
  }).to("#phone-web-design", {
    xPercent: +30,
    opacity: 0,
    delay: 6,
    repeat: -1,
    repeatDelay: 13,
  });

  tl.from(
    "#desktop-web-design",
    { xPercent: -50, opacity: 0, repeat: -1, repeatDelay: 13 },
    "-=1"
  ).to("#desktop-web-design", {
    xPercent: +50,
    opacity: 0,
    delay: 6,
    repeat: -1,
    repeatDelay: 13,
  });
};
animation();
