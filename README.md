# NS react-i18next
[![npm package](https://img.shields.io/npm/v/ns-react-i18next.svg)](https://www.npmjs.org/package/ns-react-i18next)
[![gzip bundle size](http://img.badgesize.io/https://unpkg.com/ns-react-i18next@0.1.1/index.amd.js?compression=gzip
)](https://unpkg.com/ns-react-i18next@0.1.1/index.amd.js)
[![codecov](https://codecov.io/gh/dmtrKovalenko/ns-react-18next/branch/master/graph/badge.svg)](https://codecov.io/gh/dmtrKovalenko/ns-react-18next)
[![Build Status](https://travis-ci.org/dmtrKovalenko/ns-react-18next.svg?branch=master)](https://travis-ci.org/dmtrKovalenko/ns-react-18next)
> Manage i18next namespaces with a power of react v16 context

## Unmaintained

The purpose of this library was merged to official [react-i18next](https://github.com/i18next/react-i18next) at v9. So please use it.  :)

### Installation
Available as npm package.
```sh
npm install ns-react-i18next
```

Add global provider to the root of your app

```jsx
import * as i18n from 'i18next';
import { I18NextProvider } from 'ns-react-i18next'

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
Use another provider to share namespace between components sub-tree. Any `<Translate>` component under this provider will render translated string of shared namespace + children string. Note that when the language will be changed (with a help of `i18n.changeLanguage()`) - every translate will rerender by itself.

```jsx
import { Translate, NamespaceProvider } from 'ns-react-i18next'

<NamespaceProvider ns="specificNs">
  // specificNs:some_complex_structure
  <p> <Translate interpolate={{ key: 'value' }}> some_complex_structure </Translate> </p>
  <p> <Translate> something_specific </Translate> </p> // specificNs:something_specific
</NamespaceProvider>
```

Even possible to share namespace for several routes.

```jsx
<NamespaceProvider ns="customers">
  <Route path="/customers" component={CustomersList} />
  <Route path="/customers/:id" component={ManageCustomer} />
</NamespaceProvider>
```

There any `Translate` of CustomersList, ManageCustomer and thiers sub-components and sub-routes of take the 'customers' namespace.
