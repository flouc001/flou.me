import React from 'react';
import { animated, useSprings, config, useSpring } from 'react-spring';

type AnimatedTextProps = {
  text: string;
  flickLast?: boolean;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  flickLast = false,
}) => {
  const splitText = text.split('');
  const flickLetterAnimation = useSpring({
    transform: flickLast ? 'rotate(45deg)' : 'rotate(0deg)',
  });

  const springs = useSprings(
    splitText.length,
    splitText.map((_, i) => ({
      opacity: 1,
      from: { opacity: 0 },
      config: { ...config.wobbly },
      delay: 100 * i,
      precision: 0.01,
    }))
  );

  return (
    <div className="flex">
      {springs.map((spring, i) => (
        <animated.div
          // eslint-disable-next-line react/no-array-index-key
          key={`char[${i}]`}
          style={
            i === springs.length - 1
              ? { ...spring, ...flickLetterAnimation }
              : spring
          }
        >
          {splitText[i] === ' ' ? '\xa0' : splitText[i]}
        </animated.div>
      ))}
    </div>
  );
};
