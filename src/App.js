import Block from './Component/Block';
import { useState } from 'react';
function App() {

  const [blocklist, setBlocklist] = useState([ 
    {block: ""},
  ]);

  const handleBlockAdd = () => {
    setBlocklist([...blocklist, {block:""}])
  }
  return (
    <div className="container-body">
      {blocklist.map((singleBlock, index)=> (
          <Block key={index} handleBlockAdd={handleBlockAdd} index={index}/>
      ))}
    </div>
  );
}

export default App;
