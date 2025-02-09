```javascript
//In a functional component
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [updatedCount, setUpdatedCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    setUpdatedCount(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Updated Count: {updatedCount}</p>      
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default MyComponent;
```