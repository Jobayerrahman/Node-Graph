import Block from './Component/Block';
import { useState } from 'react';
import Line from './Component/Line';
function App() {
  const [blocklist, setBlocklist] = useState([ 
    {block: ""},
  ]);
  const [lineList,setLineList]    = useState([
    {line: ""},
  ]);

  const handleBlockAdd = () => {
    setBlocklist([...blocklist, {block:""}])
    setLineList([...lineList, {line:""}])
  }

  return (
    <div className="container-body">
      {blocklist.map((singleBlock, index)=> (
          <Block key={index} handleBlockAdd={handleBlockAdd} index={index}/>
      ))}
      {lineList.map((singleLine, index)=>(
        <Line/>
      ))}
    </div>
  );
}

export default App;
