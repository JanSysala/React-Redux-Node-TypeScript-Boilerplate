import {AddTransactionAction, CatchErrorsAction, DeleteTransactionAction, GetTransactionsAction} from './transactions';

export enum ActionTypes {
    getTransactions,
    addTransaction,
    deleteTransaction,
    catchErrors
}

export type Action = GetTransactionsAction | DeleteTransactionAction | AddTransactionAction | CatchErrorsAction;
// this along with the enum
//sets up an implicit type guard in the reducer
