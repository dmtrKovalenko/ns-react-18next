import * as React from "react";
import * as i18n from "i18next";
import { I18NextConsumer } from "./I18NextProvider";
import { NameSpaceConsumer } from "./NamespaceProvider";

export interface WithLocaleProps {
  t: typeof i18n.t;
  i18n: typeof i18n;
  locale: string | null;
  tn: (key: string, inerpolate?: { [key: string]: string }) => string;
}

export default (defaultNs?: string) => (
  Component: React.ComponentType<WithLocaleProps>
) => {
  const WithLocale: React.SFC<any> = props => (
    <I18NextConsumer>
      {({ i18n, locale }) => (
        <NameSpaceConsumer>
          {ns => (
            <Component
              t={i18n.t}
              i18n={i18n}
              locale={locale}
              tn={(key: string, interpolate?: { [key: string]: string }) =>
                i18n.t(`${defaultNs || ns}:${key}`, interpolate)
              }
              {...props}
            />
          )}
        </NameSpaceConsumer>
      )}
    </I18NextConsumer>
  );

  return WithLocale;
};
