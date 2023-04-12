import PropTypes from 'prop-types';
import { TransactionTableBody } from './TransactionTableBody/TransactionTableBody';
import { TransactionTableHeader } from './TransactionTableHeader/TransactionTableHeader';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <TransactionTableHeader />
      <TransactionTableBody items={items} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
