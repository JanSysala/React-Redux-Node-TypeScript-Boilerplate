import {AddTransactionAction, DeleteTransactionAction, GetTransactionsAction} from './transactions';

export enum ActionTypes {
  getTransactions,
  addTransaction,
  deleteTransaction
}

export type Action = GetTransactionsAction | DeleteTransactionAction | AddTransactionAction;
// this along with the enum
//sets up an implicit type guard in the reducer
