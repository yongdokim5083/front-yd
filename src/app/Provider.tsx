'use client';

import { createContext, useContext } from 'react';

const themeDefault = { border: '10px solid red' };
export const themeContext = createContext(themeDefault);

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: '10px solid blue' }}>
      <div className='root' style={theme}>
        {children}
      </div>
    </themeContext.Provider>
  );
}
