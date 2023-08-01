// F.js
import React, { useLayoutEffect, useRef } from 'react';

const F = ({ children, duration }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (node) {
      node.style.opacity = 0;
      node.style.transition = `opacity ${duration}ms`;

      setTimeout(() => {
        node.style.opacity = 1;
      }, 100);
    }
  }, [duration]);

  return <div ref={ref}>{children}</div>;
};

export default F;
