import { useState, useEffect } from 'react';

export function useTypewriter(fullText, speed = 50) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(''); // reset when fullText changes
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  return text;
}
