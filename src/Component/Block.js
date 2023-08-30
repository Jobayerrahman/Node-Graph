import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
function Block({index,handleBlockAdd}) {

    // const containerRef  = useRef(null);
    // const blockRef      = useRef(null);
    // const isClicked     = useRef(false);
    // const coordinates   = useRef({positionX:0, positionY:0, lastX: 0, lastY: 0});

    // useEffect(() =>{
    //     if (!blockRef.current || !containerRef.current){
    //         return;
    //     }

    //     const block     = blockRef.current;

    //     const onMouseOver = (e) =>{

    //         isClicked.current = true;
    //         let getstyle = window.getComputedStyle(block);
    //         let left = parseInt(getstyle.left);
    //         let top = parseInt(getstyle.top);

    //         block.style.left = `${left+e.movementX}px`;
    //         block.style.top  = `${top+e.movementY}px`;
            
    //     }

    //     block.addEventListener('mousedown',()=>{
    //         isClicked.current = false;
    //         block.addEventListener("mousemove",onMouseOver);
    //     });

    //     block.addEventListener('mouseleave',()=>{
    //         isClicked.current = false
    //     })

    //     block.addEventListener('mouseup',()=>{
    //         isClicked.current = false
    //     })


    //     const cleanup = () =>{
    //         block.removeEventListener('mousedown',onMouseOver);
    //     }
    //     return cleanup;

    // }, [])

    const [clickStyle, setClickStyle] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const blockPostion = useRef({
        top: Math.floor(Math.random()*900),
        left: Math.floor(Math.random()*2000),
        transform: 'translate(0%, 0%)'
    });

    const handleClick =(e)=>{
        console.log('U R I M P R O V I N G !')
        setClickStyle("block-click");
        setIsClicked(true);
    }
    return(
        <div onClick={handleClick} className={isClicked? ('block-wrapper '+clickStyle) : 'block-wrapper'} style={blockPostion.current}>
            <p>{index}</p>
            <button onClick={handleBlockAdd}>Add +</button>
        </div>
    );
}

export default Block;