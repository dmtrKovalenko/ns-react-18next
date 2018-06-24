import * as React from 'react';

export interface NameSpaceProviderProps {
  ns: string;
}

const { Consumer, Provider } = React.createContext('');
export const NameSpaceConsumer = Consumer;

const NameSpaceProvider: React.SFC<NameSpaceProviderProps> = ({ ns, children }) => {
  return <Provider value={ns}> {children} </Provider>
};

export default NameSpaceProvider;
