"use client";

import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1); // count += 1 or count = count + 1
    } else {
      alert("You reached the max value (10)");
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-slate-300 p-3 rounded hover:bg-slate-600 font-bold text-white
                    active:bg-red-500"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
