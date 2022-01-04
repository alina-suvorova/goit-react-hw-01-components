import PropTypes from 'prop-types';
const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <><td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td></>
    );
}

export default TransactionHistoryItem;

TransactionHistoryItem.propType = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}