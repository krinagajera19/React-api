import React, { useState, useEffect, useRef } from "react";

const Ref = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <button onClick={focusInput}>Focus Input</button>
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default Ref;
