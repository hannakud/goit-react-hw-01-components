import css from './TransactionRow.module.css';
import PropTypes from 'prop-types';
export const TransactionRow = ({ item }) => {
  return (
    <tr className={css.row}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
