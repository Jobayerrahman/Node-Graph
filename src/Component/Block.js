import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import Line from './Line';
function Block({index,handleBlockAdd}) {

    // const containerRef  = useRef(null);
    const blockRef      = useRef(null);
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
    const [currenLeft, setCurrentLeft] = useState('');
    const [currentTop, setCurrentTop] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const blockPostion = useRef({
        top: Math.floor(Math.random()*900),
        left: Math.floor(Math.random()*2000),
        transform: 'translate(0%, 0%)'
    });

    // const handleEvent =(e)=>{
    //     if(e.type === 'mousedown'){
    //         setIsClicked(true);
    //         // setClickStyle("block-grap")
    //         console.log("mouse down hoice!");
    //         const block  = blockRef.current;
    //         block.style.backgroundColor="#D94A38"
    //         block.style.cursor= "grab";
    //     }else{
    //         setIsClicked(false);
    //         console.log("mouse up hoice!");
    //         const block  = blockRef.current;
    //         block.style.backgroundColor=""
    //         block.style.cursor= "";
    //     }
    // }

    useEffect(()=>{
        const handleMosueMoveEvent = (e) =>{
            let getstyle = window.getComputedStyle(blockRef.current);
            let left = parseInt(getstyle.left);
            let top = parseInt(getstyle.top);
            blockRef.current.style.left = `${left+e.movementX}px`;
            blockRef.current.style.top  = `${top+e.movementY}px`;
            setCurrentLeft(blockRef.current.style.left );
            setCurrentTop(blockRef.current.style.left );
        }

        const handleMouseDownEvent = (e) => {
                setIsClicked(true);
                blockRef.current.addEventListener("mousemove",handleMosueMoveEvent);
                setClickStyle("block-grap");
                const block  = blockRef.current;
                block.style.backgroundColor="#D94A38";
        }

        const handleMosueUpEvent = (e) =>{
            setIsClicked(false);
            blockRef.current.removeEventListener("mousemove",handleMosueMoveEvent);
            const block  = blockRef.current;
            block.style.backgroundColor=""
        }

        blockRef.current.addEventListener('mousedown',handleMouseDownEvent);
        blockRef.current.addEventListener("mouseup",handleMosueUpEvent);
        blockRef.current.addEventListener("mouseleave",handleMosueUpEvent);

        const cleanup = () =>{
            blockRef.current.removeEventListener('mousedown',handleMouseDownEvent);
            blockRef.current.removeEventListener("mouseup",handleMosueUpEvent);
            blockRef.current.removeEventListener("mouseleave",handleMosueUpEvent);
            blockRef.current.removeEventListener("mousemove",handleMosueMoveEvent);
        }

        return cleanup;

    },[blockRef.current])

    return(
        <>
            <div 
                ref={blockRef} 
                className={isClicked? ('block-wrapper '+clickStyle) : 'block-wrapper'} 
                style={blockPostion.current}
            >
                <p>{index}</p>
                <button onClick={handleBlockAdd}>Add +</button>
            </div>
        </>
    );
}

export default Block;