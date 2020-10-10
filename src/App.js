import React, { useState } from "react";
import './App.css';
import TestComponent from "./TestComponent";
import Can from "./RBAC/Can";

const items = [
  { value: 'guest', label: 'Guest' },
  { value: 'user', label: 'Normal User Role' },
  { value: 'editor', label: 'Editor role' },
  { value: 'admin', label: 'Admin role' }
]

function App() {
  const [value, setValue] = useState([items])

  const noPermission =  (<div>No permission to view this component</div>);

  return (
    <div className="App">
      <select value={value} onChange={e => setValue(e.currentTarget.value)}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      
      <TestComponent content="Visible for all"/>

      <Can role={value} perform="app:view"
        yes={() => (<TestComponent content="Visible for user"/>) }
        no={()=> (noPermission)} />

      <Can role={value} perform="app:edit"
        yes={() => (<TestComponent content="Visible for editor"/>) }
        no={()=> (noPermission)} />

      <Can role={value} perform="app:delete"
        yes={() => (<TestComponent content="Visible for admin"/>) }
        no={()=> (noPermission)} />
        
    </div>
  );
}

export default App;
