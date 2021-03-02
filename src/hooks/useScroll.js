import { useState, useEffect, useRef } from 'react';

function useScroll(top) {
  const [topStyle, setTopStyle] = useState(true);
  const isUp = useRef(true);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > top && isUp.current) {
        setTopStyle(false);
        isUp.current = false;
        console.log(`is Up ${isUp.current}`);
      } else if (window.scrollY < top && !isUp.current) {
        setTopStyle(true);
        isUp.current = true;
        console.log(`is Up ${isUp.current}`);
      }
    });

    return () => window.removeEventListener('scroll', (event) => console.log('removed'))
  }, [topStyle]);

  return topStyle;
}

export default useScroll;