import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface NamespaceProviderProps {
  ns: string;
}

const { Consumer, Provider } = React.createContext('');
export const NameSpaceConsumer = Consumer;

const NamespaceProvider: React.SFC<NamespaceProviderProps> = ({ ns, children }) => {
  return <Provider value={ns}> {children} </Provider>
};

NamespaceProvider.propTypes = {
  ns: PropTypes.string
}

export default NamespaceProvider;
