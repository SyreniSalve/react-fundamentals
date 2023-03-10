import { useState, useEffect } from "react";

export function SynchronyzingWithEffects35() {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    if (count === 5) alert("Hight FIVE!");
  }, []);

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <p>
        <span>Result: {count}</span>
      </p>
    </div>
  );
}
