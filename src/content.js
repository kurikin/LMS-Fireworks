import "./style.css";
import { Fireworks } from "fireworks-js";

window.addEventListener("load", (_) => {
  const container = document.querySelector("#cs_loginInfo");

  const fireworks = new Fireworks(container, {
    rocketsPoint: 50,
    hue: { min: 0, max: 360 },
    delay: { min: 7, max: 15 },
    speed: 1.5,
    acceleration: 1.02,
    friction: 0.96,
    gravity: 1.1,
    particles: 230,
    trace: 3,
    explosion: 130,
    autoresize: true,
    brightness: {
      min: 50,
      max: 85,
      decay: { min: 0.015, max: 0.03 },
    },
    boundaries: {
      x: 50,
      y: 50,
      width: container.clientWidth,
      height: container.clientHeight,
    },
    sound: {
      enable: false,
    },
  });

  fireworks.start();

  window.alert("課題お疲れさま！花火を楽しんでね！");
});
