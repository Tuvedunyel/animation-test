import React, { useEffect, useRef } from "react";

const Canvas = ({ width = "584", height = "224" }) => {
  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const image = new Image();
    image.src = "./src/assets/bird-girl.png";
    image.onload = () => {
      context.drawImage(image, 412, -50, 50, 50);
    };
  });

  return (
    <article className='animation__runingGirls'>
      <canvas
        ref={canvas}
        className='animation-about-mazowoizo'
        width={width + "px"}
        height={height + "px"}
      />
    </article>
  );
};

export default Canvas;
