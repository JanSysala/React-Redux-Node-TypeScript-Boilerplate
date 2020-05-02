import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState, Transaction} from "../../reducers";
import {deleteTransaction, getTransactions} from "../../actions";
import "./AddTransactions.scss"


export const TransactionsList: React.FC = () => {
    // redux hook that grabs a piece of the store (like mapStateToProps)
    const transactions = useSelector((state: StoreState) => state.transactions);
    const error = useSelector((state: StoreState) => state.error);

    // redux hook to get dispatch function. this is the alternative to using connect() with no second argument
    // which gives dispatch passed into this component automatically as a prop.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const curTransactions = transactions.map((transaction: Transaction) => (
        <React.Fragment key={transaction._id}>
            <button
                onClick={() => dispatch(deleteTransaction(transaction._id))}
                className="button">
                X
            </button>
            <p>{transaction.text} : ${transaction.amount}</p>
            <p>
                {new Date(transaction.createdAt).getDate()}
                {months[new Date(transaction.createdAt).getMonth()]}
                {new Date(transaction.createdAt).getFullYear()}
            </p>
        </React.Fragment>
    ));

    return (
        <>
            <p>{error}</p>
            <div className="root">
                {curTransactions}
            </div>
        </>
    );
};
