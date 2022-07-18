import React, { createContext } from 'react';

export const contextAuth = createContext({});

export const ProviderContext = ({ children }: {children: React.ReactNode}) => {
  return(
  <contextAuth.Provider value={{teste: "teste"}}>
        {children}
    </contextAuth.Provider>
  )
}