import React, { Component } from "react";

class Canvas extends Component {

  componentDidMount() {
    // Getting canvas element 
    // Setting the context to 2d
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const radians = (Math.PI * 360) / 180;
    let previousX;
    let previousY;

    let mousedown = false;

    canvas.addEventListener("mousedown", (e) => { 
      mousedown = true; 
      previousX = e.offsetX;
      previousY = e.offsetY;
    });
    
    canvas.addEventListener("mouseup", () => mousedown = false );

    canvas.addEventListener("mousemove", (e) => {
      if (mousedown) {
        const x = e.offsetX;
        const y = e.offsetY;
        
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(previousX, previousY);
        ctx.lineTo(x, y)
        ctx.stroke();

        previousX = x;
        previousY = y;
      }
    });

  }

    render() {
        return (
          <canvas 
            height="500" 
            width="500" 
            id="canvas">
          </canvas>
        );
    }
}

export default Canvas;