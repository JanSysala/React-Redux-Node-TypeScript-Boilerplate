import {
    AddTransactionAction,
    CatchErrorsAction,
    DeleteTransactionAction,
    GetTransactionsAction,
    ResetErrorsAction
} from './transactions';

export enum ActionTypes {
    getTransactions,
    addTransaction,
    deleteTransaction,
    catchErrors,
    resetErrors
}

export type Action =
    GetTransactionsAction
    | DeleteTransactionAction
    | AddTransactionAction
    | CatchErrorsAction
    | ResetErrorsAction;
// this along with the enum
//sets up an implicit type guard in the reducer
