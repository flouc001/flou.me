import React from 'react';

import { Navbar } from '@components/Navbar';
import { routes } from '@constants/routes';

const Home: React.FC<{}> = () => (
  <Navbar title="floume" items={[routes.home, routes.blog]} />
);

// <div className="flex flex-grow h-screen justify-center items-center text-4xl lg:text-8xl">
//   <AnimatedText text="Coming soon..." />
// </div>

export default Home;
