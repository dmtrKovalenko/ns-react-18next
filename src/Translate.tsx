import * as React from 'react';
import { I18NextConsumer } from './I18NextProvider';
import { NameSpaceConsumer } from './NamespaceProvider';

interface TranslateProps {
  children: string;
}

const childrenToNamespacedKey = (ns: string, childern: string) => {
  const key = childern.trim()

  if (ns) {
    return `${ns}:${key}`
  }

  return key
}

const Translate: React.SFC<TranslateProps> = ({ children }) => (
  <I18NextConsumer>
    {
      ({ i18n }) => (
        <NameSpaceConsumer>
          {
            ns => i18n.t(childrenToNamespacedKey(ns, children))
          }
        </NameSpaceConsumer>
      )
    }
  </I18NextConsumer>
)

export default Translate;
