import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState, Transaction} from "../../reducers";
import {deleteTransaction, getTransactions} from "../../actions";
// Material-UI imports
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export const TransactionsList: React.FC = () => {
    const classes = useStyles();
    // redux hook that grabs a piece of the store (like mapStateToProps)
    const transactions = useSelector((state: StoreState) => state.transactions);
    // redux hook to get dispatch function. this is the alternative to using connect() with no second argument
    // which gives dispatch passed into this component automatically as a prop.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch])

    // create an array of buttons that dispatch the deleteTodo action onClick
    const curTransactions = transactions.map((transaction: Transaction) => (
        <React.Fragment key={transaction._id}>
            <ListItem onClick={() => dispatch(deleteTransaction(transaction._id))}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${transaction.text} : $${transaction.amount}`}
                              secondary={transaction.createdAt}/>
            </ListItem>
        </React.Fragment>
    ));

    return (
        <>
            <List className={classes.root}>
                {curTransactions}
            </List>
        </>
    );
};
