import React from 'react';
import { shallow } from 'enzyme';
import StDescipt from '../src/components/StDescript.jsx';

describe('Examining the syntax of Jest tests', () => {
   
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
     });
  });

describe('StDescript component', () => {
    it('renders without crashing', () => {
        shallow(<StDescipt descriptArr={["test1", "test2", "test3"]}/>);

      });
    it('renders the right amount of bullet points', () => {
        const testInput3 = ["bullet point 1", "bullet point 2", "bullet point 3"];
        const wrapper = shallow(<StDescipt descriptArr={testInput3} />);
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it('render the correct text for the bullet point', () => {
        const wrapper = shallow(<StDescipt descriptArr={["point made"]} />);
        expect(wrapper.find('li').text()).toBe('point made');
    })
})