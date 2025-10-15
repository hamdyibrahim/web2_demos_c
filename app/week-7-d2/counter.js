"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Increment the state multiple times by calling setCount() multiple times - Incorrect
    /*setCount(count + 1);    // count = 0
    setCount(count + 1);  // count = 0
    setCount(count + 1);  // count = 0*/
    setCount((c) => c + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    console.log("Count: " + count);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">React State Based Counter</h2>
      <p>Count: {count}</p>
      <button
        className="rounded bg-slate-300 font-bold p-4"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
