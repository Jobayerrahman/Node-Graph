import React from 'react';
import { useRef, useEffect } from 'react';

function Line(props) {
    const lineRef = useRef(null);
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
          ctx.lineTo(props.width, props.height);

         // Draw it
          ctx.stroke();
      }, []);

    return (<canvas  ref={lineRef} width={props.width} height={props.height}  />);
}

export default Line;