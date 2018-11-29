import * as React from 'react';
import * as PropTypes from 'prop-types'
import * as defaultI18next from 'i18next';

const { Consumer, Provider } = React.createContext({ i18n: defaultI18next.init(), locale: null });
export const I18NextConsumer = Consumer;

export interface I18NextProviderProps {
  i18n: defaultI18next.i18n;
}

interface State {
  locale: string | null;
}

class I18NextProvider extends React.Component<I18NextProviderProps, State> {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  }

  state = {
    locale: null // language selection is async, while is not initislized set to null
  }

  componentDidMount() {
    const { i18n } = this.props

    if (!i18n) {
      console.error('Seems you have not pass the i18n object to the global I18NextProviderProvider')
      return
    }

    i18n.on("languageChanged", this.handleLanguageChange)
  }

  componentWillUnmount() {
    this.props.i18n.off('languageChanged', this.handleLanguageChange)
  }

  handleLanguageChange = (language: string) => {
    this.setState({ locale: language })
  }

  render() {
    const { locale } = this.state
    const { i18n, children } = this.props

    return <Provider value={{ i18n, locale }}> {children} </Provider>
  }
}

export default I18NextProvider;
