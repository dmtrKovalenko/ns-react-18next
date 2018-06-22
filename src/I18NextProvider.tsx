import * as React from 'react';
import * as i18n from 'i18next';

interface I18NextProviderProps {
  i18n: i18n.i18n;
}

const { Consumer, Provider } = React.createContext(i18n.init());
export const I18NextConsumer = Consumer;

const I18NextProvider: React.SFC<I18NextProviderProps> = ({ i18n }) => {
  return <Provider value={i18n} />
};

export default I18NextProvider;
