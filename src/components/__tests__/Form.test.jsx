import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from '../Form'

Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally

const setUp = (props={}) => {
    const component = shallow(<Form {...props} />);
    console.log(component)
    return component;
}

describe("Form Component", () => {

    let comp;
   
    beforeEach( ()=> {
        comp = setUp()
    })
   
    it("Should render without errors", () => {
        console.log(comp)
        // const wrapper = comp.find(`[data-test='form-selection']`);
        // expect(wrapper.length).toBe(1)
    })

  
})