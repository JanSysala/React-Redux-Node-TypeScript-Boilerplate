import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTransaction, resetError} from "../../actions";


export const AddTransaction: React.FC = () => {
    // create some local state with useState that will tell us if our fetch result is still loading
    // const [fetching, setFetching] = useState(false);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // redux hook that grabs a piece of the store (like mapStateToProps)
    // redux hook to get dispatch function. this is the alternative to using connect() with no second argument
    // which gives dispatch passed into this component automatically as a prop.
    const dispatch = useDispatch();
    // react hook that is called whenever transactions.length is changed
    // useEffect(() => {
    //     if (!!transactions) {
    //         setFetching(false);
    //     }
    // }, [transactions, transactions.length]);

    const onSubmit = e => {
        dispatch(resetError());
        e.preventDefault();

        const transaction = {
            text: text,
            amount: +amount
        }
        dispatch(addTransaction(transaction));
        setText('');
        setAmount(0);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                aria-label={'Add transaction text.'}
                value={text}
                placeholder="Transaction text"
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.target.value)}
            />
            <input
                type="text"
                pattern="[0-9]*"
                aria-label={'Add transaction amount.'}
                value={amount}
                placeholder="Amount"
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setAmount(parseInt(e.target.value) || 0)}
            />
            <button type="submit" aria-label="add">
                +
            </button>
        </form>
    );
};
