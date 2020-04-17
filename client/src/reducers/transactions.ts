import {Action, ActionTypes} from '../actions';
import {Transaction} from './index';

export const transactionsReducer = (state: Transaction[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.getTransactions:
            return [...state, ...action.payload];
        case ActionTypes.addTransaction:
            return [...state, action.payload];
        case ActionTypes.deleteTransaction:
            return state.filter((transaction: Transaction) => transaction._id !== action.payload);
        default:
            return state;
    }
};
