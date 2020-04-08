import {TEST_ACTION} from './action-types';

export interface TestAction {
    type: TEST_ACTION;
}

export type EnthusiasmAction = TestAction 

export function incrementEnthusiasm(): TestAction {
    return {
        type: TEST_ACTION
    }
}
