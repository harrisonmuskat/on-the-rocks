import Button from 'components/button';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Button', () => {
  let onClick={onClick},
      wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <Button />
    );
  });

  it('should render an a tag', () => {
    expect(wrapper.find('a')).toBePresent();
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h1').text()).toBe('I am an Elephant!');
  });
});
