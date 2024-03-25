'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalContext = createContext<HTMLDivElement | null>(null);

export const PortalProvider = ({ children }: PropsWithChildren) => {
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

export const PortalConsumer = ({ children }: PropsWithChildren) => {
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
