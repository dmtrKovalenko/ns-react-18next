import * as React from 'react';
import { hot } from 'react-hot-loader'
import Translate from '../src/Translate';
import NamespaceProvider from '../src/NamespaceProvider';
import i18n from '../fixtures/i18n';

interface AppProps { }

const App: React.SFC<AppProps> = (props) => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('ru')}> ru </button>
      <button onClick={() => i18n.changeLanguage('en')}> en </button>

      <div> Here would be some examples </div>
      <p> <Translate> hi </Translate> </p>

      <NamespaceProvider ns="specificNs">
        <p> <Translate> hi </Translate> </p>
        <p> <Translate> something_specific </Translate> </p>
      </NamespaceProvider>
    </div>
  )
};

export default hot(module)(App)
