import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from '../Form'
import { applyMiddleware } from 'redux'


Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const component = shallow(<Form store={store} />);
    console.log(component.debug())
    
    return component;
}

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

describe("Form Component", () => {

    describe("have props", () => {
        let wrapper;
        beforeEach( ()=> {

            initialState =  {
                car_data: {},
                select_make: {},
                select_vehicle: {},
                users_vehicle: {}
            }

            const props = {
                car_data: '',
                select_make: 'select',
                onUpdateDatabase: '',
                onDatabaseApiRequest: '',
                onMakesApiRequest: '',
                onVehicleApiRequest: '',
                onShowError: ''
            };
            wrapper = setUp(initialState)
        })

        it("should render with no error", () => {

        })
    })

    describe("have no props", () => {

        let wrapper;
        beforeEach( ()=> {
           wrapper = setUp() 
        });

        it("Should not render", () => {
            console.log(wrapper)
            const component = wrapper.find(`[data-test='form-selection']`);
            expect(component.length).toBe(0)
        })
    })
  
})