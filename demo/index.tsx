import * as React from 'react'
import * as ReactDom from 'react-dom'

import App from './App'
import I18NextProvider from '../src/I18NextProvider';
import i18n from './services/i18n';

ReactDom.render(
  <I18NextProvider i18n={i18n}>
    <App />
  </I18NextProvider>,
  document.getElementById('root')
)