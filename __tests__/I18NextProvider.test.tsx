import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import I18NextProvider from "../src/I18NextProvider";
import i18n from "../fixtures/i18n";

describe('Namespaces usage', () => {
  let component: ShallowWrapper;

  it("Should throw an error if not passed i18n globally", () => {
    global.console = { ...global.console, error: jest.fn(), }
    component = shallow(
      <I18NextProvider i18n={undefined as any} />
    )

    expect(global.console.error).toHaveBeenCalled()
  })

  it('Should unsubscribe from event on unmount', () => {
    const mockedi18n = { ...i18n, on: jest.fn(), off: jest.fn() }
    component = shallow(
      <I18NextProvider i18n={mockedi18n} />
    )

    component.unmount()
    expect(mockedi18n.off).toHaveBeenCalled()
  })
})
