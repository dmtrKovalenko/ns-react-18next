import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import WithLocale, { WithLocaleProps } from "../src/WithLocale";
import i18n from "../fixtures/i18n";
import I18NextProvider from "../src/I18NextProvider";;
import NamespaceProvider from "../src/NamespaceProvider";

const Component: React.SFC<WithLocaleProps> = ({ tn }) => (
  <span> {tn("something_specific")} </span>
);

describe("WithLocale hoc -- ns from param", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    const HOC = WithLocale("specificNs")(Component);
    component = mount(
      <I18NextProvider i18n={i18n}>
        <HOC p1="p1" />
      </I18NextProvider>
    );
  });

  it("Should properly pass translate", () => {
    expect(component.find("span").text().trim().toLowerCase()).toBe("something specific");
  });
});

describe("WithLocale hoc -- ns from provider", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    const HOC = WithLocale()(Component);
    component = mount(
      <I18NextProvider i18n={i18n}>
        <NamespaceProvider ns="specificNs">
          <HOC p1="p1" />
        </NamespaceProvider>
      </I18NextProvider>
    );
  });

  it("Should properly pass translate", () => {
    expect(component.find("span").text().trim().toLowerCase()).toBe("something specific");
  });
});
