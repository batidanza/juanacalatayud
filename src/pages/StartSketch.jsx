import React, { useState } from "react";
import Sketch from "react-p5";
import { useNavigate } from "react-router-dom";
import logoBlanco from "../assets/logo_blanco.png";
import logoNegro from "../assets/logo_negro.png";

const StartSketch = () => {
  let imgBlanco;
  let imgNegro;
  let stars = [];
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  const preload = (p5) => {
    imgBlanco = p5.loadImage(logoBlanco);
    imgNegro = p5.loadImage(logoNegro);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.imageMode(p5.CENTER);

    for (let i = 0; i < 22520; i++) {
      stars.push(createStar(p5));
    }
  };

  const draw = (p5) => {
    if (!animationComplete) {
      p5.background(0);

      let avgAlpha = 0;

      stars.forEach((star) => {
        p5.stroke(255, star.alpha);
        p5.strokeWeight(star.size);
        p5.point(star.x, star.y);

        star.alpha -= 255 / (p5.frameRate() * 3);
        avgAlpha += star.alpha;

        if (star.alpha <= 0) {
          star.alpha = 0;
        }
      });

      avgAlpha /= stars.length;

      if (avgAlpha <= 0) {
        setAnimationComplete(true);
      }

      const imgWidth = 400;
      const imgHeight = imgBlanco.height * (imgWidth / imgBlanco.width);

      const alphaBlanco = p5.map(avgAlpha, 0, 255, 255, 0);
      const alphaNegro = p5.map(avgAlpha, 0, 255, 0, 255);

      p5.tint(255, alphaNegro);
      p5.image(imgNegro, p5.width / 2, p5.height / 2, imgWidth, imgHeight);

      p5.tint(255, alphaBlanco);
      p5.image(imgBlanco, p5.width / 2, p5.height / 2, imgWidth, imgHeight);
    } else {
      const imgWidth = 400;
      const imgHeight = imgBlanco.height * (imgWidth / imgBlanco.width);
      p5.clear();
      p5.background(0);
      p5.image(imgBlanco, p5.width / 2, p5.height / 2, imgWidth, imgHeight);
      p5.noLoop();
    }
  };

  const createStar = (p5) => {
    return {
      x: p5.random(p5.width),
      y: p5.random(p5.height),
      size: p5.random(1),
      alpha: p5.random(150, 255),
    };
  };

  const mouseClicked = () => {
    navigate("/home");
  };

  return <Sketch preload={preload} setup={setup} draw={draw} mouseClicked={mouseClicked} />;
};

export default StartSketch;
