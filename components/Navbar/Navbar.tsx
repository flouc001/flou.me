import React, { useState } from 'react';

import { RouteConfig } from '@constants/routes';
import { AnimatedText } from '@components/AnimatedText';

type NavbarProps = {
  title: string;
  items: RouteConfig[];
};

const NavbarItem: React.FC<RouteConfig> = ({ label }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      className="appearance-none p-5 hover:text-pink-500"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatedText text={label} flickLast={hover} />
    </button>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ title, items }) => (
  <div className="bg-navyblue text-white text-xl w-full shadow-xl flex justify-between">
    <div className="p-5 flex">
      <AnimatedText text={title} />
    </div>
    <div className="hidden sm:flex">
      {items.map(({ label }) => (
        <NavbarItem label={label} />
      ))}
    </div>
  </div>
);
