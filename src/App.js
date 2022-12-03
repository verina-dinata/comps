import Dropdown from "./components/Dropdown";
import { useState } from 'react';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (newOption) => {
    setSelection(newOption);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ]

  return <Dropdown
    options={options}
    onSelect={handleSelect}
    selection={selection} />;
}

export default App;
