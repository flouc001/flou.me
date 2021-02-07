import React from 'react';

import { AnimatedText } from '@components/AnimatedText';

const Home: React.FC<{}> = () => (
  <div className="flex flex-grow h-screen justify-center items-center text-4xl lg:text-8xl">
    <AnimatedText text="Coming soon..." />
  </div>
);

export default Home;
