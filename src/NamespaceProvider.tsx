import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface NameSpaceProviderProps {
  ns: string;
}

const { Consumer, Provider } = React.createContext('');
export const NameSpaceConsumer = Consumer;

const NameSpaceProvider: React.SFC<NameSpaceProviderProps> = ({ ns, children }) => {
  return <Provider value={ns}> {children} </Provider>
};

NameSpaceProvider.propTypes = {
  ns: PropTypes.string
}

export default NameSpaceProvider;
