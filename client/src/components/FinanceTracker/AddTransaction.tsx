import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {addTransaction, resetError} from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

export const AddTransaction: React.FC = () => {
    const classes = useStyles();
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
        <Paper component="form" className={classes.root} onSubmit={onSubmit}>
            <InputBase
                value={text}
                className={classes.input}
                placeholder="Transaction text"
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.target.value)}
                inputProps={{'aria-label': 'Add transaction text.'}}
            />
            <InputBase
                value={amount}
                className={classes.input}
                placeholder="Amount"
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setAmount(parseInt(e.target.value))} // TODO: parseint breaks it when input is not a number
                inputProps={{'aria-label': 'Add transaction amount.'}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="add">
                <AddIcon/>
            </IconButton>
        </Paper>
    );
};
