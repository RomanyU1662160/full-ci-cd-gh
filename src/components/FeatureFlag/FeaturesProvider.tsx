'use client';
import React, { useRef } from 'react';
import { FlagsmithProvider } from 'flagsmith/react';
import { createFlagsmithInstance } from 'flagsmith/isomorphic';
import { IState } from 'flagsmith/types';

type FeaturesFlagProviderProps = {
  serverState: IState;
  children: React.ReactNode;
};

function FeaturesFlagProvider({
  serverState,
  children,
}: FeaturesFlagProviderProps) {
  const flagsmithInstance = useRef(createFlagsmithInstance());
  return (
    <FlagsmithProvider
      serverState={serverState}
      flagsmith={flagsmithInstance.current}
    >
      <>{children}</>
    </FlagsmithProvider>
  );
}

export default FeaturesFlagProvider;
