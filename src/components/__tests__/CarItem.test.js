import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CarItem } from '../CarItem'

Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally

const setUp = (props={}) => {
    const component = shallow(<CarItem {...props} />);
    return component;
}

describe("CarItem Component", () => {

    let comp;
    beforeEach( ()=> {
        comp = setUp()
    })
   
    it("Should render without errors", () => {
        const wrapper = comp.find(`[data-test='car-item']`);
        expect(wrapper.length).toBe(1)
    })

    it("Should have 7 children", () => {
        const parent = comp.find(`[data-test='car-item']`).children();
        expect(parent.length).toBe(7)
    })
})