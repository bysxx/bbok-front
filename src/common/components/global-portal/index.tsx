'use client';

import type { PropsWithChildren, ReactNode } from 'react';
import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

const PortalProvider = ({ children }: PropsWithChildren) => {
  const [portalContainerRef, setPortalContainerRef] = useState<HTMLDivElement | null>(null);

  return (
    <PortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal-container"
        ref={(element) => {
          if (element === null || portalContainerRef !== null) {
            return;
          }
          setPortalContainerRef(element);
        }}
      />
    </PortalContext.Provider>
  );
};

const PortalConsumer = ({ children }: { children: ReactNode }) => {
  return (
    <PortalContext.Consumer>
      {(portalContainerRef) => {
        if (portalContainerRef === null) {
          return null;
        }
        return createPortal(<>{children}</>, portalContainerRef);
      }}
    </PortalContext.Consumer>
  );
};

export const GlobalPortal = {
  Consumer: PortalConsumer,
  Provider: PortalProvider,
};
