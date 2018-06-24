# NS react-i18next
[![npm package](https://img.shields.io/npm/v/material-ui-pickers.svg)](https://www.npmjs.org/package/material-ui-pickers)
[![codecov](https://codecov.io/gh/dmtrKovalenko/ns-react-18next/branch/master/graph/badge.svg)](https://codecov.io/gh/dmtrKovalenko/ns-react-18next)
[![Build Status](https://travis-ci.org/dmtrKovalenko/ns-react-18next.svg?branch=master)](https://travis-ci.org/dmtrKovalenko/ns-react-18next)
> Manage i18next namespaces with a power of react v16 context


### Installation
Available as npm package.
```sh
npm install material-ui-pickers -S
```

Add global provider to the root of your app

```jsx
import * as i18n from 'i18next';

i18n
  .use(LanguageDetector)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'common', // this namespace will be used if no namespace shared via context
    fallbackNS: 'common',
  });

ReactDom.render(
  <I18NextProvider i18n={i18n}>
    <App />
  </I18NextProvider>,
  document.getElementById('root')
)
```

### Usage
Use another provider to share namespace between components sub-tree.

```jsx
import { Translate, NameSpaceProvider } from 'ns-react-i18next'

<NameSpaceProvider ns="specificNs">
  // specificNs:some_complex_structure
  <p> <Translate interpolate={{ key: 'value' }}> some_complex_structure </Translate> </p> 
  <p> <Translate> something_specific </Translate> </p> // specificNs:something_specific
</NameSpaceProvider>
```

Even possible to wrap several routes to share namespaces. 

```jsx
<NameSpaceProvider ns="customers">
  <Route path="/customers" component={CustomersList} />
  <Route path="/customers/:id" component={ManageCustomer} />
</NameSpaceProvider>
```

There any Translate's, that will be rendered by 2 customer's routes will be shared with `customers` namespace. 
