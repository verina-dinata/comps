import Button from '../components/Button';
import { useState } from 'react';

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>
        Count is {count}
      </h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}

export default CounterPage;
