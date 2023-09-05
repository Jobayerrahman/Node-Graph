import React from 'react';
import { useRef, useEffect } from 'react';

function Line(props) {
    const lineRef = useRef(null);

    const left = Math.floor(Math.random()*400);
    const top  = Math.floor(Math.random()*700);
    console.log(left+" "+top)
    useEffect(() => {
        const canvas = lineRef.current;
        console.log(canvas);
        // Create a canvas:
          const ctx = canvas.getContext("2d");

        //dashes are 5px and spaces are 3px
          ctx.setLineDash([3, 5]);

        // Define a new path:
          ctx.beginPath();

        // Define a start point
          ctx.moveTo(0,0);

        // Define an end point
          ctx.lineTo(top, left);

         // Draw it
          ctx.stroke();
      }, []);

    return (
        <div className='line-contianer'>
            <canvas  ref={lineRef} width={props.width} height={props.height}  />
        </div>
    );
}

export default Line;