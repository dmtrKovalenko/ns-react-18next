import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import I18NextProvider from "../../src/I18NextProvider";
import Translate from "../../src/Translate";
import i18n from "../../fixtures/i18n";
import NameSpaceProvider from "../../src/NamespaceProvider";

describe('Namespaces usage', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <div>
        <I18NextProvider i18n={i18n}>
          <NameSpaceProvider ns="specificNs">
            <Translate> something_specific </Translate>
          </NameSpaceProvider>
        </I18NextProvider>
      </div>
    )
  })

  it("Should display default namespace without provider", () => {
    expect(component.find('div').text().trim()).toBe("Something specific")
  })

  it("Should show proper translate on locale change", () => {
    i18n.changeLanguage("ru")

    expect(component.find('div').text().trim()).toBe("Что-то специфичное")
  })
})

describe('Interpolate', () => {
  it("Should render interpolated value", () => {
    i18n.changeLanguage("en")
    let component = mount(
      <div>
        <I18NextProvider i18n={i18n}>
          <NameSpaceProvider ns="specificNs">
            <Translate interpolate={{ value: 'test' }}> interpolated </Translate>
          </NameSpaceProvider>
        </I18NextProvider>
      </div>
    )

    expect(component.find('div').text().trim()).toBe("Some interpolated value => test")
  })
})
