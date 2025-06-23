"use client";

import { ReactNode, useContext, useRef, useMemo } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  // Memoize the provider value to prevent unnecessary re-renders
  const providerValue = useMemo(() => frozen, [frozen]);

  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={providerValue}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
