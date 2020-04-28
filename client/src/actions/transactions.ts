import {Dispatch} from 'redux';
import axios from 'axios';
import {ActionTypes} from './actionTypes';
import {AddTransaction, Transaction} from '../reducers';

export interface GetTransactionsAction {
    type: ActionTypes.getTransactions;
    payload: Transaction[];
}

export interface DeleteTransactionAction {
    type: ActionTypes.deleteTransaction;
    payload: number;
}

export interface AddTransactionAction {
    type: ActionTypes.addTransaction;
    payload: Transaction;
}

export interface CatchErrorsAction {
    type: ActionTypes.catchErrors;
    payload: string;
}

export interface ResetErrorsAction {
    type: ActionTypes.resetErrors;
}

export const getTransactions = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('/api/v1/transactions');

            dispatch({
                type: ActionTypes.getTransactions,
                payload: response.data.data
            });
        } catch (err) {
            console.log(err.response.data.error);
        }
    }
};

export const deleteTransaction = (id: Transaction["_id"]) => {
    return async (dispatch: Dispatch) => {
        await axios.delete(`/api/v1/transactions/${id}`);

        dispatch({
            type: ActionTypes.deleteTransaction,
            payload: id
        });
    };
};

export const resetError = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionTypes.resetErrors,
        });
    }
};

export const addTransaction = (transaction: AddTransaction) => {
    return async (dispatch: Dispatch) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await axios.post('/api/v1/transactions', transaction, config)
            .then((res) => {
                dispatch({
                    type: ActionTypes.addTransaction,
                    payload: res.data.data
                });
            }).catch((err) => {
                dispatch({
                    type: ActionTypes.catchErrors,
                    payload: err.response.data.error
                });
            })
    }
};