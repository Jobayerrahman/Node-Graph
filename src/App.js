import Block from './Component/Block';
import { useState, useEffect, useRef } from 'react';
function App() {

  const containerRef      = useRef(null);

  const [blocklist, setBlocklist] = useState([ 
    {block: ""},
  ]);

  const handleBlockAdd = () => {
    setBlocklist([...blocklist, {block:""}])
  }


    // const lineEvent =(e)=>{
    //   // Create a canvas:
    //   const canvas = containerRef.current;
    //   console.log(canvas)
    //   const ctx = canvas.getContext("2d");

    //   // Define a new path:
    //   ctx.beginPath();

    //   // Define a start point
    //   ctx.moveTo(0,0);

    //   // Define an end point
    //   ctx.lineTo(200,100);

    //   // Draw it
    //   ctx.stroke();
    // }


  return (
    <div ref={containerRef} className="container-body">
      {blocklist.map((singleBlock, index)=> (
          <Block key={index} handleBlockAdd={handleBlockAdd} index={index}/>
      ))}
    </div>
  );
}

export default App;
