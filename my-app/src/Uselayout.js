import React, { useState, useLayoutEffect, useRef } from "react";

function MyComponent() {
  const [width, setWidth] = useState(0);
  const myElementRef = useRef(null);

  useLayoutEffect(() => {
    const element = myElementRef.current;
    if (element) {
      const newWidth = element.offsetWidth;
      setWidth(newWidth);
    }
  }, []);

  return (
    <div>
      <p>Width of the element: {width}px</p>
      <div ref={myElementRef}>This is the element to measure</div>
    </div>
  );
}

export default MyComponent;
