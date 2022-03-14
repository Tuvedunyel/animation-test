import React from "react";
import "atropos/css";
import Atropos from "atropos/react";
import Canvas from "./Canvas";

const Scene = () => {
  return (
    <section title="Scene d'animation" className='scene-wrapper'>
      <Atropos
        activeOffset={40}
        shadow={false}
        className='my-atropos'
      >
        <div
          className='animation animation-eiffel'
          data-atropos-offset='-15'
        ></div>
        <div
          className='animation animation-pinkWall'
          data-atropos-offset='-10'
        ></div>
        <div
          className='animation animation-pinkRoof'
          data-atropos-offset='-3'
        ></div>
        <div
          className='animation animation-orangeTree'
          data-atropos-offset='-5'
        ></div>
        <div
          className='animation animation-greenBuilding'
          data-atropos-offset='-2'
        ></div>
        <div
          className='animation animation-purplePlant'
          data-atropos-offset='-5'
        ></div>
        <div
          className='animation animation-redPlant'
          data-atropos-offset='-5'
        ></div>
        <div
          className='animation animation-leftBarrier'
          data-atropos-offset='-5'
        ></div>
        <div
          className='animation animation-treeSmall'
          data-atropos-offset='5'
        ></div>
        <div
          className='animation animation-smallOrangeTree'
          data-atropos-offset='5'
        ></div>
        <div className='front' data-atropos-offset='5'>
          <div className='animation animation-pinkShop'></div>
          <div className='animation animation-bookShell'></div>
          <div className='animation animation-stairs'></div>
          <div className='animation animation-deskBuilding'></div>
          <div className='animation animation-roof'></div>
        </div>
        <div
          className='animation animation-longLight'
          data-atropos-offset='10'
        ></div>
        <div
          className='animation animation-shortLight'
          data-atropos-offset='15'
        ></div>
        <Canvas width="584" height="224" />
      </Atropos>
    </section>
  );
};

export default Scene;
