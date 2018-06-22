import * as React from 'react';
import { I18NextConsumer } from './I18NextProvider';

interface TranslateProps {
  children: string;
}

const Translate: React.SFC<TranslateProps> = ({ children }) => {
  return (
    <I18NextConsumer>
      {
        i18n => i18n.t(children)
      }
    </I18NextConsumer>
  )
};

export default Translate;
