import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import WithLocale, { WithLocaleProps } from "../src/WithLocale";

const Component: React.SFC<WithLocaleProps> = ({ tn }) => <span> {tn('something_specific')} </span>

describe('WithLocale hoc', () => {
  let component: ReactWrapper;

  beforeEach(() => {
    const HOC = WithLocale('specificNs')(Component)
    component = mount(<HOC p1="p1" />)
  })

  it('Should properly pass locale props', () => {
    expect(component.find('span').text().trim()).toBe('something_specific')
  })
})
