import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({transactions}) => {
    return (
      <table className={style.transactionHistory}>
        <thead className={style.transactionsHead}>
          <tr className={style.title}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={style.transactionBody}>
          {transactions.map(transaction => 
            <tr key={transaction.id}>
              <TransactionHistoryItem 
                type = {transaction.type}
                amount = {transaction.amount}
                currency = {transaction.currency}/>
            </tr>
          )}
        </tbody>
      </table>
    );
}

export default TransactionHistory;

TransactionHistory.propType = {
  transaction: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),),
}