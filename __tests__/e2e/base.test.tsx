import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import I18NextProvider from "../../src/I18NextProvider";
import Translate from "../../src/Translate";
import i18n from "../../fixtures/i18n";

describe('Basic usage', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <div>
        <I18NextProvider i18n={i18n}>
          <Translate> hi </Translate>
        </I18NextProvider>
      </div>
    )
  })

  it("Should display default namespace without provider", () => {
    expect(component.find('div').text().trim()).toBe("Hi")
  })

  it("Should rerender on locale change", () => {
    i18n.changeLanguage("ru")

    expect(component.find('div').text().trim()).toBe("Привет")
  })
})
