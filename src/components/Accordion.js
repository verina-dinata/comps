import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {/* // React doesn't print True, false, undefined, null
        // JS && will print the 1st falsy value or the last truthy value */}
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
}

export default Accordion;
