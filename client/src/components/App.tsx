import * as React from 'react';
import {AddTransaction} from "./FinanceTracker/AddTransaction";
import {TransactionsList} from "./FinanceTracker/TransactionsList";

export const App: React.FC = () => {
    return (
        <>
            <AddTransaction/>
            <TransactionsList/>
        </>
    );
};
