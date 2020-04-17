import {combineReducers} from 'redux';
import {transactionsReducer} from './transactions';

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
}

export const reducers = combineReducers<StoreState>({
  transactions: transactionsReducer
});
