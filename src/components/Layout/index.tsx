import * as React from 'react';

import { Navbar } from '../Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
