import {combineReducers} from 'redux';
import {errorsReducer, transactionsReducer} from './transactions';

export interface Transaction {
    _id: number;
    text: string;
    amount: number;
    createdAt: Date
}

export interface AddTransaction {
    text: string;
    amount: number;
}

export interface StoreState {
    transactions: Transaction[];
    error: string;
}

export const reducers = combineReducers<StoreState>({
    transactions: transactionsReducer,
    error: errorsReducer
});
