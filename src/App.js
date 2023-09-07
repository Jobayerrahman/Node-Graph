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
    setLineList([ {line:""}])
  }

  return (
    <div className="container-body">
      {blocklist.map((singleBlock, index)=> (
          <Block key={index} handleBlockAdd={handleBlockAdd} index={index} lineList={lineList}/>
      ))}
    </div>
  );
}

export default App;
