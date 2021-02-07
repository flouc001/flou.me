import React from 'react';
import { animated, useSprings, config } from 'react-spring';

type AnimatedTextProps = {
  text: string;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const splitText = text.split('');

  const springs = useSprings(
    splitText.length,
    splitText.map((_, i) => ({
      opacity: 1,
      from: { opacity: 0 },
      config: { ...config.wobbly },
      delay: 100 * i,
    }))
  );

  return (
    <>
      {springs.map((spring, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <animated.span key={`char[${i}]`} style={spring}>
          {splitText[i] === ' ' ? '\xa0' : splitText[i]}
        </animated.span>
      ))}
    </>
  );
};
