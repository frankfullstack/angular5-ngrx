import { ActionReducer, Action, State } from '@ngrx/store';
import { ItemClass } from './item.model';
// definitions of the actions that alter the state
export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Remove an operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';

// www.pluralsight.com/guides/front-end-javascript/building-a-redux-application-with-angular-2-part-1#WYrITDmuFBzERyz8.99

// const initialState: State<any>;
export function operationsReducer(state: ItemClass[], action: Action) {
    switch (action.type) {
        // In Redux, you cannot mutate the state. In this case using .push(), .pop(), // .shift() or .unshift() is against the convention. 
        case ADD_OPERATION: // Action type
            const item: ItemClass = action.payload; // the contents of an operation
            return [...state, item];
        case INCREMENT_OPERATION:
            const item2 = ++action.payload.amount;
            return state.map(i => {
                return i.id === action.payload.id ? Object.assign({}, i, operation) : i;
            });
        case DECREMENT_OPERATION:
            const operation = --action.payload.amount;
            // update the state by creating a new object using Object.assign()
            return state.map(i => {
                return i.id === action.payload.id ? Object.assign({}, i, operation) : i;
            });
        case REMOVE_OPERATION:
            return state.filter(o => {
                // filter items to exclude the item in the payload
                return o.id !== action.payload.id;
            });
        default:
            // if the action.type is unknown, return the state
            return state;
    }
}
