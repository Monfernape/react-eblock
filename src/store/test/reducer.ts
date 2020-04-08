import { TestAction } from './actions';
import { TEST_ACTION } from './action-types';

export interface StoreState {
    testProperty: number
}

const initialState = {
    testProperty: 0
}

export default (state: StoreState = initialState, action: TestAction): StoreState => {
    switch (action.type) {
        case TEST_ACTION:
            return { ...state, testProperty: state.testProperty + 1 };
            default:
                return state
        }
}