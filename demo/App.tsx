import * as React from 'react';
import { hot } from 'react-hot-loader'
import Translate from '../src/Translate';
import NameSpaceProvider from '../src/NamespaceProvider';

interface AppProps { }

const App: React.SFC<AppProps> = (props) => {
  return (
    <div>
      <div> Here would be some examples </div>
      <Translate> hi </Translate>

      <NameSpaceProvider ns="specificNs">
        <Translate> hi </Translate>
        <Translate> something-specific </Translate>
      </NameSpaceProvider>
    </div>
  )
};

export default hot(module)(App)
