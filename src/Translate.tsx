import * as React from 'react';
import * as PropTypes from 'prop-types';
import { I18NextConsumer } from './I18NextProvider';
import { NameSpaceConsumer } from './NamespaceProvider';
import { TranslationOptions } from 'i18next';

export interface TranslateProps {
  children: string;
  interpolate?: TranslationOptions
}

const childrenToNamespacedKey = (ns: string, children: string) => {
  const key = children.trim()

  if (ns) {
    return `${ns}:${key}`
  }

  return key
}

// @ts-ignore
const Translate: React.SFC<TranslateProps> = ({ children, interpolate }) => (
  <I18NextConsumer>
    {
      ({ i18n }) => (
        <NameSpaceConsumer>
          {
            ns => i18n.t(childrenToNamespacedKey(ns, children), interpolate)
          }
        </NameSpaceConsumer>
      )
    }
  </I18NextConsumer>
)

// @ts-ignore
Translate.propTypes = {
  children: PropTypes.string.isRequired,
  interpolate: PropTypes.shape({ }),
}

export default Translate;
