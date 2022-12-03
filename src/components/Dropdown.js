import { useState } from 'react'

function Dropdown({ options, onSelect, selection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    // setIsSelected(option.label)
    onSelect(option);
  }

  const renderedOptions = options.map((option) => {
    return(
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });


  return(
    <div>
      <div onClick={handleClick}>
        {selection?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
