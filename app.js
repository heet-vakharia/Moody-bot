const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onstart = () => {
  console.log("Listening");
};
recognition.onresult = (event) => {
  console.log(event);
};
recognition.onend = () => {
  console.log("ended");
};
recognition.start();
const hammerAnimation = () => {
  const tl = new TimelineMax({});
  tl.to("#hammerAnimation", 0.3, {
    opacity: 1,
  });
  tl.set("#hammer", {
    rotate: 50,
    transformOrigin: "bottom",
  });
  tl.add("strike");
  tl.to(
    "#hammer",
    1,
    {
      transformOrigin: "bottom",
      rotate: -8.8,
      ease: Bounce.easeOut,
    },
    "strike"
  );
  tl.to(
    "#nail",
    0.5,
    {
      y: 30,
    },
    "strike+=.3"
  );
  tl.to("#hammerAnimation", 0.3, {
    opacity: 0,
  });
  return tl;
};
const burst = {
  radius: { 5: 100 },
  count: 20,
  children: {
    shape: "cross",
    duration: 2000,
    stroke: ["#230007", "#D7CF07", "#D98324", "#A40606", "#5A0002"],
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
  },
};
const crossBurst = new mojs.Burst({
  ...burst,
});
const Circle = new mojs.Shape({
  radius: { 0: 100 },
  strokeDasharray: "100%",
  strokeDashoffset: { "-100%": "100%" },
  fill: "none",
  angle: { 0: 60 },
  stroke: { "#230007": "#D98324" },
  opacity: { 1: 0 },
  duration: 2500,
});
const circBurst = new mojs.Burst({
  ...burst,
  count: 30,
  radius: { 0: 70 },
  delay: 150,
  children: {
    shape: "circle",
  },
});
const timeline = new mojs.Timeline().add(circBurst, Circle, crossBurst);

const carAnimation = () => {
  const tl = new TimelineMax();
  tl.set("#car", {
    opacity: 1,
    scale: 0.5,
    x: "300%",
  });

  tl.to("#car", 1.5, {
    x: "-300%",
  });
  return tl;
};
carAnimation();
