import LabelWrapper from "./LabelWrapper";
import { useState } from "react";

function ReconCil() {
  const [items, setItems] = useState([
    { name: "AAA", id: 1 },
    { name: "BBB", id: 2 },
    { name: "CCC", id: 3 },
    // { name: 'AAA' },
    // { name: 'BBB' },
    // { name: 'CCC' }
  ]);

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          // <li>{item.name}</li>
          // <li key={index}>{item.name}</li>
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* <button onClick={() => setItems([...items, { name: 'DDD' }])}>Add Item</button> */}
      {/* <button onClick={() => setItems([{ name: 'DDD' }, ...items])}>Add Item</button> */}
      <button onClick={() => setItems([{ name: "DDD", id: 4 }, ...items])}>
        Add Item
      </button>
    </div>
  );
}

export default ReconCil;
