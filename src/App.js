import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const [text, setText] = useState('JavaScript');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'JavaScript') {
          return 'React';
        } else if (prevText === 'React') {
          return 'Redux';
        } else {
          return 'JavaScript';
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div>{text}</div>;
};

export default TextChanger;
